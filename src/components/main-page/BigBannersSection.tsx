"use client";
//import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type banner = {
  bannerImgSrc: string;
  bannerTitle: string;
  bannerHref: string;
};

const bannerList: banner[] = [
  {
    bannerTitle: "firstbanner",
    bannerHref: "/",
    bannerImgSrc: "/imgs/banner1.jpg",
  },
  {
    bannerTitle: "firstbanner",
    bannerHref: "/",
    bannerImgSrc: "/imgs/banner2.jpg",
  },
  {
    bannerTitle: "firstbanner",
    bannerHref: "/",
    bannerImgSrc: "/imgs/banner3.jpg",
  },
];

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function BigBannersSection() {
  return (
    <div className="flex px-4 lg:px-24  w-full gap-3 h-[500px]">
      <div className="w-full lg:w-2/3 relative">
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="h-full"
        >
          {bannerList.map((banner, index) => (
            <SwiperSlide key={index}>
              <Image
                src={banner.bannerImgSrc}
                alt={banner.bannerTitle}
                // width={100}
                //  height={100}
                fill
                className="rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden  w-1/3 lg:grid gap-2 grid-rows-2 ">
        <div className="relative">
          <Image
            className=" rounded-lg"
            src="/imgs/banner5.jpg"
            alt="banner-5"
            fill
          />
        </div>
        <div className="relative">
          <Image
            className=" rounded-lg"
            src="/imgs/banner-4.jpg"
            alt="banner-4"
            fill
          />
        </div>
      </div>
    </div>
  );
}
