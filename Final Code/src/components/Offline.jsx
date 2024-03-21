import React from "react";
import "./Offline.css";

const Offline = () => {
  return (
    <div className="offline">
      <div className="wrapper">
        <h1>OFFLINE</h1>
        <h4>Please check your internet connection</h4>

        <a href="/" className="button">
          RETRY
        </a>
      </div>
    </div>
  );
};

export default Offline;
