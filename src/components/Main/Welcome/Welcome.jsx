import React from "react";
import pana from "./img/pana2.png";
import './Welcome.css'

const Welcome = () => {
  return (
    <div id="welcome">
      <div className="container">
        <div className="welcome">
          <img src={pana} alt="" />
          <div className="welcome-text">
            <h2><span>Welcome to</span> Dwidasa Samsara Indonesia (DSI)</h2>
            <p>
              Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by
              the founders, who each of them has a common end objective to
              innovate new creations by making the most of the ever-growing
              information technology through DSI’s distinct front-end based
              application concept.
              <br />
              <br />
              Managed by a team of professional experts with extensive
              experience and impressive track records, DSI believes that
              continuous improvements and innovations assure your business to
              run effectively and efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
