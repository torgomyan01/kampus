import React from "react";
import "./dashboard.css";
import MainTemplate from "../../features/main-template/main-template";
import { Button } from "@mui/material";
import diagram from "../../assets/images/diagram.svg";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <MainTemplate>
      <div className="row">
        <div className="col-6 pe-4">
          <div className="def-content">
            <h3 className="content-title">Участники “Кампус”</h3>
            <p className="content-subtitle mt-1">
              Количество участников <br />
              на платформе и программе фонда
            </p>

            <div className="mt-5">
              <img src={diagram} alt="diagram" className="def-image" />
            </div>
            <div className="mt-5 d-flex justify-content-end">
              <Link to="/">
                <Button variant="contained" className="btn-red">
                  Подробнее
                </Button>
              </Link>
            </div>
          </div>

          <div className="def-content mt-5">
            <h3 className="content-title">Список ВУЗов</h3>
            <ul className="vuz">
              <li>УрФУ</li>
              <li>УрГЭУ-СИНХ</li>
              <li>РГППУ</li>
              <li>УрГПУ</li>
              <li>УрГУПС</li>
            </ul>
            <div className="mt-5 d-flex justify-content-end">
              <Button variant="contained" className="btn-red">
                Подробнее
              </Button>
            </div>
          </div>
        </div>

        <div className="col-6 ps-4">
          <div className="def-content">
            <h3 className="content-title">Программы фонда</h3>
            <div className="mt-5 d-flex justify-content-end">
              <Button variant="contained" className="btn-red">
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

export default Dashboard;
