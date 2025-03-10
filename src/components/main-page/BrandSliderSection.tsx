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

type brandLogo = {
  brandName: string;
  brandlogoImg: string;
};

const brandLogoList: brandLogo[] = [
  {
    brandName: "logo-1",
    brandlogoImg: "/imgs/1000006973.png",
  },
  {
    brandName: "logo-2",
    brandlogoImg: "/imgs/1000014452.jpg",
  },
  {
    brandName: "logo-3",
    brandlogoImg: "/imgs/1080.png",
  },
  {
    brandName: "logo-4",
    brandlogoImg: "/imgs/1086.png",
  },
  {
    brandName: "logo-5",
    brandlogoImg: "/imgs/2315.png",
  },
  {
    brandName: "logo-6",
    brandlogoImg: "/imgs/1080.png",
  },
];

const BrandSliderSection = () => {
  return (
    <div className="border-gray-100 border-2 rounded-xl p-3 m-4 md:m-16">
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
        {brandLogoList.map((brand, index) => (
          <SwiperSlide className="py-2" key={index}>
            <div className="text-center flex flex-col items-center">
              <Image
                src={brand.brandlogoImg}
                height={100}
                width={100}
                alt={brand.brandName}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSliderSection;
