import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/ldl-logo.svg";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const addBackgroundOnScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else if (window.scrollY < 100) {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", addBackgroundOnScroll);

    return () => {
      document.removeEventListener("scroll", addBackgroundOnScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo-box">
        <Link to="/">
          <img
            src={Logo}
            alt="Lorenzo Di Leonardo logo"
            className="navbar__logo"
          />
        </Link>
      </div>
      <ul className="navbar__list">
        <li
          className={`navbar__list-item ${
            location.pathname === "/" ? "navbar__list-item--active" : ""
          }`}>
          <Link to="/" className="navbar__link">
            Portfolio
          </Link>
        </li>
        <li
          className={`navbar__list-item ${
            location.pathname === "/about" ? "navbar__list-item--active" : ""
          }`}>
          <Link to="/about" className="navbar__link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
