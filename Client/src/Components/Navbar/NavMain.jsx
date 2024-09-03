import PharmacyLogo from "../../assets/PHARMACY.png";
import "rsuite/dist/rsuite.min.css";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faCartShopping,
  faGift,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Dropdown, IconButton } from "rsuite";
import MenuIcon from "@rsuite/icons/Menu";
import { useState, useEffect } from "react";
import { Icon } from "@rsuite/icons";
import { FaUser } from "react-icons/fa";
import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";

function NavMain() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const usersaved = localStorage.getItem("username");
    console.log("Retrieved username:", usersaved); // Debugging line
    if (usersaved) {
      setUsername(usersaved);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("username");
    setUsername("");
    navigate("/", { replace: true });
  };

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const renderToggle = (props) => (
    <span {...props}>
      <Icon as={FaUser} size="1.4em" className="me-2 mb-1" />
      {`Hello, ${username ? username : "Log in"}`}
    </span>
  );

  const renderIconButton = (props, ref) => {
    return (
      <IconButton
        {...props}
        ref={ref}
        icon={<MenuIcon />}
        circle
        color="green"
        appearance="primary"
      />
    );
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="border-0 w-100"
        fixed="top"
      >
        <div className="container-fluid">
          <Link to="/" className="text-decoration-none">
            <div className="navbar-brand d-flex align-items-center m-0">
              <img src={PharmacyLogo} alt="Pharmacy Logo" className="logo" />
              <div className="flex-slogan mt-1">
                <div>Pharmacy</div>
                <div>at every step</div>
              </div>
            </div>
          </Link>
          <div className="divider"></div>
          <Sidebar />
          <Navbar
            id="responsive-navbar-nav"
            className="justify-content-between"
          >
            <div className="d-none d-lg-flex text-center align-items-center margin-navbar gap-5">
              <Nav.Item>
                <Dropdown
                  renderToggle={renderToggle}
                  placement="bottomEnd"
                  trigger="hover"
                >
                  {username ? (
                    <>
                      <Dropdown.Item>My Profile</Dropdown.Item>
                      <Dropdown.Item>My Orders</Dropdown.Item>
                      <Dropdown.Separator />
                      <Dropdown.Item>Help</Dropdown.Item>
                      <Dropdown.Item>Settings</Dropdown.Item>
                      <Dropdown.Item onClick={handleOpenModal}>
                        Sign Out
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item onClick={() => navigate("/login")}>
                        Log In
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => navigate("/login")}>
                        Sign Up
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown>
              </Nav.Item>
              <Nav.Item>
                <Link to="/footer" className="text-decoration-none text-dark">
                  <FontAwesomeIcon
                    icon={faGift}
                    size="lg"
                    className="item-text-color me-2"
                  />
                  Gift cards
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/cart" className="text-decoration-none text-dark">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="lg"
                    className="item-text-color me-2"
                  />
                  Cart
                </Link>
              </Nav.Item>
              <Dropdown title="Menu" placement="bottomEnd">
                <Dropdown.Item>
                  <Link to="/medicine" className="link-item">
                    Medicine
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/healthcare" className="link-item">
                    HealthCare
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/plus" className="link-item">
                    PLUS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/offers" className="link-item">
                    Offers
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/valuestore" className="link-item">
                    Value Store
                  </Link>
                </Dropdown.Item>
              </Dropdown>
            </div>

            <div className="d-lg-none mx-auto text-center">
              <Nav className="flex-row align-items-center gap-3">
                <Nav.Item className="link-tag">
                  <Link
                    to={username ? "/profile" : "/login"}
                    className="text-decoration-none item-text-color"
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      size="lg"
                      className="item-text-color"
                    />
                  </Link>
                </Nav.Item>
                <Nav.Item className="d-flex flex-row">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="lg"
                    className="text-dark"
                  />
                  <Link
                    to="/cart"
                    className="text-decoration-none text-dark"
                  ></Link>
                </Nav.Item>
                <Dropdown renderToggle={renderIconButton} placement="bottomEnd">
                  <Dropdown.Item>
                    <Link to="/medicine" className="link-item">
                      Medicine
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/healthcare" className="link-item">
                      HealthCare
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/plus" className="link-item">
                      PLUS
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/offers" className="link-item">
                      Offers
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/valuestore" className="link-item">
                      Value Store
                    </Link>
                  </Dropdown.Item>
                </Dropdown>
              </Nav>
            </div>
          </Navbar>
        </div>
      </Navbar>
      <Modal open={open} onClose={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Do you really want to sign out?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => {
              handleSignOut();
              handleCloseModal();
            }}
            appearance="primary"
          >
            Ok
          </Button>
          <Button onClick={handleCloseModal} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NavMain;
