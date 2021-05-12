import logo from "../../../logo.svg";

const Header = ({ selected }) => {
    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <nav className="nav-bar">
                <a className={`link ${selected === "HOME" ? "selected" : ""}`} href="/">Home</a>
                <a className={`link ${selected === "RESUME" ? "selected" : ""}`} href="/resume">Resume</a>
                <a className={`link ${selected === "WORK" ? "selected" : ""}`} href="/work">Work</a>
                <a className={`link ${selected === "CONTACT" ? "selected" : ""}`} href="/contact-us">Contact</a>
            </nav>
        </header>
    )
}


export default Header;