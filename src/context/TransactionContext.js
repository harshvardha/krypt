import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { contractABI, contractAddress } from "../utils/constants"

const TransactionContext = React.createContext()
const { ethereum } = window

const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer)
    return transactionsContract
}

const TransactionsProvider = ({ children }) => {
    const [formData, setFormData] = useState({ addressTo: "", amount: "", keyword: "", message: "" })
    const [currentAccount, setCurrentAccount] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"))
    const [transactions, setTransactions] = useState([])

    const handleChange = (event, name) => {
        setFormData(prevState => ({ ...prevState, [name]: event.target.value }))
    }

    const getAllTransactions = async () => {
        try {
            if (ethereum) {
                const transactionsContract = createEthereumContract()
                const availableTransactions = await transactionsContract.getAllTransactions()
                const structuredTransactions = availableTransactions.map(transaction => ({
                    addressTo: transaction.receiver,
                    addressFrom: transaction.sender,
                    timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                    message: transaction.message,
                    keyword: transaction.keyword,
                    amount: parseInt(transaction.amount._hex) / (10 ** 18)

                }))
                console.log(structuredTransactions)
                setTransactions(structuredTransactions)
            }
            else {
                console.log("Ethereum is not present")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const checkIfWalletConnect = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask")
            const accounts = await ethereum.request({ method: "eth_accounts" })
            if (accounts.length) {
                setCurrentAccount(accounts[0])
                getAllTransactions()
            }
            else {
                console.log("No accounts found")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const checkIfTransactionsExist = async () => {
        try {
            if (ethereum) {
                const transactionsContract = createEthereumContact()
                const currentTransactionCount = await transactionsContract.getTransactionCount()
                window.localStorage.setItem("transactionCount", currentTransactionCount)
            }
        }
        catch (error) {
            console.log(error)
            throw new Error("No ethereum object")
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask")
            const accounts = await ethereum.request({ method: "eth_requestAccounts" })
            setCurrentAccount(accounts[0])
            window.location.reload()
        }
        catch (error) {
            console.log(error)
            throw new Error("No Ethereum Object")
        }
    }

    const sendTransaction = async () => {
        try {
            if (ethereum) {
                const { addressTo, amount, keyword, message } = formData
                const transactionsContract = createEthereumContract()
                const parsedAmount = ethers.utils.parseEther(amount)
                await ethereum.request({
                    method: "eth_sendTransaction",
                    params: [{
                        from: currentAccount,
                        to: addressTo,
                        gas: "0x5208",
                        value: parsedAmount._hex
                    }]
                })
                const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword)
                setIsLoading(true)
                console.log(`Loading - ${transactionHash.hash}`)
                await transactionHash.wait()
                console.log(`Success - ${transactionHash.hash}`)
                setIsLoading(false)
                const transactionCount = await transactionsContract.getTransactionCount()
                setTransactionCount(transactionCount)
                window.location.reload()
            }
            else {
                console.log("No Ethereum Object")
            }
        }
        catch (error) {
            console.log(error)
            throw new Error("No ethereum object")
        }
    }

    useEffect(() => {
        checkIfWalletConnect()
        checkIfTransactionsExist()
    }, [transactionCount])

    return (
        <TransactionContext.Provider
            value={{
                transactionCount,
                connectWallet,
                transactions,
                currentAccount,
                isLoading,
                sendTransaction,
                handleChange,
                formData
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}

export { TransactionContext, TransactionsProvider }