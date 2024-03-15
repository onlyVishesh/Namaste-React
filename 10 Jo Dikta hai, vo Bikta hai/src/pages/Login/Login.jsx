import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doPasswordReset,
  doCreateUserWithEmailAndPassword,
} from "../../auth";
import { useAuth } from "../../utils/auth";
import { auth } from "../../firebase/firebase"; // Import firebase/auth explicitly

import "./Login.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const closeContainer = () => {
    navigate("/");
  };

  const handleSignInWithEmailAndPassword = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      try {
        await doSignInWithEmailAndPassword(email, password);
        navigate("/");
      } catch (error) {
        console.error("Error signing in:", error.message);
        setIsSigningIn(false);
      }
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await doSignInWithGoogle();
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    try {
      await doPasswordReset(email);
      alert("Password reset email sent. Please check your inbox.");
      setIsResettingPassword(false);
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="login">
      <div className={`container ${isSignUp ? "active" : ""}`}>
        <button className="close-button" onClick={closeContainer}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        {isResettingPassword ? (
          <div className="form-container forgot-password">
            <form onSubmit={handlePasswordReset}>
              <h1 className="login-heading">Forgot Password</h1>
              <span>Enter your email address to reset your password</span>
              <input type="email" name="email" placeholder="Email" />
              <button type="submit">Reset Password</button>
              <button
                className="back-to-signin"
                onClick={() => setIsResettingPassword(false)}
              >
                Back to Sign In
              </button>
            </form>
          </div>
        ) : (
          <>
            <div className="form-container sign-in">
              <form onSubmit={handleSignInWithEmailAndPassword}>
                <h1 className="login-heading">Sign In</h1>
                <div className="social-icons">
                  <button className="icon" onClick={handleSignInWithGoogle}>
                    <FontAwesomeIcon icon={faGoogle} />
                  </button>
                </div>
                <span>or use your email and password</span>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <a
                  href="#"
                  className="forgot-password"
                  onClick={() => setIsResettingPassword(true)}
                >
                  → Forget Your Password? ←
                </a>
                <button type="submit">Sign In</button>
              </form>
            </div>
            <div className="form-container sign-up">
              <form onSubmit={handleSignUp}>
                <h1 className="login-heading">Create Account</h1>
                <div className="social-icons">
                  <button className="icon" onClick={handleSignInWithGoogle}>
                    <FontAwesomeIcon icon={faGoogle} />
                  </button>
                </div>
                <span>or use your email for registration</span>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </>
        )}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button className="hidden" onClick={toggleForm}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all site features
              </p>
              <button className="hidden" onClick={toggleForm}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
