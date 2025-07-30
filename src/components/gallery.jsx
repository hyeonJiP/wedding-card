import React, { useState } from "react";
import { Divider, Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./gallery.scss";

import WeddingPhoto1 from "../assets/wedding_photo_01.jpg";
import WeddingPhoto2 from "../assets/wedding_photo_02.jpg";
import WeddingPhoto3 from "../assets/wedding_photo_03.jpg";
import WeddingPhoto4 from "../assets/wedding_photo_04.jpg";
import WeddingPhoto5 from "../assets/wedding_photo_05.jpg";
import WeddingPhoto6 from "../assets/wedding_photo_06.jpg";
import WeddingPhoto7 from "../assets/wedding_photo_07.jpg";
import WeddingPhoto8 from "../assets/wedding_photo_08.jpg";
import WeddingPhoto9 from "../assets/wedding_photo_09.jpg";
import WeddingPhoto10 from "../assets/wedding_photo_10.jpg";
import WeddingPhoto11 from "../assets/wedding_photo_11.jpg";
const images = [
  WeddingPhoto1,
  WeddingPhoto2,
  WeddingPhoto3,
  WeddingPhoto4,
  WeddingPhoto5,
  WeddingPhoto6,
  WeddingPhoto7,
  WeddingPhoto8,
  WeddingPhoto9,
  WeddingPhoto10,
  WeddingPhoto11,
];

const Gallery = () => {
  const [photoVisible, setPhotoVisible] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="wrapper">
      <p className="section-title">우리의 아름다운 순간</p>

      <div className="photoGallery">
        {images.map((src, index) => (
          <div
            key={index}
            className="imageBox"
            onClick={() => {
              setStartIndex(index);
              setCurrentSlide(index + 1);
              setPhotoVisible(true);
            }}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="thumbnail"
            />
          </div>
        ))}
      </div>

      <Modal
        open={photoVisible}
        footer={null}
        closable={true}
        onCancel={() => setPhotoVisible(false)}
        width="100%"
        centered
        style={{ maxWidth: "420px" }}
        styles={{
          body: { padding: "50px 10px 30px" },
          content: {
            padding: 0,
          },
        }}
      >
        <Swiper
          modules={[Navigation]}
          initialSlide={startIndex}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
          className="customSwiper"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img src={src} alt={`Slide ${idx}`} className="slideImage" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pageNumber">
          {currentSlide} / {images.length}
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
