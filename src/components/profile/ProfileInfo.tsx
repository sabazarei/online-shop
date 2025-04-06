import Image from "next/image";
import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdLockReset } from "react-icons/md";

const ProfileInfo = () => {
  return (
    <div className="border p-3 rounded-lg">
      <div className="flex items-center mb-5">
        <div>
          <Image
            className="inline ml-3"
            src="/imgs/avatar.png"
            width={65}
            height={65}
            alt="avatar"
            priority
          />
        </div>
        <div>
          <div className="font-semibold">جلال بهرامی راد</div>
          <div className="text-[13px] text-gray-400 py-1">09030813742</div>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-gray-200 py-1">
        <div className="font-semibold text-mainLightBlue">امتیاز شما:</div>
        <div className="text-sm text-gray-400"> 120</div>
      </div>
      <div className="flex justify-between p-2 px-5 text-gray-500">
        <div className="flex flex-col items-center">
          <div className="mb-1">
            <MdLockReset />
          </div>
          <div className="text-sm">تغییر رمز </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-1">
            <RiLogoutBoxRLine className="text-sm" />
          </div>
          <div className="text-sm">خروج از حساب </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
