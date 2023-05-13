import React from "react";
import Navbar from "../navbar/navbar";

function MainTemplate({ children }) {
  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: 174 }}>
        {children}
      </div>
    </>
  );
}

export default MainTemplate;
