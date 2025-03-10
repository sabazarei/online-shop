"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export type categoryCounterType = {
  title: string;
  count: number;
  imgSrc: string;
};

const categoryCounterList: categoryCounterType[] = [
  {
    title: "آرایشی، بهداشتی و سلامت",
    count: 48000,
    imgSrc: "/imgs/lifeline-in-a-heart-outline.png",
  },
  {
    title: "کالای دیجیتال",
    count: 156000,
    imgSrc: "/imgs/notebook-computer.png",
  },
  {
    imgSrc: "/imgs/repair-tools.png",
    title: "خودرو،ابزار و اداری",
    count: 56000,
  },
  {
    title: "آرایشی، بهداشتی و سلامت",
    count: 48000,
    imgSrc: "/imgs/lifeline-in-a-heart-outline.png",
  },
  {
    title: "کالای دیجیتال",
    count: 156000,
    imgSrc: "/imgs/notebook-computer.png",
  },
  {
    imgSrc: "/imgs/repair-tools.png",
    title: "خودرو،ابزار و اداری",
    count: 56000,
  },
];

const CategoryCounterSection = () => {
  return (
    <div className="border-gray-100 border-2 rounded-xl p-3 m-4 md:m-11">
      <p className="text-center text-xl pb-3 pt-2 font-semibold  text-gray-500">
        بیش از ۱،۵۰۰،۰۰۰ کالا در دسته‌بندی‌های مختلف
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="h-full flex items-center justify-center "
        breakpoints={{
          490: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          },
          1150: {
            slidesPerView: 5,
          },
        }}
      >
        {categoryCounterList.map((categoryCounter, index) => (
          <SwiperSlide className="py-2" key={index}>
            <div className="text-center flex flex-col items-center">
              <Image
                src={categoryCounter.imgSrc}
                height={100}
                width={50}
                alt={categoryCounter.title}
              />
              <p className="text-sm pt-3 pb-2">{categoryCounter.title}</p>
              <p className="text-blue-600 text-xs">
                + {categoryCounter.count} کالا{" "}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCounterSection;
