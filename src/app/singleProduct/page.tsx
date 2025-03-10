import ImgSlider from "@/components/singleProduct/ImgSlider";
import { ProductInfo } from "@/components/singleProduct/ProductInfo";
import Image from "next/image";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { IoHeart } from "react-icons/io5";


const SingleProductPage = () => {
  const productDetails = [
    {
      id:0,
      label: "حافظه داخلی",
      value: "256 گیگابایت"
    },
    {
      id:1,
      label: "شبکه های ارتباطی",
      value: "4G, 3G"
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 my-4 lg:mx-6 sm:mx-4">
        <div className="mx-2 lg:mx-4 md:mx-3">
          <div className="my-2">
            <div className="relative flex items-center justify-center border-b py-2 border-mainRed">
              <IoHeart className="absolute right-4 text-gray-700 text-2xl" />
              <h1 className="text-mainRed text-lg font-bold">فروش ویژه</h1>
            </div>
            <div className="py-5">
              <div
                data-date=""
                className="flex items-center justify-center font-bold text-lg"
              >
                <div className="flex flex-col items-center px-2 ">
                  <span data-days className="text-center">
                    0
                  </span>
                  <span className="text-xs text-gray-400">روز</span>
                </div>

                <span className="px-2 pb-5">:</span>

                <div className="flex flex-col items-center px-2">
                  <span data-hours className="text-center">
                    0
                  </span>
                  <span className="text-xs text-gray-400">ساعت</span>
                </div>

                <span className="px-2 pb-5">:</span>

                <div className="flex flex-col items-center px-2">
                  <span data-minutes className="text-center">
                    0
                  </span>
                  <span className="text-xs text-gray-400">دقیقه</span>
                </div>

                <span className="px-2 pb-5">:</span>

                <div className="flex flex-col items-center px-2">
                  <span data-seconds className="text-center">
                    0
                  </span>
                  <span className="text-xs text-gray-400">ثانیه</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <ImgSlider />
          </div>
        </div>
        <div className="lg:col-span-2 md:col-span-1 mx-1 lg:mx-6 md:mx-2 sm:mx-1">
          <>
            <div className="border-b border-[#f2f2f2] m-2 my-8">
              <h1 className="text-gray-500 text-lg pb-5">
                گوشی موبایل سامسونگ مدل Galaxy A50 SM-A505F/DS دو سیم کارت ظرفیت
                128گیگابایت
              </h1>
            </div>
            <div className="m-3">
              <div>
                <Image
                  className="inline ml-3"
                  src="/imgs/title-circles.png"
                  width={30}
                  height={30}
                  alt="Circle Decoration"
                  priority // Ensures faster LCP by preloading the image
                />
                <span className="h-8 text-[#6f7479] max-sm:text-xs font-semibold leading-8">
                  انتخاب رنگ:
                </span>
              </div>
              <div className="flex flex-wrap mb-6 text-sm">
                <button
                  className="flex items-center shadow-md w-20 h-8 rounded-lg m-2 focus:ring-1 focus:ring-mainRed"
                  id="colorid"
                >
                  <label
                    htmlFor="#colorid"
                    className="relative w-full h-full flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 absolute right-2 top-2 border border-black rounded-[50%] bg-[#2196f3]"></span>
                    <input type="radio" className="hidden" />
                    <span className="pr-9 text-[#6f6f6f] ">آبی</span>
                  </label>
                </button>
                <button
                  className="flex items-center shadow-md w-20 h-8 rounded-lg m-2 focus:ring-1 focus:ring-mainRed"
                  id="colorid"
                >
                  <label
                    htmlFor="#colorid"
                    className="relative w-full h-full flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 absolute right-2 top-2 border border-black rounded-[50%] bg-[#000]"></span>
                    <input type="radio" className="hidden" />
                    <span className="pr-9 text-[#6f6f6f]">مشکی</span>
                  </label>
                </button>
                <button
                  className="flex items-center shadow-md w-20 h-8 rounded-lg m-2 focus:ring-1 focus:ring-mainRed"
                  id="colorid"
                >
                  <label
                    htmlFor="#colorid"
                    className="relative w-full h-full flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 absolute right-2 top-2 border border-black rounded-[50%] bg-[#ff0000]"></span>
                    <input type="radio" className="hidden" />
                    <span className="pr-9 text-[#6f6f6f]">قرمز</span>
                  </label>
                </button>
              </div>
            </div>
            <div className="m-4">
              <h3 className="text-[#55565a] font-bold text-sm">
                ویژگی های محصول
              </h3>
              <ul className="text-[#55565a] leading-8 m-4 text-xs">
                {productDetails.map((data) => (
                  <li key={data.id} className="list-disc">
                    <span className="text-gray-600 font-semibold">
                      {data.label}
                    </span>
                    <span>: </span>
                    <span>{data.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="m-3">
              <Image
                className="inline ml-3"
                src="/imgs/title-circles.png"
                width={30}
                height={30}
                alt="Circle Decoration"
                priority // Ensures faster LCP by preloading the image
              />
              <h2 className="inline text-sm font-semibold text-gray-500">
                کد محصول: <span>225566</span>
              </h2>
            </div>
            <div className="m-3">
              <Image
                className="inline ml-3"
                src="/imgs/title-circles.png"
                width={30}
                height={30}
                alt="Circle Decoration"
                priority // Ensures faster LCP by preloading the image
              />
              <h2 className="inline text-gray-500">
                قیمت :
                <span className="font-extrabold text-3xl text-black max-sm:text-lg">
                  ۳,۵۶۰,۰۰۰ تومان
                </span>
              </h2>
            </div>

            <div className="m-3 my-5">
              <button className="relative h-10 w-48 flex items-center justify-center rounded-[10px] bg-mainRed overflow-hidden md:flex group z-10">
                <div className="absolute right-0 top-0 h-full w-10 bg-red-300 rounded-l-2xl group-hover:rounded-l-[10px] transition-all duration-300 ease-in-out group-hover:w-full"></div>

                <div className="absolute right-0 top-0 h-full w-10 grid place-items-center text-white z-10">
                  <BsCart3 className="text-xl" />
                </div>

                {/* Button Text */}
                <div className="flex-grow flex justify-center items-center text-white pr-8 z-10">
                  افزودن به سبد خرید
                </div>
              </button>
            </div>
          </>
        </div>
      </div>
      <div className="max-w-[1400px] max-lg:max-w-7xl max-md:max-w-2xl mx-auto">
        <ProductInfo />
      </div>

      <button className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] h-14 bg-mainRed text-white flex items-center justify-center md:hidden shadow-xl rounded-xl z-50">
        <BsCart3 className="text-xl ml-2"/>
        افزودن به سبد خرید
      </button>
    </>
  );
};

export default SingleProductPage;
