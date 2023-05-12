import React from "react";
import "./navbar.css";
import Logo from "../../assets/images/logo-site.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="container h-100 d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={Logo} alt="Logo SIte" />
        </Link>

        <Dropdown>
          <Dropdown.Toggle variant="outline-light" className="nav-dropdown">
            <div className="d-flex justify-content-end align-items-center cursor-pointer">
              <span className="nav-user-name">Дружинин Андрей</span>
              <div className="nav-user-image" />
              <i className="fa-regular fa-chevron-down c-black" />
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}

export default Navbar;
