import React, { useState } from "react";
import "./day2css.css";

const Days02 = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className="containerD2">
      <p className="text">Click elements</p>
      <div className="menu" onClick={handleClick}>
        <span className={`line1 ${click == true?"top":""}`}></span>
        <span className={`line2 ${click == true?"centro":""}`}></span>
        <span className={`line3 ${click == true?"buttom":""}`}></span>
      </div>
    </div>
  );
};

export default Days02;
