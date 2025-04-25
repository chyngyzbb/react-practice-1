import React from "react";
import pana from "./img/pana.png";
import "./Making.css";

const Making = () => {
  return (
    <div id="Making">
      <div className="container">
        <div className="Making">
          <div className="Making-info">
            <h1>
              Making the most of the ever-growing <br />
              <span>Information Technology</span>
            </h1>
            <p>Managed by a team of professional experts with extensive experience and impressive track records</p>
            <button>Read More</button>
          </div>
          <img src={pana} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Making;
