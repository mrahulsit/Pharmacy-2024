import { useState, useEffect } from "react";
import axios from "axios";
import LoginBanner from "../assets/LoginBanner.png";
import "../Styles/Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../assets/profile.png";
import Signup from "./Signup";

export default function Login() {
  const [showLogin, setShowLogin] = useState(true); // State to toggle between Login and Signup
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [fadeClass, setFadeClass] = useState("fade-enter");
  const navigate = useNavigate();

  useEffect(() => {
    setFadeClass("fade-enter fade-enter-active");
    return () => {
      setFadeClass("fade-enter");
    };
  }, []);

  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (username.length === 0) {
      setError("Username is required");
      toast.error("Username is required");
      return;
    } else {
      setError("");
    }
    if (password.length === 0) {
      setError("Password is required");
      toast.error("Password is required");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/login`,
        {
          username,
          password,
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", username);
        toast.success("User Successfully Logged In");
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } else {
        setError("Invalid username or password.");
        toast.error("Invalid username or password.");
      }
    } catch (err) {
      setError("Error during login. Please try again.");
      toast.error("Error during login. Please try again.");
    }
  };

  return (
    <>
      {showLogin ? (
        <div className={`login-box ${fadeClass}`}>
          <div className="image-div">
            <img src={LoginBanner} alt="Login Banner" />
          </div>
          <div className="login-container">
            <img src={Profile} alt="Profile Photo" className="profile-image" />
            <div className="form-login">
              <form onSubmit={handleLogin} className="form-flex">
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    className="checkbox-width"
                    checked={showPassword}
                    onChange={handleShowPass}
                  />
                  Show Password
                </label>
                <Link to="/user/forgot_pass">
                  <div className="forgot-pass">Forgot Password?</div>
                </Link>
                <div className="button-container">
                  <button type="submit">Login</button>
                  <div className="button-Sign">
                    <button type="button" onClick={() => setShowLogin(false)}>
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Signup switchToLogin={() => setShowLogin(true)} />
      )}
      <ToastContainer />
    </>
  );
}
