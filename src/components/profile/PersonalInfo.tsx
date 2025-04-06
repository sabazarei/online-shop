import Link from "next/link";
import React from "react";
import { FaUserEdit } from "react-icons/fa";

const PersonalInfo = () => {
  return (
    <div className=" p-3 border rounded-lg">
      <div className="sm:flex justify-between">
        <div className="flex-1">
          <div className="flex flex-col p-2 font-semibold">
            <span className="text-gray-400 text-xs">نام و نام خانوادگی:</span>
            <span className="text-[#4a5f73] text-lg">جلال بهرامی راد</span>
          </div>
          <div className="flex flex-col p-2 font-semibold">
            <span className="text-xs text-gray-400">شماره تلفن:</span>
            <span className="text-[#4a5f73] text-lg">09030813742</span>
          </div>
          <div className="flex flex-col p-2 font-semibold">
            <span className="text-xs text-gray-400">دریافت خبرنامه:</span>
            <span className="text-[#4a5f73] text-lg">خیر</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col p-2 font-semibold">
            <span className="text-xs text-gray-400">پست الکترونیک:</span>
            <span className="text-[#4a5f73] text-lg">info@gmail.com</span>
          </div>
          <div className="flex flex-col p-2 font-semibold">
            <span className="text-xs text-gray-400 ">کد ملی:</span>
            <span className="text-[#4a5f73] text-lg">-</span>
          </div>
          <div className="flex flex-col p-2 font-semibold">
            <span className="text-xs text-gray-400">شماره کارت:</span>
            <span className="text-[#4a5f73] text-lg">-</span>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <Link
          href={""}
          className="text-mainRed text-sm font-semibold  border-b border-dashed border-mainRed"
        >
          <FaUserEdit className="inline text-lg ml-2" />
          ویرایش اطلاعات شخصی
        </Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
