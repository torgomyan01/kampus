import React from "react";
import Navbar from "../navbar/navbar";

function MainTemplate({ children }) {
  return (
    <>
      <Navbar />
      <div className="container MainTemplate">{children}</div>
    </>
  );
}

export default MainTemplate;
