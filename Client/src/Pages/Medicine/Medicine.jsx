import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./Medicine.css";
import {
  faAngleDown,
  faStar,
  faPercent,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
export default function Medicine() {
  return (
    <div>
      <div className="container-home">
        <Breadcrumb>
          <Breadcrumb.Item href="/" className="link-decor">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active href="/medicine">
            Medicine
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="order-text">Order Medicines Online</h2>
        <div className="content-box">
          <div className="info-text">
            <span>
              <FontAwesomeIcon icon={faStar} size="xs" />
              &nbsp;100% Genuine Product
            </span>
            <span>
              <FontAwesomeIcon icon={faPercent} size="xs" />
              &nbsp;Discounted Products
            </span>
            <span>
              <FontAwesomeIcon icon={faTruck} size="xs" />
              &nbsp;Home Delivery
            </span>
          </div>
          <h5 className="search-text">
            Search for Medicines or Healthcare Products
          </h5>
          <button className="pincode-button">
            <span
              style={{
                padding: "0",
                marginRight: "0.8em",
                margin: "auto",
              }}
            >
              Select Pincode <FontAwesomeIcon icon={faAngleDown} />
              <span
                style={{
                  borderRight: "2px solid hsla(0, 0%, 51%, 0.5)",
                  marginLeft: "1.5em",
                  marginRight: "1em",
                  width: "100%",
                  height: "1em",
                }}
              ></span>
            </span>
            <input
              type="text"
              className="search-bar"
              placeholder="Search for Medicines/HealthCare Products"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
