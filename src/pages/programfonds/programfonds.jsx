import React from "react";
import MainTemplate from "../../features/main-template/main-template";
import "./programfonds.css";
import { Button } from "@mui/material";
import Fade from "react-reveal/Fade";

function Programfonds() {
  return (
    <MainTemplate>
      <Fade>
        <div className="ProgramFonds">
          <div className="row">
            <div className="def-content rowBox rowRight col-6 col-sm-6 col-md-4 col-lg-4 col-xl-6">
              <h3 className="ContentTitle">Стипендиальная программа фонда</h3>
              <p className="ContentText">
                Получи высокую стипендию за достижение в учёбе!
              </p>
              <div className="ParentBtn">
                <Button variant="contained" className="btn-red ProgramBtn">
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="def-content rowBox  col-6 col-sm-6 col-md-4 col-lg-4 col-xl-6">
              <h3 className="ContentTitle">Льготное кредитование</h3>
              <p className="ContentText">Льготное кредитование на обучение.</p>
              <div className="ParentBtn">
                <Button variant="contained" className="btn-red ProgramBtn">
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="def-content rowBox rowRight col-6 col-sm-6 col-md-4 col-lg-4  col-xl-6">
              <h3 className="ContentTitle">Программа фонда 3</h3>
              <p className="ContentText">Краткое описание*</p>
              <div className="ParentBtn">
                <Button variant="contained" className="btn-red ProgramBtn">
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="def-content rowBox col-6 col-sm-6 col-md-4 col-lg-4  col-xl-6">
              <h3 className="ContentTitle">Программа фонда 4</h3>
              <p className="ContentText">Краткое описание*</p>
              <div className="ParentBtn">
                <Button variant="contained" className="btn-red ProgramBtn">
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="def-content rowBox rowRight col-6 col-sm-6 col-md-4 col-lg-4 col-xl-6">
              <h3 className="ContentTitle">Программа фонда 5</h3>
              <p className="ContentText">Краткое описание*</p>
              <div className="ParentBtn">
                <Button variant="contained" className="btn-red ProgramBtn">
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="def-content rowBox col-6 col-sm-6 col-md-4 col-lg-4  col-xl-6">
              <h3 className="ContentTitle">Программа фонда 6</h3>
              <p className="ContentText">Краткое описание*</p>
              <div className="ParentBtn">
                <Button variant="contained" className="btn-red ProgramBtn">
                  Подробнее
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </MainTemplate>
  );
}

export default Programfonds;
