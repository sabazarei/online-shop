import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import Image from "next/image";
export const Comments = () => {
  const progressData = [
    {
      id:0,
      label: "طراحی",
      percentage: 45,
    },
    {
      id:1,
      label: "ارزش خرید",
      percentage: 20,
    },
    {
      id:2,
      label: "کیفیت ساخت",
      percentage: 90,
    },
    {
      id:3,
      label: "امکانات و قابلیت ها",
      percentage: 75,
    },
  ];
  const fakeComments = [
    {
      productName: "لباسشویی سامسونگ",
      userName: "مجید سجادی فرد",
      submittedDate: "5 مهر 1395",
      description: `
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
           `,
      color: "آبی",
      shop: "دیجی کالا",
    },
    {
      productName: "تلویزیون سامسونگ",
      userName: "فرید سجادی ",
      submittedDate: "10 دی 1395",
      description: `
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
           `,
      color: "مشکی",
      shop: "دیجی کالا",
    },
  ];
  return (
    <div className=" mx-3">
      <div className="m-8">
        <Image
          className="inline ml-3"
          src="/imgs/title-circles.png"
          width={30}
          height={30}
          alt="Circle Decoration"
          priority // Ensures faster LCP by preloading the image
        />
        <h2 className="inline text-md text-[#6f7479] font-bold">
          امتیاز کاربران به:
        </h2>
        <h1 className="md:text-lg text-[#666] font-semibold border-b border-gray-100 py-2 m-2">
          گوشی موبایل سامسونگ مدل Galaxy A50 SM-A505F/DS دو سیم کارت ظرفیت
          128گیگابایت
        </h1>
      </div>
      <div className="grid md:grid-cols-2 place-items-center">
        <div className="w-full md:w-5/6 md:m-3 p-3 bg-gray-50">
          {progressData.map((data) => (
            <div
              key={data.id}
              className="flex justify-start items-center gap-3 p-3"
            >
              <div className="max-md:text-xs text-sm w-1/4 ml-auto">{data.label}</div>
              <div className="w-2/4 bg-gray-200 rounded-full h-1">
                <div
                  className="bg-mainRed h-1 rounded-full"
                  style={{ width: `${data.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-mainRed">
                {data.percentage}%
              </span>
            </div>
          ))}
        </div>

        <div className="">
          <h2 className="md:text-lg text-[#5a5a5a] p-3">
            شما هم می‌توانید در مورد این کالا نظر بدهید.
          </h2>
          <p className="text-[#676767] p-3 max-md:text-sm max-md:leading-8">
            برای ثبت نظر، لازم است ابتدا وارد حساب کاربری خود شوید. اگر این
            محصول را قبلا از دیجی‌کالا خریده باشید، نظر شما به عنوان مالک محصول
            ثبت خواهد شد.
          </p>
          <button className="w-48 h-10 relative flex items-center justify-center rounded-[10px] bg-mainRed overflow-hidden md:flex group m-3">
            <div className="absolute right-0 top-0 h-full w-10 bg-red-300 rounded-l-2xl group-hover:rounded-l-[10px] transition-all duration-300 ease-in-out group-hover:w-full"></div>

            <div className="absolute right-0 top-0 h-full w-10 grid place-items-center text-white z-10">
              <BiCommentDetail className="text-xl" />
            </div>

            {/* Button Text */}
            <div className="flex-grow flex justify-center items-center text-white pr-8 z-10">
              افزودن نظر جدید
            </div>
          </button>
        </div>
      </div>

      <div className="m-8">
        <Image
          className="inline ml-3"
          src="/imgs/title-circles.png"
          width={30}
          height={30}
          alt="Circle Decoration"
          priority // Ensures faster LCP by preloading the image
        />
        <h2 className="inline text-md text-[#6f7479] font-bold">
          نظرات کاربران
        </h2>
        <p className="text-lg text-[#000] font-bold py-2 m-2">
          123 نظر
        </p>
      </div>

      {fakeComments.map((comment, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg md:p-5 md:m-5 my-8"
        >
          <div className="grid grid-cols-3 m-5 max-md:grid-cols-1 md:px-5">
            <div className="max-md:text-sm">
              <div>
                <RiShoppingCart2Line className="inline text-black text-2xl font-semibold" />
                <span className="text-[#245a1dfa] mx-5 text-sm">
                  خریدار این محصول
                </span>
              </div>
              <div className=" my-7">
                <div className="font-bold text-black my-2">
                  رنگ خریداری شده:
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 border border-gray-200 rounded-[5px] bg-[#2196f3]"></span>
                  <span className="pr-4 text-black font-bold">
                    {comment.color}
                  </span>
                </div>
              </div>
              <div className=" my-7">
                <div className="font-bold text-black my-2">
                  خریداری شده از:
                </div>
                <div className="flex items-center">
                  <BsShop className="w-4 h-4" />
                  <span className="pr-4 text-[#1ca2bd] font-bold">
                    {comment.shop}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <h1 className="md:text-lg font-bold text-[#5f5f5f]">
                {comment.productName}
              </h1>
              <h5 className="text-[#adadad] max-sm:text-xs text-sm pb-4">
                توسط {comment.userName} در تاریخ{" "}
                <span>{comment.submittedDate}</span>
              </h5>
              <hr />
              <p className="py-5 sm:text-sm sm:leading-8 text-[13px] leading-7">{comment.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
