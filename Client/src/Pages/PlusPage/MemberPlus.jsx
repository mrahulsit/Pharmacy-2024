import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlusBanner from "../../assets/Plus-Banner.png";
import PlusBannerMobile from "../../assets/Plus-Banner-Mobile.png";
import "./Member.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function MemberPlus() {
  return (
    <div>
      <Link to="/member">
        <div className="plus-image">
          <img src={PlusBanner} alt="Member-Image" />
          <img
            src={PlusBannerMobile}
            alt="Mobile-Image"
            className="mobile-visible"
          />
          <button className="explore-button" to="/member">
            <span>
              <span>Explore Now</span> <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </button>
        </div>
      </Link>
    </div>
  );
}
