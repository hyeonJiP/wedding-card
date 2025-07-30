import React, { useEffect } from "react";
import "./location.scss";

const Location = () => {
  // 카카오 맵 불러오기
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
      "timestamp" : "1746452893081",
      "key" : "2nwnq",
      "mapWidth" : "640",
      "mapHeight" : "360"
    }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn)
        return;

      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => executeScript();
    })();
  };

  useEffect(() => {
    InstallScript();
  }, []);

  return (
    <div className="location-wrapper">
      <h2 className="section-title">오시는 길</h2>
      <div
        id="daumRoughmapContainer1746452893081"
        className="root_daum_roughmap root_daum_roughmap_landing map-container"
      ></div>
      <div className="location-content">
        서울 송파구 송파대로 155
        <br />
        더컨벤션 송파문정 12층 그랜드볼룸
        <br />
        <strong className="sub-title">버스 이용시</strong>
        문정법조단지·건영아파트 정류장에서
        <br />
        하차 후 도보 이동 (일반버스)
        <br />
        <strong className="sub-title">지하철 이용시</strong>
        8호선 문정역 하차 3번 출구 (도보 5분)
      </div>
    </div>
  );
};

export default Location;
