import React from "react";
import MainTemplate from "../../features/main-template/main-template";
import "./programfonds.css";
import { Button } from "@mui/material";
import Fade from "react-reveal/Fade";
import { RandomKey } from "../../utils/helpers";

const itemsInfo = [
  {
    title: "Стипендиальная программа фонда",
    description: "Получи высокую стипендию за достижение в учёбе!",
  },
  {
    title: "Льготное кредитование",
    description: "Льготное кредитование на обучение.",
  },
  {
    title: "Программа фонда 3",
    description: "Краткое описание*",
  },
  {
    title: "Программа фонда 4",
    description: "Краткое описание*",
  },
  {
    title: "Программа фонда 5",
    description: "Краткое описание*",
  },
  {
    title: "Программа фонда 6",
    description: "Краткое описание*",
  },
];

/**
 * User Программы фонда Page
 * @returns {JSX.Element}
 * @constructor
 */
function ProgramFonds() {
  return (
    <MainTemplate>
      <div className="ProgramFonds">
        <div className="row px-3 px-sm-0">
          {itemsInfo.map((itm) => {
            return (
              <Fade key={RandomKey()} duration={1500}>
                <div className="def-content rowBox col-12 col-md-6">
                  <h3 className="ContentTitle">{itm.title}</h3>
                  <p className="ContentText">{itm.description}</p>
                  <div className="ParentBtn">
                    <Button variant="contained" className="btn-red ProgramBtn">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </MainTemplate>
  );
}

export default ProgramFonds;
