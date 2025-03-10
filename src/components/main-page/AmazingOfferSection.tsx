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
import Image from "next/image";
import { useProducts } from "@/reactQuery/product/useGetProducts";
import MiniSpinner from "../global/MiniSpinner";

interface Props {
  bgColor: "red" | "blue";
}

const AmazingOfferSection = ({ bgColor }: Props) => {
  const { products, isLoadingProducts, error, status } = useProducts();

  if (status == "error") {
    console.log("error on load products");
  }

  return (
    <div
      className={`w-full px-2 sm:px-16 py-12 
        ${bgColor === "red" && "bg-[#EF394E]"}
        ${bgColor === "blue" && "bg-[#304FFE]"}
        `}
    >
      <div className="w-full relative ">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          eventsPrefix=";lkaf "
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
            700: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
            950: {
              slidesPerView: 5,
            },
            1300: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide className="p-5  flex justify-center ">
            <div className="flex-col items-center flex justify-center ">
              <div className="relative h-72 !w-full">
                <Image alt="amaze" fill src="/imgs/amazing-1.png" />
              </div>
              <button className="text-white border-white font-bold border-[1px] px-5 py-3 rounded-lg">
                مشاهده همه
              </button>
            </div>
          </SwiperSlide>
          {status === "pending" ? (
            <MiniSpinner />
          ) : (
            products?.map((productCart, index) => (
              <SwiperSlide className="" key={index}>
                <ProductCart productCart={productCart} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default AmazingOfferSection;
