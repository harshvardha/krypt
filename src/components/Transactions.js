import React, { useContext } from "react"
import { TransactionContext } from "../context/TransactionContext"
import { dummyData } from "../utils/dummyData"
import { shortenAddress } from "../utils/shortenAddress"
import useFetch from "../hooks/useFetch"

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    const gifUrl = useFetch({ keyword })
    return (
        <div className="transaction--card">
            <a className="transaction--card--details" href={`https://ropsten.etherscan.io/address/${addressFrom}`}>
                <p>From: {shortenAddress(addressFrom)}</p>
            </a>
            <a className="transaction--card--details" href={`https://ropsten.etherscan.io/address/${addressTo}`}>
                <p>To: {shortenAddress(addressTo)}</p>
            </a>
            <p className="transaction--card--details">Amount: {amount} ETH</p>
            {message && (
                <p className="transaction--card--details" style={{ wordWrap: "break-word" }}>Message: {message}</p>
            )}
            <img
                src={gifUrl || url}
                alt="nature"
                className="transaction--card--gif"
            />
            <p className="transaction--card--timestamp">{timestamp}</p>
        </div>
    )
}

const Transactions = () => {
    const { transactions, currentAccount } = useContext(TransactionContext)

    return (
        <div className="transactions gradient-bg-transactions">
            {currentAccount ? (
                <h3>Latest Transactions</h3>
            ) : (
                <h3>Connect your account to see the latest transactions</h3>
            )}
            <div className="transactions--container">
                {[...transactions].reverse().map((transaction, i) => (
                    <TransactionsCard key={i} {...transaction} />
                ))}
            </div>
        </div>
    )
}


export default Transactions