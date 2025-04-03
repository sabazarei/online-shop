"use client";

import Image from "next/image";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const PageFaqCategory = ({ params }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const { slug } = params;

  // Check if slug is defined and is a string
  if (!slug || typeof slug !== "string") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className="">
        {/* cover of page */}
        <div className="relative max-sm:mt-10  bg-[url('/imgs/page-cover.jpg')] bg-cover bg-top h-[400px] mb-[1500px] bg-[rgba(0,0,0,0.6)] bg-blend-multiply  ">
          <h1 className="pt-[70px] max-sm:pt-10 text-[#fff] max-xxs:text-lg max-sm:text-xl sm:text-3xl md:text-4xl text-center font-bold">
            پاسخ پرسش‌های پرتکرار
          </h1>
          <form
            action=" "
            className="pt-20 max-sm:pt-10 max-w-[480px] mx-auto "
          >
            <div className="flex flex-wrap ">
              <input
                type="text"
                className=" w-[70%] max-sm:w-full max-sm:mx-3 h-11 ml-3 outline-none border rounded-lg p-[5px]"
                placeholder="پرسش خود را جستجو کنید"
              />
              <button className="w-[27%] max-sm:mx-auto max-sm:mt-3 h-11 rounded-lg bg-[#3abaf4] hover:bg-[#1ea5e3] text-[#fff] text-sm p-[10px] ">
                جستجو
              </button>
            </div>
          </form>

          <div className=" mt-20 lg:mx-16 md:mx-6 max-md:mx-auto max-md:rounded-none  bg-white rounded-xl p-4 ">
            <div className="flex items-center mb-16">
              <div className="">
                <Image
                  width={30}
                  height={20}
                  src={"/imgs/title-circles.png"}
                  alt=""
                ></Image>
              </div>
              <div className="pr-3 font-bold md:text-xl max-xxs:text-base sm:text-lg text-[#6f7479]">
                {decodeURIComponent(slug)}
              </div>
            </div>
            {/* <div className="grid grid-cols-3 max-md:-mt-14 max-xs:grid-cols-2  gap-4">
              {items.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center hover:font-bold"
                  >
                    <Link
                      href={"#"}
                      className="flex flex-col justify-center items-center"
                    >
                      <div
                        className={`relative max-xs:mt-9 ${
                          index === items.length - 1 ? "mt-20" : "mt-14"
                        } 
                          ${index === 6 ? "mt-20" : "mt-14"}
                          ${item.width} ${item.height} ${item.minWidth} ${
                          item.minHeight
                        }`}
                      >
                        <Image fill src={item.src} alt={`image-${index}`} />
                      </div>
                      <p
                        className={`text-sm ${index === 6 ? "mt-10" : "mt-7"}`}
                      >
                        {item.text}
                      </p>
                    </Link>
                  </div>
                </>
              ))}
            </div> */}
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-8 flex items-center"></div>
              <div className="col-span-12">
                <div className="relative border rounded-xl mt-2">
                  <h2
                    className="py-5 px-4"
                    onClick={() => setIsOpen1(!isOpen1)}
                  >
                    <div>
                      <button className="text-sm max-xxs:text-xs text-[#212121]">
                        چطور میتوانم امتیاز بگیرم؟
                      </button>
                      <div className="absolute  flex justify-center cursor-pointer items-center inset-y-3  text-mainRed bg-[#edf0f5] text-xl left-2 w-9 h-9 rounded-[50%]  ">
                        {isOpen1 ? <FaAngleUp /> : <FaAngleDown />}
                      </div>
                    </div>
                  </h2>
                </div>
                {isOpen1 && (
                  <div className="py-4 px-6">
                    <h4 className="text-[#666] text-base max-xxs:text-sm">
                      شما از سه راه می‌توانید امتیاز بگیرید:
                    </h4>
                    <div>
                      <ul className="text-mainBlue text-xs font-semibold mt-2">
                        <li className="mt-1">خرید کالا</li>
                        <li className="mt-1">ثبت نظر</li>
                        <li className="mt-1">
                          دعوت از دوستان برای خرید از دیجی‌کالا
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                <div className="relative border rounded-xl mt-4">
                  <h2
                    className="py-5 px-4"
                    onClick={() => setIsOpen2(!isOpen2)}
                  >
                    <div className="flex">
                      <button className="text-sm max-xxs:text-xs text-[#212121]">
                        میتوانم سفارش خود را در محل پرداخت کنم؟
                      </button>
                      <div className="absolute flex justify-center cursor-pointer items-center inset-y-3  text-mainRed bg-[#edf0f5] text-xl left-2 w-9 h-9 rounded-[50%]  ">
                        {isOpen2 ? <FaAngleUp /> : <FaAngleDown />}
                      </div>
                    </div>
                  </h2>
                </div>
                {isOpen2 && (
                  <div className="py-4 px-6">
                    <h4 className="text-[#666] text-base max-xxs:text-sm">
                      بله شما میتوانید سفارش خود را هنگام تحویل کالا پرداخت
                      کنید، در برخی موارد امکان پرداخت سفارش در محل وجود ندارد.
                    </h4>
                  </div>
                )}
                <div className="relative border rounded-xl mt-4">
                  <h2
                    className=" py-5 px-4"
                    onClick={() => setIsOpen3(!isOpen3)}
                  >
                    <div className="flex">
                      <button className="text-sm max-xxs:text-xs max-xxs:ml-7  text-right text-[#212121]">
                        چطور درخواست خود را جهت مرجوعی کالا به شما اطلاع دهم؟
                      </button>
                      <div className="absolute flex justify-center cursor-pointer items-center inset-y-3  text-mainRed bg-[#edf0f5] text-xl left-2 w-9 h-9 rounded-[50%]  ">
                        {isOpen3 ? <FaAngleUp /> : <FaAngleDown />}
                      </div>
                    </div>
                  </h2>
                </div>
                {isOpen3 && (
                  <div className="py-4 px-6">
                    <h4 className="text-[#666] text-base max-xxs:text-sm">
                      شما میتوانید از طریق فرم درخواست مرجوعی در پروفایل ، صفحه
                      تماس با ما و تلفن درخواست خود را ثبت نمایید.
                    </h4>
                  </div>
                )}
                <div className="relative border rounded-xl mt-4">
                  <h2
                    className="py-5 px-4"
                    onClick={() => setIsOpen4(!isOpen4)}
                  >
                    <div className="flex">
                      <button className="text-sm max-xxs:text-xs text-[#212121]">
                        چطور میتوانم سفارشم را لغو کنم؟
                      </button>
                      <div className="absolute flex justify-center cursor-pointer items-center inset-y-3  text-mainRed bg-[#edf0f5] text-xl left-2 w-9 h-9 rounded-[50%]  ">
                        {isOpen4 ? <FaAngleUp /> : <FaAngleDown />}
                      </div>
                    </div>
                  </h2>
                </div>
                {isOpen4 && (
                  <div className="py-4 px-6">
                    <h4 className="text-[#666] text-base max-xxs:text-sm">
                      شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی
                      که از ارسال آن منصرف شدید را لغو نمایید.
                    </h4>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-32">
              <div className="grid grid-cols-12">
                <div className="col-span-12 mb-8 flex items-center">
                  <div className="">
                    <Image
                      width={30}
                      height={20}
                      src={"/imgs/title-circles.png"}
                      alt=""
                    ></Image>
                  </div>
                  <div className="pr-3 font-bold md:text-xl max-xxs:text-base sm:text-lg text-[#6f7479]">
                    <h2>پرتکرارترین پرسش‌ها</h2>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="relative border rounded-xl mt-2">
                    <h2
                      className="py-5 px-4"
                      onClick={() => setIsOpen1(!isOpen1)}
                    >
                      <div>
                        <button className="text-sm max-xxs:text-xs text-[#212121]">
                          چطور میتوانم امتیاز بگیرم؟
                        </button>
                        <div className="absolute  flex justify-center cursor-pointer items-center inset-y-3  text-mainRed bg-[#edf0f5] text-xl left-2 w-9 h-9 rounded-[50%]  ">
                          {isOpen1 ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                      </div>
                    </h2>
                  </div>
                  {isOpen1 && (
                    <div className="py-4 px-6">
                      <h4 className="text-[#666] text-base max-xxs:text-sm">
                        شما از سه راه می‌توانید امتیاز بگیرید:
                      </h4>
                      <div>
                        <ul className="text-mainBlue text-xs font-semibold mt-2">
                          <li className="mt-1">خرید کالا</li>
                          <li className="mt-1">ثبت نظر</li>
                          <li className="mt-1">
                            دعوت از دوستان برای خرید از دیجی‌کالا
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  <div className="relative border rounded-xl mt-4">
                    <h2
                      className="py-5 px-4"
                      onClick={() => setIsOpen2(!isOpen2)}
                    >
                      <div className="flex">
                        <button className="text-sm max-xxs:text-xs text-[#212121]">
                          میتوانم سفارش خود را در محل پرداخت کنم؟
                        </button>
                        <div className="absolute flex justify-center cursor-pointer items-center inset-y-3  text-mainRed bg-[#edf0f5] text-xl left-2 w-9 h-9 rounded-[50%]  ">
                          {isOpen2 ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                      </div>
                    </h2>
                  </div>
                  {isOpen2 && (
                    <div className="py-4 px-6">
                      <h4 className="text-[#666] text-base max-xxs:text-sm">
                        بله شما میتوانید سفارش خود را هنگام تحویل کالا پرداخت
                        کنید، در برخی موارد امکان پرداخت سفارش در محل وجود
                        ندارد.
                      </h4>
                    </div>
                  )}
                  <div className="relative border rounded-xl mt-4">
                    <h2
                      className=" py-5 px-4"
                      onClick={() => setIsOpen3(!isOpen3)}
                    >
                      <div className="flex">
                        <button className="text-sm max-xxs:text-xs max-xxs:ml-7  text-right text-[#212121]">
                          چطور درخواست خود را جهت مرجوعی کالا به شما اطلاع دهم؟
                        </button>
                        <div className="absolute flex justify-center cursor-pointer items-center inset-y-3  text-mainRed bg-[#edf0f5] text-xl left-2 w-9 h-9 rounded-[50%]  ">
                          {isOpen3 ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                      </div>
                    </h2>
                  </div>
                  {isOpen3 && (
                    <div className="py-4 px-6">
                      <h4 className="text-[#666] text-base max-xxs:text-sm">
                        شما میتوانید از طریق فرم درخواست مرجوعی در پروفایل ،
                        صفحه تماس با ما و تلفن درخواست خود را ثبت نمایید.
                      </h4>
                    </div>
                  )}
                  <div className="relative border rounded-xl mt-4">
                    <h2
                      className="py-5 px-4"
                      onClick={() => setIsOpen4(!isOpen4)}
                    >
                      <div className="flex">
                        <button className="text-sm max-xxs:text-xs text-[#212121]">
                          چطور میتوانم سفارشم را لغو کنم؟
                        </button>
                        <div className="absolute flex justify-center cursor-pointer items-center inset-y-3  text-mainRed bg-[#edf0f5] text-xl left-2 w-9 h-9 rounded-[50%]  ">
                          {isOpen4 ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                      </div>
                    </h2>
                  </div>
                  {isOpen4 && (
                    <div className="py-4 px-6">
                      <h4 className="text-[#666] text-base max-xxs:text-sm">
                        شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله
                        ایی که از ارسال آن منصرف شدید را لغو نمایید.
                      </h4>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="my-16 max-sm:w-full max-sm:rounded-none relative bg-[url('/imgs/page-cover-faq.jpg')] inset-0 bg-cover bg-top rounded-3xl h-[430px] bg-black/60 bg-blend-multiply">
              <div className="grid-cols-12">
                <div className="w-full tracking-wide pb-8 max-xxs:pb-11 pt-14 font-bold text-3xl max-xxs:text-lg text-[#fff] col-span-12 flex-col flex justify-center items-center">
                  <p>جواب یا پرسش خود را پیدا نکردید؟</p>
                  <p>روش‌های ارتباط با ما</p>
                </div>
                <div className="flex justify-center max-md:flex-col max-md:justify-center max-md:items-center ">
                  <div className="col-span-6 w-1/2 flex flex-col space-y-7 justify-center items-center">
                    <div className="relative w-[70px] h-[70px] max-xxs:w-[50px] max-xxs:h-[50px] ">
                      <Image fill src={"/imgs/phone.svg"} alt="phone"></Image>
                    </div>
                    <div className="flex gap-x-5 max-xxs:gap-x-1 font-semibold text-base text-[#fff] ">
                      <div>تماس تلفنی</div>
                      <div>۰۲۱-۶۱۹۳۰۰۰۰</div>
                    </div>
                  </div>
                  <div className="col-span-6 w-1/2 flex flex-col space-y-7 justify-center items-center">
                    <div className="relative w-[70px] h-[70px]  max-xxs:w-[50px] max-xxs:h-[50px] ">
                      <Image fill src={"/imgs/email.svg"} alt="email"></Image>
                    </div>
                    <div className="">
                      <button className="bg-[#3abaf4] hover:bg-[#1ea5e3] text-xs px-4 py-3 w-24 rounded-lg text-[#fff]">
                        ارسال پیام
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageFaqCategory;
