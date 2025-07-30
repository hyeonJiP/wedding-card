import React from "react";
import "./title.scss";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
  WEDDING_TIME,
} from "../config.js";

const Title = () => {
  return (
    <div className="title-wrapper">
      <p className="subtitle">wedding day</p>
      <h1 className="main-title">
        {""}
        {GROOM_NAME} . {BRIDE_NAME}
      </h1>
      <p className="schedule">
        2025년 08월 15일 {WEDDING_TIME}
        <br />
        {WEDDING_LOCATION}
      </p>
    </div>
  );
};

export default Title;
