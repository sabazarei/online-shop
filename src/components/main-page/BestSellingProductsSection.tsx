"use client";

import React from "react";
import ProductCart from "../global/ProductCart";
import { ProductCartType } from "@/types/GlobalTypes";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { FaCircle } from "react-icons/fa";
const productCartList: ProductCartType[] = [
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 1990000,
    cartImg: "/imgs/product-1.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 1990000,
    cartImg: "/imgs/013.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 990000,
    cartImg: "/imgs/product-1.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 1990000,
    cartImg: "/imgs/013.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 3090000,
    cartImg: "/imgs/product-1.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 1990000,
    cartImg: "/imgs/013.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 2990000,
    cartImg: "/imgs/product-1.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 1990000,
    cartImg: "/imgs/013.jpg",
  },
];

const BestSellingProductsSection = () => {
  return (
    <div className=" relative bg-white  px-4 border-gray-100 border-2 rounded-xl sm:px-16 pb-12 sm:mx-16 ">
      <div className="flex items-center pt-5 pb-6">
        <FaCircle className="text-[#CFD8E3] text-[11px]" />
        <FaCircle className="text-[#CFD8E3] ms-1" />
        <p className="ps-2 text-gray-500 text-lg">پرفروش ترینها</p>
      </div>
      <div className="hidden absolute left-0 top-4 sm:flex  items-center">
        <div className="  text-red-600 bg-gray-200 w-28 text-center py-2">
          مشاهده همه
        </div>
        <div className="w-[40px] bg-gray-200 h-[2px]"></div>
      </div>
      <div className="w-full relative ">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
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
          {productCartList.map((productCart, index) => (
            <SwiperSlide className="py-2" key={index}>
              <ProductCart productCart={productCart} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellingProductsSection;
