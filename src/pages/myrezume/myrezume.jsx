import React from "react";
import "./my-resume.css";
import Fade from "react-reveal/Fade";
import MainTemplate from "../../features/main-template/main-template";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function MyResume() {
  return (
    <MainTemplate>
      <Fade>
        <div className="MyResume">
          <div className="def-content MyResumeContent">
            <h2>Мои резюме</h2>
          </div>
          <div className="def-content MyResumeContent">
            <h3 className="MyResumeTitle">Python-разработчик</h3>
            <p className="MyResumeText">Обновлено 28 декабря 2022 в 18:22</p>
            <div className="MyResumeParentBox">
              <h4>Статистика за неделю</h4>
              <div className="MyResumeBox">
                <span>20 показов</span>
                <div className="gray" />
                <span>20 просмотров</span>
                <div className="gray" />
                <span>8 приглашений</span>
              </div>
            </div>
            <div className="RezumeParentBtn">
              <Link>
                <Button variant="contained" className="btn-red RezumeBtn">
                  Редактировать
                </Button>
              </Link>
            </div>
          </div>
          <div className="def-content MyResumeContent">
            <h3 className="MyResumeTitle">Frontend-разработчик</h3>
            <p className="MyResumeText">Обновлено 31 декабря 2022 в 23:59</p>
            <div className="MyResumeParentBox">
              <h4>Статистика за неделю</h4>
              <div className="MyResumeBox">
                <span>0 показов</span>
                <div className="gray"></div>
                <span>0 просмотров</span>
                <div className="gray"></div>
                <span>0 приглашений</span>
              </div>
            </div>
            <div className="RezumeParentBtn">
              <Link>
                <Button variant="contained" className="btn-red RezumeBtn">
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

export default MyResume;
