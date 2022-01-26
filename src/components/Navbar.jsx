import Logo from '../assets/img/ldl-logo.svg';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo-box">
                <img src={Logo} alt="Lorenzo Di Leonardo logo" className="navbar__logo" />
            </div>
            <ul className="navbar__list u_show-on-desktop">
                <li className="navbar__list-item"><a href="#" className="navbar__link">About</a></li>
                <li className="navbar__list-item"><a href="#" className="navbar__link">Projects</a></li>
                <li className="navbar__list-item"><a href="#" className="navbar__link">Contacts</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
