import { AiFillPlayCircle } from "react-icons/ai"
import { SiEthereum } from "react-icons/si"
import { BiInfoCircle } from "react-icons/bi"

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="welcome--connect--wallet">
                <h1 className="text-gradient welcome--title">Buy and sell <br /> trusted Crypto</h1>
                <p className="welcome--about">
                    Explore the crypto world. Buy and Sell <br /> cryptocurrencies easily on krypt.
                </p>
                <button className="welcome--connect--wallet--button">
                    <AiFillPlayCircle style={{ color: "white", verticalAlign: "text-bottom" }} /> connect wallet
                </button>
                <div className="grid-container">
                    <div className="welcome--blockchain--features" style={{ borderTopLeftRadius: "20px" }}>
                        Reliability
                    </div>
                    <div className="welcome--blockchain--features">Security</div>
                    <div className="welcome--blockchain--features" style={{ borderTopRightRadius: "20px" }}>
                        Ethereum
                    </div>
                    <div className="welcome--blockchain--features" style={{ borderBottomLeftRadius: "20px" }}>
                        Web 3.0
                    </div>
                    <div className="welcome--blockchain--features">Low Fees</div>
                    <div className="welcome--blockchain--features" style={{ borderBottomRightRadius: "20px" }}>
                        Blockchain
                    </div>
                </div>
            </div>
            <div className="welcome--transaction--form">
                <div className="welcome--ethereum--card eth-card">
                    <div className="welcome--ethereum--card--icon--info">
                        <div style={{
                            padding: "10px 13px 10px 13px", borderRadius: "100%",
                            border: "2px solid white", marginLeft: "20px"
                        }}>
                            <SiEthereum style={{
                                fontSize: "25px",
                            }} />
                        </div>
                        <BiInfoCircle style={{ marginRight: "20px" }} />
                    </div>
                    <div className="welcome--ethereum--card--address">
                        <p>address</p>
                        <h4>Ethereum</h4>
                    </div>
                </div>
                <div className="welcome--form"></div>
            </div>
        </div>
    )
}

export default Welcome