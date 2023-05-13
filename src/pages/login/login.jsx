import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import kompuslogo from "../../assets/images/kompuslogo.png";

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
        <div className="Logininput">
          <input type="text" placeholder="Кодовое слово" />
        </div>
        <div className="ParentBtn">
          <Button variant="contained" className="btn-red Loginbtn">
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
