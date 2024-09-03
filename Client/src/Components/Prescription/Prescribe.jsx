import "./Prescribe.css";
import { Pre_Paper } from "../../assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Prescribe() {
  const [open, setOpen] = useState(false);
  const accordionRef = useRef(null);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      const accordion = accordionRef.current;
      accordion.style.height = `${accordion.scrollHeight}px`;
      accordion.style.opacity = "1";
    } else {
      const accordion = accordionRef.current;
      accordion.style.height = "0";
      accordion.style.opacity = "0";
    }
  }, [open]);
  return (
    <div className="container-file">
      <div className="order-div">
        <img src={Pre_Paper} className="order-image" />
        <div className="flex-order">
          <div className="order-heading">Order with Prescription</div>
          <div className="order-caption">
            Upload Prescription, Get Your Order Delivered
          </div>
          <Link to="/upload/medicines">
            <button className="file-upload">
              <FontAwesomeIcon icon={faPaperclip} /> Upload
            </button>
          </Link>
        </div>
      </div>
      <div className="content-process">
        <div className="content-flex">
          <span>How the process works ?</span>
          <div className="process-rules">
            <div className="div-1">
              <span className="rule-text">1</span>
              <h5 className="rule-caption">
                Upload photo of your Prescription
              </h5>
            </div>
            <div className="div-1">
              <span className="rule-text">2</span>
              <h5 className="rule-caption">
                Add delivery address and place order
              </h5>
            </div>

            <div className="div-2">
              <span className="rule-text">3</span>
              <h5 className="rule-caption">
                We will confirm your medicines by call
              </h5>
            </div>
            <div className="div-2">
              <span className="rule-text">4</span>
              <h5 className="rule-caption">
                Rest until your order is delivered
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-div">
        <div className="process-accordion">
          <span>How the process works ?</span>
          <button
            className={`process-button ${open ? "rotated" : "original"}`}
            onClick={toggleAccordion}
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        </div>
        <div
          className={`open-accordion ${open ? "expanded" : ""}`}
          ref={accordionRef}
        >
          <div className="open-accordion">
            <div className="div-1">
              <span className="rule-text">1</span>
              <h5 className="rule-caption">
                Upload photo of your Prescription
              </h5>
            </div>
            <div className="div-1">
              <span className="rule-text">2</span>
              <h5 className="rule-caption">
                Add delivery address and place order
              </h5>
            </div>
            <div className="div-2">
              <span className="rule-text">3</span>
              <h5 className="rule-caption">
                We will confirm your medicines by call
              </h5>
            </div>
            <div className="div-2">
              <span className="rule-text">4</span>
              <h5 className="rule-caption">
                Rest until your order is delivered
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
