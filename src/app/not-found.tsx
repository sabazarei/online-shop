import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="text-center">
        <div className="mt-10">
          <p className="text-[#4a5f73] text-[2.5rem] max-md:text-[1.5rem] font-bold mb-8 ">
            صفحه‌ای که دنبال آن بودید پیدا نشد!
          </p>
          <button className="text-[#fff] bg-mainRed p-[10px] rounded-lg text-base  ">
            ادامه خرید در دیدیکالا
          </button>
          <Image
            width={800}
            height={800}
            className="block my-4 mx-auto w-3/5 "
            src={"/imgs/404.png"}
            alt="404"
          />
        </div>
      </div>
    </>
  );
};

export default NotFound;
