import reactLogo from "./assets/react-logo.png"

 
function Header() {
  return (
    <header className="header">
      <img className="react-logo" src={reactLogo} alt="React Logo" width="40px" />
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;