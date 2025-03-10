import { ProductCartType } from "@/types/GlobalTypes";
import React from "react";
import { FaCircle } from "react-icons/fa6";
import OfferProductCart from "../global/OfferProductCart";

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

const OurOfferSection = () => {
  return (
    <div className=" relative bg-white  px-4 border-gray-100 border-2 rounded-xl sm:px-16 pb-12 sm:mx-16 ">
      <div className="flex items-center pt-5 pb-6">
        <FaCircle className="text-[#CFD8E3] text-[11px]" />
        <FaCircle className="text-[#CFD8E3] ms-1" />
        <p className="ps-2 text-gray-500 text-lg">پرفروش ترینها</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 ">
        {productCartList.map((productCart, index) => (
          <OfferProductCart product={productCart} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OurOfferSection;
