import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { useState } from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginBtn, setLoginBtn] = useState("Login");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="wrapper navbar">
        <a href="#" className="logo">
          <img
            src={logo}
            alt="TasteBit Express"
            width={"75px"}
            height={"75px"}
          />
        </a>
        <nav className={menuOpen ? "toggle-menu" : ""}>
          <svg
            className="close"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleMenu}
          >
            <path
              d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
              fill="red"
            />
          </svg>
          <ul className="links">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="btn">
            <button type="submit">
              <FontAwesomeIcon icon={faCartShopping} />
              <p>Cart</p>
            </button>
          </div>
          <div className="btn">
            <button
              type="submit"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              <FontAwesomeIcon icon={faUser} />

              <p>{loginBtn}</p>
            </button>
          </div>
        </nav>
        <svg
          className="hamburger"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleMenu}
        >
          <path
            d="M15 22.5H3.75V20H15V22.5ZM26.25 16.25H3.75V13.75H26.25V16.25ZM26.25 10H15V7.5H26.25V10Z"
            fill="white"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
