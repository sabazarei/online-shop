import { FaRegCreditCard } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { TbBorderCornerSquare } from "react-icons/tb";
import Image from "next/image";
import { useState } from "react";

function FailedTransaction() {
  const [paymentMethod, setPaymentMethod] = useState<string>("smartPayment");
  return (
    <section className="grid">
      <section className="grid grid-cols-1 auto-rows-auto gap-y-0">
        <section className="w-full mt-12 px-6 pb-5">
          <div className="flex flex-col justify-center items-center">
            <div>
              <div className="bg-red-100 rounded-full w-24 h-24 grid place-items-center">
                <RxCross2 className="text-5xl text-red-400" />
              </div>
            </div>

            {/* Text Container */}
            <div className="mt-10 w-full text-center flex flex-col items-center">
              <h1 className="text-xl font-bold text-gray-500">
                سفارش
                <span className="text-[#00bfd6] bg-[#ebfdff] rounded-xl pt-1 px-2 mx-1">
                  DDC-75007560
                </span>
                ثبت شد اما پرداخت ناموفق بود.
              </h1>
              <p className="text-red-500 font-medium mt-2">
                برای جلوگیری از لغو سیستمی سفارش، تا ۱ ساعت آینده پرداخت را
                انجام دهید.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                چنانچه طی این فرایند مبلغی از حساب شما کسر شده است، طی ۷۲ ساعت
                آینده به حساب شما باز خواهد گشت.
              </p>
            </div>
          </div>
        </section>
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

            <div className="flex items-center mb-8 mr-8 max-sm:flex-col max-sm:items-start">
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
                  <span className="ms-5 text-bold">پرداخت اعتباری دیجی‌پی</span>
                  <span className="ms-5 mt-1 text-sm font-medium text-gray-400"></span>
                </div>
              </label>
            </div>

            <div className="w-[23rem] grid max-sm:justify-self-center max-sm:w-full">
              <button className="h-14 relative flex items-center justify-center rounded-[10px] bg-mainRed overflow-hidden md:flex group mx-7">
                {/* Expanding Light Red Background */}
                <div className="absolute right-0 top-0 h-full w-14 bg-red-300 rounded-l-2xl group-hover:rounded-l-[10px] transition-all duration-300 ease-in-out group-hover:w-full"></div>

                {/* Cart Icon (Positioned on top of background) */}
                <div className="absolute right-2 top-0 h-full w-10 grid place-items-center text-white z-10">
                  <FaRegCreditCard className="text-xl" />
                </div>

                {/* Button Text */}
                <div className="flex-grow flex justify-center items-center text-[#fff] text-base px-11  z-10">
                  پرداخت سفارش
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* row1 */}

        <section className="mt-28 max-sm:mt-36">
          <div className="m-6">
            <h1 className="text-xl font-bold text-gray-800 ">
              کد سفارش: DDC-75007560
            </h1>
            <div className="text-right text-gray-400 font-bold py-4 max-sm:text-sm">
              سفارش شما با موفقیت در سیستم ثبت شد و هم اکنون در
              <span className="text-red-500 font-bold bg-red-50 p-1 mx-1 rounded-xl">
                {" "}
                در انتظار پرداخت{" "}
              </span>
              است. جزئیات این سفارش را می‌توانید با کلیک بر روی دکمه
              <button className="text-mainRed border-b border-dashed border-mainRed mx-2">
                پیگیری سفارش
              </button>
              مشاهده نمایید.
            </div>
            <div className="w-[20rem] grid max-sm:justify-self-center max-sm:w-full">
              <button className="h-14 my-3 relative flex items-center justify-center rounded-[10px] bg-gray-600 overflow-hidden md:flex group">
                {/* Expanding Light Red Background */}
                <div className="absolute right-0 top-0 h-full w-14 bg-gray-500 rounded-l-2xl group-hover:rounded-l-[10px] transition-all duration-300 ease-in-out group-hover:w-full"></div>

                {/* Cart Icon (Positioned on top of background) */}
                <div className="absolute right-2 top-0 h-full w-10 grid place-items-center text-white z-10">
                  <HiShoppingBag className="text-xl" />
                </div>

                {/* Button Text */}
                <div className="flex-grow flex justify-center items-center text-[#fff] text-base px-11 z-10">
                  پیگیری سفارش
                </div>
              </button>
            </div>
          </div>
          <section className="mt-16 ">
            {/* Flex container for Image and H1 */}
            <div className="flex items-center gap-5 mt-8">
              <Image
                src="/imgs/title-circles.png"
                alt="O"
                width={30}
                height={30}
              />
              <h1 className="text-md text-gray-500 font-medium mb-5">
                جزئیات پرداخت
              </h1>
            </div>

            <div className="w-[96%] border rounded-2xl grid grid-cols-1 grid-rows-[0.5fr_2fr] justify-self-center gap-x-0">
              <section className="grid grid-cols-2 max-sm:grid-cols-1 h-20 max-sm:text-sm">
                <div className=" ">
                  {/* Row for H1 */}
                  <div className="flex items-center rounded-tr-xl  max-sm:rounded-tl-xl w-full h-full bg-gray-200 text-gray-700 font-extrabold max-sm:font-semibold ">
                    <h1 className="text-gray-500 font-extrabold max-sm:font-semibold pr-3">
                      نام تحویل گیرنده: جلال بهرامی راد
                    </h1>
                  </div>
                </div>

                <div className="">
                  {/* Row for H1 */}
                  <div className="flex items-center w-full h-full rounded-tl-xl max-sm:rounded-tl-none bg-gray-200 text-gray-700 font-extrabold max-sm:font-semibold">
                    <h1 className=" text-gray-500 font-extrabold max-sm:font-semibold pr-3">
                      شماره تماس : ۰۹۰۳۰۸۱۳۷۴۲
                    </h1>
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:text-xs">
                <div className=" w-full h-full">
                  {/* Row for H1 */}
                  <div className="w-full h-full text-gray-700 font-extrabold max-sm:font-semibold">
                    <ul className=" text-gray-500 font-extrabold max-sm:font-semibold">
                      <li className="p-3">تعداد مرسوله : ۱</li>
                      <li className="p-3">
                        روش پرداخت: پرداخت اینترنتی{" "}
                        <span className="text-red-500">(ناموفق)</span>
                      </li>
                      <li className="p-3">
                        آدرس : استان خراسان شمالی ، شهربجنورد، خراسان
                        شمالی-بجنورد
                      </li>
                    </ul>
                  </div>
                </div>

                <div className=" w-full h-full">
                  {/* Row for H1 */}
                  <div className="w-full h-full text-gray-700 font-extrabold max-sm:font-semibold">
                    <ul className="text-gray-500 font-extrabold max-sm:font-semibold">
                      <li className="p-3">مبلغ کل: ۴,۴۳۹,۰۰۰ تومان</li>
                      <li className="p-3">وضعیت سفارش: در انتظار پرداخت</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </section>
          ّ
        </section>

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
          </div>

          <div className="w-[96%] border rounded-2xl grid grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-2 justify-self-center gap-x-0">
            <section className="h-28 rounded-md grid grid-cols-3">
              <div className="grid grid-cols-1 grid-rows-2 w-full h-full">
                {/* Row for H1 */}
                <div className="flex justify-center rounded-tr-xl items-center w-full h-full bg-gray-200 text-gray-700 font-extrabold max-sm:font-semibold">
                  <h1 className="text-gray-600 font-extrabold max-sm:font-semibold">
                    ردیف
                  </h1>
                </div>

                {/* Row for Span */}
                <div className="flex justify-center items-center w-full h-full text-gray-700 font-extrabold max-sm:font-semibold">
                  <span className="text-sm max-sm:text-xs text-gray-500">
                    1
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 grid-rows-2 w-full h-full">
                {/* Row for H1 */}
                <div className="flex justify-center items-center w-full h-full bg-gray-200 text-gray-700 font-extrabold max-sm:font-semibold">
                  <h1 className="text-gray-600 font-extrabold max-sm:font-semibold">
                    درگاه
                  </h1>
                </div>

                {/* Row for Span */}
                <div className="flex justify-center items-center w-full h-full text-gray-700 font-extrabold max-sm:font-semibold">
                  <span className="text-sm max-sm:text-xs text-gray-500">
                    دیجی‌پی
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 grid-rows-2 w-full h-full">
                {/* Row for H1 */}
                <div className="flex justify-center items-center  max-sm:rounded-tl-xl w-full h-full bg-gray-200 text-gray-700 font-extrabold max-sm:font-semibold">
                  <h1 className="text-gray-600 font-extrabold max-sm:font-semibold">
                    شماره پیگیری
                  </h1>
                </div>

                {/* Row for Span */}
                <div className="flex justify-center items-center w-full h-full text-gray-700 font-extrabold max-sm:font-semibold">
                  <span className="text-sm max-sm:text-xs text-gray-500">
                    43078827
                  </span>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-3">
              <div className="grid grid-cols-1 grid-rows-2 w-full h-full">
                {/* Row for H1 */}
                <div className="flex justify-center items-center w-full h-full bg-gray-200 text-gray-700 font-extrabold max-sm:font-semibold">
                  <h1 className=" text-gray-600 font-extrabold max-sm:font-semibold">
                    تاریخ
                  </h1>
                </div>

                {/* Row for Span */}
                <div className="flex justify-center items-center w-full h-full text-gray-700 font-extrabold max-sm:font-semibold">
                  <span className="text-sm max-sm:text-xs text-gray-500">
                    ۵ آبان ۱۳۹۸
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 grid-rows-2 w-full h-full">
                {/* Row for H1 */}
                <div className="flex justify-center items-center w-full h-full bg-gray-200 text-gray-700 font-extrabold max-sm:font-semibold">
                  <h1 className="text-gray-600 font-extrabold max-sm:font-semibold">
                    مبلغ
                  </h1>
                </div>

                {/* Row for Span */}
                <div className="flex justify-center items-center w-full h-full text-gray-700 font-extrabold max-sm:font-semibold">
                  <span className="text-sm max-sm:text-xs text-gray-500">
                    ۴,۴۳۹,۰۰۰ تومان
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 grid-rows-2 w-full h-full">
                {/* Row for H1 */}
                <div className="flex justify-center items-center w-full h-full rounded-tl-xl max-sm:rounded-tl-none bg-gray-200 text-gray-700 font-extrabold max-sm:font-semibold">
                  <h1 className=" text-gray-600 font-extrabold max-sm:font-semibold">
                    وضعیت
                  </h1>
                </div>

                {/* Row for Span */}
                <div className="flex justify-center items-center w-full h-full text-gray-700 font-extrabold max-sm:font-semibold">
                  <span className="text-sm max-sm:text-xs text-gray-500">
                    پرداخت ناموفق
                  </span>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* row 3 */}
      </section>
    </section>
  );
}

export default FailedTransaction
