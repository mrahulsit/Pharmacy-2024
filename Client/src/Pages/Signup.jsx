/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginBanner from "../assets/SignUpBanner.png";
import "../Styles/Signup.css";
import Profile from "../assets/profile2.png";

export default function Signup({ switchToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [fadeClass, setFadeClass] = useState("fade-enter");

  useEffect(() => {
    setFadeClass("fade-enter fade-enter-active");
    return () => {
      setFadeClass("fade-enter");
    };
  }, []);

  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    if (username.length === 0) {
      setError("Username cannot be empty");
      toast.error("Username cannot be empty");
      return;
    } else if (email.length === 0) {
      setError("Email cannot be empty");
      toast.error("Email cannot be empty");
      return;
    } else if (password.length === 0) {
      setError("Password cannot be empty");
      toast.error("Password cannot be empty");
      return;
    } else {
      setError("");
      setSuccess("");
      setUsername("");
      setEmail("");
      setPassword("");
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_REGISTER}/api/register`,
        {
          username,
          email,
          password,
        }
      );
      if (response.status === 200) {
        setSuccess("Signup completed. Navigate to Log in.");
        toast.success("Signup completed. Navigate to Log in.");
      } else {
        setError("Signup failed. Please try again.");
        toast.error("Signup failed. Please try again.");
      }
    } catch (err) {
      setError("Error occurred. Please try again.");
      toast.error("Error occurred. Please try again.");
    }
  };

  return (
    <div className={`signup-box ${fadeClass}`}>
      <div className="image-div">
        <img src={LoginBanner} alt="Signup Banner" />
      </div>
      <div className="signup-form">
        <img src={Profile} alt="Profile Photo" className="profile-img" />
        <div className="sign-form">
          <form onSubmit={handleSignup}>
            <label htmlFor="username">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="signup"
              placeholder="Username"
            />

            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup"
              placeholder="Email"
            />

            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup"
              placeholder="Password"
            />
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-width"
                checked={showPassword}
                onChange={handleShowPass}
              />
              Show Password
            </label>
            <div className="button-keeper">
              <button type="submit">Signup</button>
              <button type="button" onClick={switchToLogin}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
