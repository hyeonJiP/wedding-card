import React, { useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/reset.css";
import Gallery from "./components/gallery";
import Greeting from "./components/greeting";
import Title from "./components/title";
import "./styles/globalStyle.scss";

import Location from "./components/location";
import CongratulatoryMoney from "./components/congratulatoryMoney";
import Share from "./components/share";
import Calendar from "./components/calendar";
import Song from "./assets/song.mp3";

import AOS from "aos";
import "aos/dist/aos.css";
import Guestbook from "./components/guestbook";

// markup
const { Footer } = Layout;

const Container = styled.div`
  background-color: #313131;
`;
const Wrapper = styled.div`
  max-width: 420px;
  margin: 0 auto;
  background-color: #fff;
`;
const MainImg = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  background-image: url("/static/wedding_photo_01.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 165px;
    background: linear-gradient(to bottom, transparent, white);
    pointer-events: none; /* 이벤트 방해 안 하게 */
  }
`;

const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  return (
    <Container>
      <Wrapper>
        <audio autoPlay loop>
          <source src={Song} />
        </audio>
        <MainImg />
        <Title />
        <Greeting />
        <Gallery />
        <Calendar />
        <CongratulatoryMoney />
        <Location />
        <Guestbook />
        <Share />
      </Wrapper>
    </Container>
  );
};

export default IndexPage;
