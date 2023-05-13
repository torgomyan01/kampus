import React from "react";
import "./works.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import MainTemplate from "../../features/main-template/main-template";

function Works() {
  return (
    <MainTemplate>
      <Fade>
        <div className="Works">
          <div className="def-content WorksContent">
            <h2>Вакансии</h2>
          </div>
          <div className="def-content WorksContent">
            <h3 className="WorksTitle">Python-разработчик</h3>
            <p className="WorksText">Обновлено 28 декабря 2022 в 18:22</p>
            <div className="WorksParentBox">
              <h4>Статистика за неделю</h4>
              <div className="WorksBox">
                <span>20 показов</span>
                <div className="gray" />
                <span>20 просмотров</span>
                <div className="gray" />
                <span>8 приглашений</span>
              </div>
            </div>
            <div className="WorksParentBtn">
              <Link>
                <Button variant="contained" className="btn-red WorksBtn">
                  Редактировать
                </Button>
              </Link>
            </div>
          </div>
          <div className="def-content WorksContent">
            <h3 className="WorksTitle">Frontend-разработчик</h3>
            <p className="WorksText">Обновлено 31 декабря 2022 в 23:59</p>
            <div className="WorksParentBox">
              <h4>Статистика за неделю</h4>
              <div className="WorksBox">
                <span>0 показов</span>
                <div className="gray"></div>
                <span>0 просмотров</span>
                <div className="gray"></div>
                <span>0 приглашений</span>
              </div>
            </div>
            <div className="WorksParentBtn">
              <Link>
                <Button variant="contained" className="btn-red WorksBtn">
                  Редактировать
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    </MainTemplate>
  );
}

export default Works;
