import React from "react";
import "./Flag1.css";

function Flag1() {
  const flag = localStorage.getItem("flag"); // Retrieve flag from storage
  return (
    <div className="home-container">
      <h1>You're in!</h1>
      <br></br>
      {flag && (
        <div className="flag-container">
          <h2 className="flag-display">flag: {flag}</h2>
        </div>
      )}
    </div>
  );
}

export default Flag1;
