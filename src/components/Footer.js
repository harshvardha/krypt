import logo from "../images/logo.png"

const Footer = () => {
    return (
        <div className="footer gradient-bg-footer">
            <div className="footer--shortcuts">
                <div className="footer--shortcuts--logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer--shortcuts--nav">
                    <p className="footer--shortcuts--nav--item">Market</p>
                    <p className="footer--shortcuts--nav--item">Exchange</p>
                    <p className="footer--shortcuts--nav--item">Tutorials</p>
                    <p className="footer--shortcuts--nav--item">Wallets</p>
                </div>
            </div>
            <div className="footer--invitation">
                <p>Come join us and hear for the unexpected miracle</p>
                <p>info@kryptomastery.com</p>
            </div>
            <div className="footer--divider"></div>
            <div className="footer--copyright">
                <p className="footer--copyright--item">@kryptomastery2022</p>
                <p className="footer--copyright--item">All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer