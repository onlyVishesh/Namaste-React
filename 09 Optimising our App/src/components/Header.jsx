import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import useStatus from "../utils/useStatus";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useStatus();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="wrapper navbar">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="TasteBit Express"
            width={"75px"}
            height={"75px"}
          />
        </Link>
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="btn">
            <button type="submit">
              <FontAwesomeIcon icon={faCartShopping} />
              <p>Cart</p>
            </button>
          </div>
          <div className="btn">
            {isLoggedIn ? (
              <button type="submit" onClick={() => setIsLoggedIn(false)}>
                <FontAwesomeIcon icon={faUser} />
                <p>Logout</p>
              </button>
            ) : (
              <Link to="/login">
                <button
                  type="submit"
                  className="login-btn"
                  onClick={() => {
                    setIsLoggedIn(true);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      color: onlineStatus ? "#00ca00" : "#ff0000",
                      fontSize: "20px",
                    }}
                  />
                  <p>Login</p>
                </button>
              </Link>
            )}
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
