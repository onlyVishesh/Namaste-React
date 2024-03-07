import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCartShopping,
  faLeaf,
  faSearch,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Structure
/*
  HOME Page

  1. Navbar
    i) logo
    ii) links like home, about, contact etc
    iii) Cart
    iv) login
    reference link https://codepen.io/giorgioGTelian/pen/YzgowWZ
  2. Body
    i) Search bar and search button
    ii) restaurant cards
      1. image
      2. name
      3. catagories
      4. rating
      5. extra info based on api
  3. Footer
    i) name and logo
    ii) social media links
    iii) quick links for about, privacy policy t&c ect
    iv) copyright
    v) download app buttons
    for reference https://codepen.io/enjamulislam/pen/XWOojBp

*/
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import logo from "./assets/images/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <button type="submit">
              <FontAwesomeIcon icon={faUser} />

              <p>Login</p>
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

const Home = () => {
  return (
    <div className="header">
      <div className="search">
        <input type="text" placeholder="Search Restaurant" />
        <button className="search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  const avgRating = 2.7;
  const isVeg = true;
  return (
    <div className="res-cards">
      <div className="res-card">
        <figure className="res-image">
          <div
            className="res-img"
            alt="Shree Guru Vashishth"
            style={{
              backgroundImage:
                "url('https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/af2myzan7wikelfhb06e')",
            }}
          >
            <figcaption className="res-offer">30% off upyo rs75</figcaption>
          </div>
          <figcaption className="res-name">shree guru vashishth</figcaption>
        </figure>
        <div className="res-cuisines">Pizzas, Pastas</div>
        <div className="res-location">Paharganj</div>
        <section className="extras">
          <div
            className="res-avgRating"
            style={{ backgroundColor: avgRating > 2.5 ? "#57E32C" : "#FF4545" }}
          >
            <FontAwesomeIcon icon={faStar} /> {avgRating}
          </div>
          &#8226;
          <div className="res-deliverTime">28 mins</div>
          {isVeg ? (
            <>
              &#8226;
              <div className="res-isVeg">
                <FontAwesomeIcon icon={faLeaf} style={{ color: "#008000" }} />{" "}
                Pure Veg
              </div>
            </>
          ) : (
            ""
          )}
        </section>
      </div>
    </div>
  );
};

const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <div className="footer-top">
        <h4 className="footer-heading">
          TasteBit <span>Express</span>
        </h4>
        <div className="social">
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div className="footer-links">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>FAQs</li>
            </ul>
          </div>
          <p className="copyright">
            <FontAwesomeIcon icon={faCopyright} /> {date.getFullYear()} TasteBit
            Express All rights reserved.
          </p>
        </div>
        <div className="footer-bottom-right">
          <button className="playStore download-btn">
            <div className="icon">
              <svg
                className="download-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="google-play"
              >
                <path
                  fill="#2196F3"
                  d="M8.32 7.68.58 15.42c-.37-.35-.57-.83-.57-1.35V1.93C.01 1.4.22.92.6.56l7.72 7.12z"
                ></path>
                <path
                  fill="#FFC107"
                  d="M15.01 8c0 .7-.38 1.32-1.01 1.67l-2.2 1.22-2.73-2.52-.75-.69 2.89-2.89L14 6.33c.63.35 1.01.97 1.01 1.67z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M8.32 7.68.6.56C.7.46.83.37.96.29 1.59-.09 2.35-.1 3 .26l8.21 4.53-2.89 2.89z"
                ></path>
                <path
                  fill="#F44336"
                  d="M11.8 10.89 3 15.74c-.31.18-.66.26-1 .26-.36 0-.72-.09-1.04-.29a1.82 1.82 0 0 1-.38-.29l7.74-7.74.75.69 2.73 2.52z"
                ></path>
              </svg>
            </div>
            <div className="icon-details">
              <p className="download-p">Get it On</p>
              <p className="download-app">Google Play</p>
            </div>
          </button>
          <button className="appStore download-btn">
            <div className="icon">
              <svg
                className="download-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496.255 608.728"
                id="apple"
              >
                <path
                  fill="#999"
                  d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z"
                ></path>
              </svg>
            </div>
            <div className="icon-details">
              <p className="download-p">Download On</p>
              <p className="download-app">Apple Store</p>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

// render replaces the content of the container with a new one.
root.render(<AppLayout />);
