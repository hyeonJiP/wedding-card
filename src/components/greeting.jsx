import React from "react";
import "./greeting.scss";
import { Divider } from "antd";
import Flower from "../assets/flower1.png";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../config";

const Greeting = () => (
  <div className="greeting-wrapper" data-aos="fade-up">
    <p className="section-title">초대합니다</p>

    <img src={Flower} alt="flower" className="greeting-image" />
    <p className="greeting-content">
      저희 두 사람의 인연이
      <br />
      부부라는 이름으로 만나는 소중한 날.
      <br />
      <br />
      늘 곁에서 힘이 되어주신 분들과 함께
      <br />
      저희의 첫 걸음을 축하하고 싶습니다.
      <br />
      <br />
      귀한 걸음 하시어 축복해주시면
      <br />
      주신 사랑 잊지 않고 행복하게 살겠습니다.
    </p>
    <p className="greeting-names">
      {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
      <br />
      {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 차녀 {BRIDE_NAME}
    </p>
  </div>
);

export default Greeting;
