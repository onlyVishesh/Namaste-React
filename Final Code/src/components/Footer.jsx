import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { githubLink, linkedinLink, repoIssue, repoLink, twitterLink } from "../utils/config";

import "./Footer.css";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <div className="footer-top">
        <h4 className="footer-heading">
          TasteBit <span>Express</span>
        </h4>
        <div className="social">
          <a href={twitterLink} target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href={githubLink} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={linkedinLink} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div className="footer-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a href={repoLink} target="_blank">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href={repoLink} target="_blank">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href={repoIssue} target="_blank">
                  FAQs
                </a>
              </li>
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

export default Footer;
