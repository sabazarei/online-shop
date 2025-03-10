import { HiShoppingBag } from "react-icons/hi2";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

function CompeletedTransaction() {
  return (
    <section className="grid">
      <section className="grid grid-cols-1 auto-rows-auto gap-y-0">
        <section className="w-full mt-12 px-6 pb-5">
          <div className="flex flex-col justify-center items-center">
            <div>
              <div className="bg-[hsla(84,55%,66%,0.623)] rounded-full w-24 h-24 grid place-items-center">
                <FaCheck className="text-5xl text-[#9caf7e]" />
              </div>
            </div>

            {/* Text Container */}
            <div className="mt-10 w-full text-center flex flex-col items-center">
              <h1 className="text-xl font-bold text-gray-500">
                سفارش
                <span className="text-[#00bfd6] bg-[#ebfdff] rounded-xl pt-1 px-2 mx-1">
                  DDC-75007560
                </span>
                با موفقیت در سیستم ثبت شد.
              </h1>
             
              <p className="text-gray-500 mt-2">
              سفارش نهایتا تا یک روز آماده ارسال خواهد شد.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 max-sm:mt-36">
          <div className="m-6">
            <h1 className="text-xl font-bold text-gray-800 ">
              کد سفارش: DDC-75007560
            </h1>
            <div className="text-right text-gray-400 font-bold py-4 max-sm:text-sm">
              سفارش شما با موفقیت در سیستم ثبت شد و هم اکنون در
              <span className="text-[#9caf7e] font-bold bg-[hsla(84,55%,66%,0.26)] p-1 mx-1 rounded-xl">
                {" "}
                تکمیل شده{" "}
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
                <div className="flex-grow flex justify-center items-center text-[#fff] text-base px-11  z-10">
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
                        <span className="text-[#9caf7e]">(موفق)</span>
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
                      <li className="p-3">وضعیت سفارش: پرداخت شد</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </section>
          ّ
        </section>

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
                    پرداخت موفق
                  </span>
                </div>
              </div>
            </section>
          </div>
        </section>

      </section>
    </section>
  );
}

export default CompeletedTransaction;
