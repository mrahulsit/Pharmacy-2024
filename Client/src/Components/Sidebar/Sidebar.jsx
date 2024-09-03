import * as React from "react";
import Pincode from "./Pincode.jsx";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./Sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [postOffice, setPostOffice] = React.useState("");

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const handleRequest = async () => {
    try {
      const res = await axios.get(
        `https://api.postalpincode.in/pincode/${name}`
      );
      const postOfficeName = res.data[0].PostOffice[0].Name;
      setPostOffice(postOfficeName);
    } catch (error) {
      console.error("Pincode Not Found!");
      setPostOffice("Pincode Not Found!");
    }
  };

  return (
    <div className="head">
      <span className="spanSmall">
        <FontAwesomeIcon icon={faTruckFast} style={{ color: "#089b6f" }} />
        &nbsp; Fast Delivery to
      </span>
      <br />
      <span onClick={toggleDrawer} className="spantext">
        {postOffice ? (
          <span>
            {postOffice} <FontAwesomeIcon icon={faAngleDown} />
          </span>
        ) : (
          <span>
            Select Pincode <FontAwesomeIcon icon={faAngleDown} />
          </span>
        )}
      </span>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        direction="right"
        className="drawer"
        zIndex={9999}
        style={{ width: "400px" }}
      >
        <Pincode
          name={name}
          setName={setName}
          handleRequest={handleRequest}
          closeDrawer={toggleDrawer}
        />
      </Drawer>

      <div className="mobile-device">
        <span className="delivery-name">
          <FontAwesomeIcon icon={faTruckFast} style={{ color: "#089b6f" }} />
          &nbsp; Fast Delivery to
        </span>
        <span onClick={toggleDrawer} className="office-name">
          {postOffice ? (
            <span>
              {postOffice} <FontAwesomeIcon icon={faAngleDown} />
            </span>
          ) : (
            <span>
              Select Pincode <FontAwesomeIcon icon={faAngleDown} />
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
