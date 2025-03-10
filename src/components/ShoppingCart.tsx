"use client";
import React, { useState } from "react";
import { FaTruckFast } from "react-icons/fa6";
import Image from "next/image";

const ShoppingCart = () => {
  const initialProductsInfo = [
    {
      id: 1,
      title:
        "گوشی موبایل سامسونگ مدل Galaxy A70 SM-A705FN/DS دوسیم‌کارت ظرفیت 128 گیگابایت",
      seller: "فروشنده: ایرانیان قائم همراه(کاوش تیم)",
      guarantee: "گارانتی 18 ماهه کاوش تیم",
      color: "رنگ : مشکی",
      price: "4,497,000",
      img: "/imgs/shoppingCart1.jpg",
      quantity: 0,
    },
    {
      id: 2,
      title:
        "گوشی موبایل سامسونگ مدل Galaxy A70 SM-A705FN/DS دوسیم‌کارت ظرفیت 128 گیگابایت",
      seller: "فروشنده: ایرانیان قائم همراه(کاوش تیم)",
      guarantee: "گارانتی 18 ماهه کاوش تیم",
      color: "رنگ : مشکی",
      price: "4,497,000",
      img: "/imgs/shoppingCart1.jpg",
      quantity: 0,
    },
  ];

  const [productsInfo, setProductsInfo] = useState(initialProductsInfo);

  const decHandler = (id: number) => {
    setProductsInfo(
      productsInfo.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };
  const incHandler = (id: number) => {
    setProductsInfo(
      productsInfo.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

 

  const deleteHandler = () => {
    console.log("product deleted!!!!!!!!");
  };

  return (
    <>
      <div className="flex justify-between items-center border-b-[1px] border-mainRed py-4">
        <div className="flex items-center">
          <FaTruckFast className="text-mainRed ml-4 text-sm " />
          <p className="text-[#858585]">
            ارسال عادی
            <span className="text-[#a1a3a8] mr-1 text-xs ">(2 کالا)</span>
          </p>
        </div>
      </div>

      {/* product */}
      {productsInfo.map((product) => (
        <div key={product.id} className="overflow-x-scroll flex-shrink-0 flex max-sm:flex-col max-sm:items-start border-b-[1px] border-[#dee2e6]">
          <div className=" flex items-center">
            {/* close button */}
            <button
              onClick={deleteHandler}
              className=" flex justify-center items-center text-[#999] bg-[#f5f5f5] text-lg w-6 h-6 rounded-xl text-center "
            >
              ×
            </button>

            {/* product image */}
            <div className="relative w-36 h-36 mt-7 ">
              <Image fill src={product.img} alt="mobile" />
            </div>
          </div>

          {/* product info */}
          <div className="mt-3 mb-2 pr-2">
            <a href="#">
              <h3 className="text-base overflow-hidden max-w-xs font-bold text-[#656565]  whitespace-nowrap mt-3 mb-8 max-sm:text-sm">
                {product.title}
              </h3>
            </a>
            <p className="text-[13px] my-2 text-[#212529] ">{product.seller}</p>
            <p className="text-xs my-2 text-[#212529] ">{product.guarantee}</p>
            <div className="flex items-center my-2">
              <p className="text-[13px] text-[#212529] ">{product.color}</p>
              <span className="text-[13px] w-4 h-4 rounded-md inline-block bg-black mr-2"></span>
            </div>
            <a href="#" className="text-mainBlue text-xs ">
              انتقال به لیست خرید بعدی
            </a>
          </div>

          {/* <div className="flex gap-10"> */}
          <div className="flex max-md:flex-col ">
             {/* product count */}
          <div className="pt-14 md:px-28 max-sm:pr-5 max-sm:pt-6 lg:px-11 xl:px-20">
            <p className="text-center text-sm text-[#212529] ">تعداد</p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => decHandler(product.id)}
                className="flex justify-center items-center pt-1  text-gray-400 text-4xl w-8 h-8 border border-gray-400  rounded-tr-md rounded-br-md border-l-0 max-sm:px-2 "
              >
                -
              </button>
              <button
                className={`flex justify-center items-center text-xl border pt-1 border-gray-400 w-8 h-8 max-sm:px-2 ${
                  product.quantity > 99 && "px-5"
                } `}
              >
                {product.quantity}
              </button>
              <button
                onClick={() => incHandler(product.id)}
                className="flex justify-center items-center pt-1  text-gray-400 text-4xl w-8 h-8 border border-gray-400 rounded-tl-md rounded-bl-md border-r-0 max-sm:px-2"
              >
                +
              </button>
            </div>
          </div>

          {/* product price */}
          <div className="pt-20 max-sm:pr-5 max-md:pt-6 max-sm:pb-2 text-[#212529] text-sm">
            <strong>{product.price} تومان</strong>
          </div>
          </div>
           

          </div>
        // </div>
      ))}
    </>
  );
};

export default ShoppingCart;
