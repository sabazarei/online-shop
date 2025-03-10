"use client";

import Image from "next/image";
import "swiper/css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation } from "swiper/modules";

//import globaltypes for typeScript
import { ProductCartType } from "@/types/GlobalTypes";


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

function ProductsSliderForPayment() {
  return (
    <section className="w-[1000px] max-md:w-[96%] md:w-[98%]">
      <div className="flex items-center gap-5 mt-8">
        <Image src="/imgs/title-circles.png" alt="O" width={30} height={30} />
        <h1 className="text-md text-gray-500 font-medium mb-5">
          مرسوله ۱ از ۱
        </h1>
      </div>

      <div className=" bg-white px-4">
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
          modules={[EffectFade, Navigation]}
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
              slidesPerView: 3,
            },
            1150: {
              slidesPerView: 4,
            },
          }}
        >
          {productCartList.map((productCart, index) => (
            <SwiperSlide className="py-2" key={index}>
              <div className="bg-white rounded-xl cursor-pointer h-72 px-5 py-4 space-y-2 hover:shadow-md">
                <div className="relative w-full h-48">
                  <Image alt="amazing" fill src={productCart.cartImg} />
                </div>
                <p className="text-lg font-semibold text-[#607D8B] pb-6 flex justify-center items-center">
                  {productCart.cartTitle}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductsSliderForPayment;
