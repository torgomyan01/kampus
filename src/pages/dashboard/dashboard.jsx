import React from "react";
import "./dashboard.css";
import MainTemplate from "../../features/main-template/main-template";
import { Button } from "@mui/material";
import diagram from "../../assets/images/diagram.svg";
import roundedPercent from "../../assets/images/rounded-percent.svg";
import urfLogo from "../../assets/images/urf-logo.png";
import fitService from "../../assets/images/fit-service.png";
import easi from "../../assets/images/easi.png";
import haumen from "../../assets/images/haumen.png";
import ucsb from "../../assets/images/ucsb.png";
import alfabank from "../../assets/images/alfabank.png";
import drive from "../../assets/images/drive.png";
import { Link } from "react-router-dom";
import { RandomKey } from "../../utils/helpers";
import { SITE_URL } from "../../utils/const";
import Fade from "react-reveal/Fade";

const companyLogos = [urfLogo, fitService, easi, haumen, ucsb, alfabank, drive];

function Dashboard() {
  return (
    <MainTemplate>
      <div className="row">
        <div className="col-12 col-md-6 pe-md-4">
          {/*Участники “Кампус”*/}
          <Fade duration={500}>
            <div className="def-content">
              <h3 className="content-title">Участники “Кампус”</h3>
              <p className="content-subtitle mt-1">
                Количество участников <br />
                на платформе и программе фонда
              </p>

              <div className="mt-5">
                <img
                  src={diagram}
                  alt="diagram"
                  className="def-image"
                  height={226}
                />
              </div>
              <div className="mt-5 d-flex justify-content-end">
                <Button variant="contained" className="btn-red">
                  Подробнее
                </Button>
              </div>
            </div>
          </Fade>
          {/*Участники “Кампус”*/}

          {/*Список ВУЗов*/}
          <Fade duration={800}>
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
                <Link to={SITE_URL.LIST_UNIVERSITIES}>
                  <Button variant="contained" className="btn-red">
                    Подробнее
                  </Button>
                </Link>
              </div>
            </div>
          </Fade>
          {/*Список ВУЗов*/}
        </div>

        <div className="col-12 col-md-6 ps-md-4 mt-5 mt-md-0">
          {/*Программы фонда*/}
          <Fade duration={1000}>
            <div className="def-content">
              <h3 className="content-title">Программы фонда</h3>
              <div className="mt-5 d-flex justify-content-end">
                <Link to={SITE_URL.PROGRAM_FONDS}>
                  <Button variant="contained" className="btn-red">
                    Подробнее
                  </Button>
                </Link>
              </div>
            </div>
          </Fade>
          {/*Программы фонда*/}

          {/*Анализ посещения*/}
          <Fade duration={1300}>
            <div className="def-content mt-5">
              <h3 className="content-title mb-5">Анализ посещения</h3>

              <div className="row align-items-center mt-5">
                <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                  <img src={roundedPercent} alt="roundedPercent" />
                </div>
                <div className="col-12 col-sm-6 col-md-12 col-lg-6 mt-4 mt-sm-0 mt-md-3 mt-lg-0">
                  <div className="analytic-text">
                    <span
                      className="rounded"
                      style={{ background: "#FB9A99" }}
                    />
                    Зарегистрированные
                  </div>
                  <div className="analytic-text">
                    <span
                      className="rounded"
                      style={{ background: "#F52D30" }}
                    />
                    Уникальные
                  </div>
                </div>
              </div>
              <div className="mt-5 d-flex justify-content-end">
                <Link to={SITE_URL.ANALYTIC_USERS}>
                  <Button variant="contained" className="btn-red">
                    Подробнее
                  </Button>
                </Link>
              </div>
            </div>
          </Fade>
          {/*Анализ посещения*/}

          {/*Рейтинг участников*/}
          <Fade duration={1500}>
            <div className="def-content mt-5 rating-users">
              <h3 className="content-title mb-5">Рейтинг участников</h3>

              <div className="mt-5 d-flex justify-content-end">
                <Link to={SITE_URL.RATING_USERS}>
                  <Button variant="contained" className="btn-red">
                    Подробнее
                  </Button>
                </Link>
              </div>
            </div>
          </Fade>
          {/*Рейтинг участников*/}
        </div>
      </div>
      <div className="row mb-5">
        {/*Компании, сотрудничающие с ИС “Кампус”*/}
        <div className="col-12">
          <Fade duration={1800}>
            <div className="def-content mt-5">
              <h3 className="content-title mb-5">
                Компании, сотрудничающие с ИС “Кампус”
              </h3>

              <div className="d-flex justify-content-center justify-content-xl-between align-content-center flex-wrap">
                {companyLogos.map((logo) => (
                  <div key={RandomKey()} className="company-item">
                    <img src={logo} alt="logo" />
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
        {/*Компании, сотрудничающие с ИС “Кампус”*/}
      </div>
    </MainTemplate>
  );
}

export default Dashboard;
