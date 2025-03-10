import Image from "next/image";
import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";

const specifications = {
  ابعاد: "7.7 × 70.9 × 143.6 میلی‌متر",
  "سیم کارت": "سایز نانو (8.8 × 12.3 میلی‌متر)",
  وزن: "174 گرم",
};

export const Specification = () => {
  return (
    // <div className="relative overflow-x-auto">
    //   <table className="border-separate border-spacing-4 w-full">
    //     <thead className="text-xs text-gray-700 uppercase">
    //       <tr>
    //         <IoMdArrowDropleft className="inline text-lg text-blue-400" />
    //         <span className="text-[#4d4d4d]">مشخصات کلی</span>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {Object.entries(specifications).map(([key, value]) => (
    //         <tr key={key} className="bg-white dark:bg-gray-800">
    //           <th
    //             scope="row"
    //             className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 rounded-md"
    //           >
    //             {key}
    //           </th>
    //           <td className="px-6 py-4 bg-gray-200 rounded-md">{value}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div className="relative overflow-x-auto">
      <div className="m-8">
        <Image
          className="inline ml-3"
          src="/imgs/title-circles.png"
          width={30}
          height={30}
          alt="Circle Decoration"
          priority // Ensures faster LCP by preloading the image
        />
        <h2 className="inline text-md text-[#6f7479] font-semibold">
          مشخصات فنی
        </h2>
        <h1 className=" md:text-lg text-[#666] font-semibold border-b border-gray-100 py-2 m-2">
          گوشی موبایل سامسونگ مدل Galaxy A50 SM-A505F/DS دو سیم کارت ظرفیت
          128گیگابایت
        </h1>
      </div>
      <table className="border-separate border-spacing-4 w-full">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th colSpan={2} className="text-right px-4 py-2">
              <IoMdArrowDropleft className="inline text-lg text-blue-400" />
              <span className="text-[#4d4d4d] mr-2">مشخصات کلی</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(specifications).map(([key, value]) => (
            <tr key={key} className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 text-sm max-md:text-xs font-medium text-gray-900 whitespace-nowrap bg-gray-200 rounded-md text-right"
              >
                {key}
              </th>
              <td className="px-6 py-4 text-sm max-md:text-xs bg-gray-200 rounded-md text-right">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
