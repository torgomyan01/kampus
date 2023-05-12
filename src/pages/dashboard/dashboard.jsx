import React from "react";
import "./dashboard.css";
import MainTemplate from "../../features/main-template/main-template";
import { Button } from "@mui/material";
import diagram from "../../assets/images/diagram.svg";

function Dashboard() {
  return (
    <div>
      <MainTemplate>
        <div className="container" style={{ marginTop: 174 }}>
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
        </div>
      </MainTemplate>
    </div>
  );
}

export default Dashboard;
