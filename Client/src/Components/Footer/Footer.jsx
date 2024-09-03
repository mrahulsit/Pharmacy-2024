import "./Footer.css";
import { useState } from "react";
import PharmacyLogo from "../../assets/PHARMACY.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faProductHunt,
  faSquareXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");

  const submitLetter = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/mail`,
        { email }
      );
      if (response.status == 200) {
        console.log("Email Sent Successfully");
        toast.success("Email Sent Successfully");
      }
      setEmail("");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email. Please try again");
    }
  };
  return (
    <>
      <div className="divider-footer"></div>
      <div id="bot3">
        <div className="follow">
          <div>
            <span>Sign up to our newsletter </span>
            <p>
              Stay up to date with the latest news , announcements , articles
              and blogs
            </p>
          </div>
          <div id="newsletter">
            <input
              type="text"
              name="email"
              placeholder="Email"
              id="letter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="button" onClick={submitLetter}>
              Subscribe
            </button>
          </div>
        </div>

        <div className="logo-div">
          <img src={PharmacyLogo} alt="Pharmacy Logo" className="logoImage" />
          <div className="logo-text">
            <div>Pharmacy</div>
            <div>at every step</div>
          </div>
          <span className="textInfo">
            Stay updated with our daily newsletter and become an active user
            with chance to win exciting prizes every week.
          </span>
        </div>

        <div id="b3first">
          <div id="feat">
            <div>
              <h4>Featured Categories</h4>
              <p>Nutrition & Fitness</p>
              <p>Personal Care</p>
              <p>Ayurvedic Care</p>
              <p>Maternal Care</p>
              <p>Diabetic Care</p>
              <p>Women Care</p>
              <p>Ortho Care</p>
            </div>
            <div>
              <h4>Company</h4>
              <p>About us</p>
              <p>Partner</p>
              <p>Careers</p>
              <p>Blogs</p>
              <p>News</p>
              <p>Policy</p>
              <p>Contact</p>
            </div>
            <div>
              <h4>Resources</h4>
              <p>Blog</p>
              <p>Timeline</p>
              <p>FAQs</p>
              <p>Support</p>
              <p>Products</p>
              <p>Newsletter</p>
              <p>Address</p>
            </div>
            <div>
              <h4>Social</h4>
              <p>Instagram</p>
              <p>XTwitter</p>
              <p>LinkedIn</p>
              <p>Github</p>
              <p>ProductHunt</p>
              <p>Facebook</p>
              <p>Whatsapp</p>
            </div>
            <div>
              <h4>Help & Support</h4>
              <p>Customer Support</p>
              <p>Return & Exchange Policy</p>
              <p>Payment Options</p>
              <p>Shipping & Delivery</p>
              <p>Refund & Return</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className="divider-footer"></div>
        <div className="downside">
          <span id="copy">&copy; 2024 Pharmacy. All Rights Reserved</span>
          <div className="connect" style={{ color: "#068f66" }}>
            <FontAwesomeIcon icon={faFacebook} size="xl" />
            <FontAwesomeIcon icon={faInstagram} size="xl" />
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
            <FontAwesomeIcon icon={faWhatsapp} size="xl" />
            <FontAwesomeIcon icon={faProductHunt} size="xl" />
            <FontAwesomeIcon icon={faSquareXTwitter} size="xl" />
          </div>
        </div>

        {/* <div className="hindi-slogan">हमेशा आपके साथ, हमेशा आपके पास।</div> */}
      </div>
      <ToastContainer />
    </>
  );
};

export default Footer;
