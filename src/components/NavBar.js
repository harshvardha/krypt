import logo from "../images/logo.png"

const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" />
            <nav>
                <ul className="navbar--navmenu">
                    {["Market", "Exchange", "Tutorials", "Wallets"].map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                    <li id="navbar--login--menuitem">Login</li>
                </ul>
            </nav>
        </div >
    )
}

export default NavBar