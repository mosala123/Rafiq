import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Quarn.css";

const Quran = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(
        "https://alquran.vip/APIs/quranPagesImage"
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        if (Array.isArray(data.pages)) {
          setImages(data.pages);
        } else {
          console.error("Expected an array but got:", data);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  // const goToImage = () => {
  //   const index = parseInt(inputValue, 10) - 1;
  //   if (index >= 0 && index < images.length) {
  //     setCurrentIndex(index);
  //   }
  // };

  return (
    <div className="slider-container">
      <p className="headQuran">قٌم بالتقليب للقراءه</p>
      {images.length > 0 ? (
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          initialSlide={currentIndex}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.page_url}
                alt={`Page ${index + 1}`}
                className="slider-image"
              />
              <p className="image-number">صفحة رقم: {index + 1}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>يتم تحميل المصحف...</p>
      )}

      {/* <div className="input-container">
        <input
          type="number"
          placeholder="أدخل رقم الصفحه"
          className="input-field"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="go-button" onClick={goToImage}>
          إذهب
        </button>
      </div> */}
    </div>
  );
};

export default Quran;
