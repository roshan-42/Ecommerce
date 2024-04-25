"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import img1 from "@/public/assets/xiaomi1.jpg";
import img2 from "@/public/assets/samsung.jpg";
import img3 from "@/public/assets/book.jpg";
import img4 from "@/public/assets/watch.jpg";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/pagination";

const Carousal = () => {
  const images = [
    {
      image: img1,
    },
    {
      image: img2,
    },
  ];
  return (
    <>
      <div className=" md:flex  ">
        <div className="w-full md:w-2/3  ">
          <Swiper
            className=" "
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {images.map((item, index) => (
              <SwiperSlide
                data-swiper-autoplay="2000"
                className=" relative h-48 w-48 md:h-96 md:w-96"
              >
                <Image src={item.image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col gap-2 px-2  w-full">
          <div className="h-full relative overflow-hidden  ">
            <Image
              className=""
              layout="fill"
              objectFit="cover"
              src={img3}
              alt=""
            />
          </div>

          <div className="h-full relative overflow-hidden">
            <Image
              className=""
              layout="fill"
              objectFit="cover"
              src={img4}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousal;
