import React from "react";
import "./login.css";
import { Button } from "@mui/material";
import kompuslogo from "../../assets/images/kompuslogo.png";
import { Link } from "react-router-dom";
import { SITE_URL } from "../../utils/const";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center Parentlogin">
      <div className="image">
        <img src={kompuslogo} alt="" />
      </div>
      <div className="def-content Login">
        <h3 className="content-title text-center">Вход</h3>
        <p className="LoginTitle text-center">
          Введите кодовое слово, отправленное вам на <br />
          <a href="#" className="email text-center">
            email@example.com
          </a>
        </p>
        <div className="LoginInput">
          <input type="text" placeholder="Кодовое слово" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Link to={SITE_URL.DASHBOARD}>
            <Button variant="contained" className="btn-red LoginBtn">
              Войти
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
