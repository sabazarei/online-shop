"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

//import react icons
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { TbBorderCornerSquare } from "react-icons/tb";
import { FiInfo } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";

//import components
import TableForFinalProductsToPost from "@/components/Shopping/TableForFinalProductsToPost";
import DiscountCodeBox from "@/components/Shopping/DiscountCodeBox";


const ShoppingPayment = () => {
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState<string>("smartPayment");
  return (
    <>
      <main className="relative grid grid-rows-1 overflow-hidden ">
        <header className="h-24 w-full shadow-md relative flex justify-center items-center">
          <div className="flex h-2 w-[50%] absolute bottom-0">
            <div className="w-1/2 h-full bg-mainRed relative">
              <div className="w-8 h-8 bg-mainRed rounded-full absolute -right-4 -bottom-3"></div>
              <h1 className="absolute -right-10 bottom-10 text-mainRed font-medium text-sm">
                اطلاعات ارسال
              </h1>
            </div>

            <div className="w-1/2 h-full bg-gray-200 relative">
              <div className="w-8 h-8 bg-mainRed rounded-full absolute -bottom-3 -right-4"></div>
              <h1 className="absolute -right-5 bottom-10 text-mainRed font-medium text-sm">
                پرداخت
              </h1>

              <div className="w-8 h-8 bg-gray-300 rounded-full absolute -left-4 -bottom-3"></div>
              <h1 className="absolute -left-16 bottom-10 text-gray-600 font-medium text-sm">
                اتمام خرید و ارسال
              </h1>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-[3fr_1fr] max-lg:grid-cols-1">
          <section className="grid grid-cols-1 auto-rows-auto gap-y-0">
            {/* row2 */}
            <section className="mb-16">
              {/* Flex container for Image and H1 */}
              <div className="flex items-center gap-5 mt-8">
                <Image
                  src="/imgs/title-circles.png"
                  alt="O"
                  width={30}
                  height={30}
                />
                <h1 className="text-md text-gray-500 font-medium mb-5">
                  انتخاب شیوه پرداخت
                </h1>
              </div>

              <div className="w-full h-20 ml-4">
                <div className="flex items-center mb-2 mr-8">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="smartPayment"
                      name="payment-method"
                      className="hidden"
                      checked={paymentMethod === "smartPayment"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-100">
                      <div
                        className={`w-2 h-2  bg-gray-100 rounded-full ${
                          paymentMethod === "smartPayment"
                            ? "ring-4 ring-mainRed"
                            : ""
                        }`}
                      ></div>
                    </div>
                    <FaRegCreditCard className="text-mainRed text-4xl mr-7" />
                    <div className="grid grid-cols-1 grid-rows-2">
                      <span className="ms-5 text-bold">
                        پرداخت اینترنتی هوشمند دیجی‌کالا
                      </span>
                      <span className="ms-5 mt-1 text-sm font-medium text-gray-400">
                        آنلاین با تمامی کارت‌های بانکی
                      </span>
                    </div>
                  </label>
                </div>

                <div className="flex items-center mb-2 mr-8">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="digiPayment"
                      name="payment-method"
                      className="hidden"
                      checked={paymentMethod === "digiPayment"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-100">
                      <div
                        className={`w-2 h-2  bg-gray-100 rounded-full ${
                          paymentMethod === "digiPayment"
                            ? "ring-4 ring-mainRed"
                            : ""
                        }`}
                      ></div>
                    </div>

                    <section className="mr-7">
                      <FaRegCreditCard className="text-mainRed text-4xl relative" />
                      <div>
                        <TbBorderCornerSquare className="text-mainRed text-4xl scale-y-[-1] absolute top-[13px] right-14" />
                      </div>
                    </section>

                    <div className="grid grid-cols-1 grid-rows-2">
                      <span className="ms-5 text-bold">
                        پرداخت اعتباری دیجی‌پی
                      </span>
                      <span className="ms-5 mt-1 text-sm font-medium text-gray-400"></span>
                    </div>
                  </label>
                </div>
              </div>
            </section>

            {/* row1 */}

            <section className="mb-16">
              {/* Flex container for Image and H1 */}
              <div className="flex items-center gap-5 mt-8">
                <Image
                  src="/imgs/title-circles.png"
                  alt="O"
                  width={30}
                  height={30}
                />
                <h1 className="text-md text-gray-500 font-medium mb-5">
                  خلاصه سفارش
                </h1>
              </div>
              <TableForFinalProductsToPost />
            </section>

            {/* row 3 */}
            <DiscountCodeBox />



            <section className="grid grid-cols-2 mt-16">
              <div className="place-self-start ">
                <button
                  className="max-md:text-sm max-sm:font-medium text-mainRed font-semibold border-b border-dashed border-mainRed flex items-center gap-1  max-sm:text-xs"
                  onClick={() => router.back()}
                >
                  <MdKeyboardDoubleArrowRight className=" font-semibold " />
                  <span>بازگشت به شیوه ارسال</span>
                </button>
              </div>

              <div className="place-self-end">
                <button
                  className="max-md:text-sm max-sm:font-medium text-mainRed font-semibold border-b border-dashed border-mainRed flex items-center gap-1 max-sm:text-xs"
                  onClick={() =>
                    router.push(
                      "/shoppingAddressInfo/shoppingPayment/transactionResult"
                    )
                  }
                >
                  <span> ثبت نهایی سفارش</span>
                  <MdKeyboardDoubleArrowLeft className=" font-semibold " />
                </button>
              </div>
            </section>
          </section>

          <section className="justify-self-center">
            {/* w-[80%] min-w-[300px] h-[30rem] m-4 */}
            <div className="max-lg:w-[18rem] m-4 border rounded-3xl">
              <div className="flex justify-center gap-14 pt-5">
                <div className="flex flex-col text-justify  text-[#515151] font-bold ">
                  <p className="pb-3">مبلغ کل (۲ کالا)</p>
                  <p className="text-mainBlue pb-3">سود شما از خرید</p>
                  <div className="flex items-center pb-4">
                    <p className="">هزینه ارسال</p>
                    <FiInfo className="mr-2 cursor-pointer" />
                  </div>
                </div>
                <div
                  dir="ltr"
                  className="flex flex-col text-justify text-[#515151] "
                >
                  <p className="pb-3">۱۶,۸۹۷,۰۰۰ تومان</p>
                  <p className="text-mainBlue pb-3">(۱٪)۲۰۰,۰۰۰ تومان</p>
                  <p className="pb-3">وابسته به آدرس</p>
                </div>
              </div>
              <hr className="w-72" />
              <div className=" flex gap-32 pt-2 pb-7 text-[#515151] ">
                <div className="flex pr-7 items-center ">
                  <p className=" font-bold ">دیدیکلاب</p>
                  <FiInfo className="mr-2 cursor-pointer" />
                </div>
                <div className="">
                  <p className="">۱۵۰+ امتیاز</p>
                </div>
              </div>
              <hr className="w-72 " />
              <hr className="w-72 mt-[2px]" />
              <div className="pt-4">
                <h3 className="text-[#676767] text-xl flex justify-center items-center font-semibold ">
                  مبلغ قابل پرداخت:
                </h3>
                <h3 className="text-mainRed text-xl my-3 flex justify-center items-center font-semibold">
                  ۱۶,۶۹۷,۰۰۰ تومان
                </h3>
                <button className="w-11/12 h-14 mx-4 my-3 relative flex items-center justify-center rounded-[10px] bg-mainRed overflow-hidden md:flex group">
                  {/* Expanding Light Red Background */}
                  <div className="absolute right-0 top-0 h-full w-14 bg-red-300 rounded-l-2xl group-hover:rounded-l-[10px] transition-all duration-300 ease-in-out group-hover:w-full"></div>

                  {/* Cart Icon (Positioned on top of background) */}
                  <div className="absolute right-2 top-0 h-full w-10 grid place-items-center text-white z-10">
                    <FaArrowLeft className="text-xl" />
                  </div>

                  {/* Button Text */}
                  <div className="flex-grow flex justify-center items-center text-[#fff] text-base px-11  z-10">
                    ادامه ثبت سفارش
                  </div>
                </button>

                <div className=" text-[#a0a0a0] pr-3 pb-7">
                  <p className="text-sm inline   ">
                    کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند، برای ثبت سفارش
                    مراحل بعدی را تکمیل کنید.
                  </p>

                  <FiInfo className="inline cursor-pointer mr-3" />
                </div>
              </div>
            </div>
            {/* d */}
          </section>
        </section>
      </main>
    </>
  );
};

export default ShoppingPayment;
