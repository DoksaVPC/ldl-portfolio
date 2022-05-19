import { Link } from "react-router-dom";
import Logo from "../assets/img/ldl-logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo-box">
        <img
          src={Logo}
          alt="Lorenzo Di Leonardo logo"
          className="navbar__logo"
        />
      </div>
      <ul className="navbar__list u_show-on-desktop">
        <li className="navbar__list-item">
          <Link to="/about" className="navbar__link">
            About
          </Link>
        </li>
        <li className="navbar__list-item">
          <Link to="/" className="navbar__link">
            Portfolio
          </Link>
        </li>
        <li className="navbar__list-item">
          <Link to="/" className="navbar__link">
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
