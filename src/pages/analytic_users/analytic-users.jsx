import React, { useEffect, useRef, useState } from "react";
import "./analytic-users.css";
import MainTemplate from "../../features/main-template/main-template";
import Chart from "chart.js/auto";
import { startWorkingChart } from "../../utils/helpers";

function AnalyticUsers() {
  const [infoChart, setInfoChart] = useState({
    formattedValue: 200,
    label: "Май",
  });

  const chartCanva = useRef(null);
  useEffect(() => {
    if (chartCanva.current) {
      startWorkingChart(
        chartCanva.current,
        (chart, data, options) => {
          window.startCart = new Chart(chart, {
            type: "line",
            data: data,
            options: options,
          });
        },
        (info) => setInfoChart(info)
      );
    }
  }, [chartCanva]);

  if (window.startCart != null) {
    window.startCart.destroy();
  }

  return (
    <MainTemplate className="AnalyticUsers">
      <div className="def-content def-content-title">
        <h3 className="content-title">Анализ посещения</h3>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-md-5">
          <div className="def-content">
            <div className="user-register">
              <i className="fa-solid fa-caret-up green" />
              <span className="me-2 fw-bold">510</span> зарегестрированных
            </div>
            <div className="user-register">
              <i className="fa-solid fa-caret-down red" />
              <span className="me-2 fw-bold">429</span> уникальных
            </div>
          </div>

          <div className="def-content mt-4">
            <h3 className="content-title">Просмотры страниц</h3>
            <div className="user-register mt-5">
              <i className="fa-solid fa-caret-up green" />
              <span className="me-2 fw-bold">1 908</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7 mt-4 mt-md-0">
          <div className="def-content">
            <div className="chart-info">
              <span className="chart-info-title">Сеансы</span>
              <div className="chart-info-counts">
                <p className="mb-0">{infoChart?.formattedValue}</p>
                <p className="fs-3">{infoChart?.label}</p>
              </div>
            </div>
            <canvas ref={chartCanva} />
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

export default AnalyticUsers;
