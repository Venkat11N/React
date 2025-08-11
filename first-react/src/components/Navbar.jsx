import Header from "../header";
import reactLogo from "../assets/react-logo.png"

function Navbar() {
    return (
        <header className="navbar">
            <nav className="nav">
                <img src={reactLogo} alt="React Logo " />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}

export default Navbar;