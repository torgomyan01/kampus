import React from "react";
import "./navbar.css";
import Logo from "../../assets/images/logo-site.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { SITE_URL } from "../../utils/const";

function Navbar() {
  return (
    <div className="nav">
      <div className="container h-100 d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={Logo} alt="Logo SIte" className="logo-site" />
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
            <Dropdown.Item href={SITE_URL.MY_RESUME}>Мои резюме</Dropdown.Item>
            <Dropdown.Item href={SITE_URL.MY_WORKS}>Вакансии</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Navbar;
