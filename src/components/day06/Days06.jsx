import React from "react";
import "./day06css.css"

const Days06 = () => {
  return (
    <div className="containerD06">
      <div className="left06">
        <div className="foto06"></div>
        <div className="name06">
          <h3>The Cat</h3>
          <p>Model</p>
        </div>
        <div className="links06">
          <div className="link06">Follow</div>
          <div className="link06">Message</div>
        </div>
      </div>

      <div className="right06">
        <div className="info06">
          <span>523</span><p>Post</p>
        </div>
        <div className="info06">
          <span>1387</span><p>Likes</p>
        </div>
        <div className="info06">
          <span>146</span><p>Follower</p>
        </div>
      </div>
    </div>
  );
};

export default Days06;
