"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaAddressBook, FaEye, FaRegHeart } from "react-icons/fa6";
import { MdAssignmentReturn, MdReviews } from "react-icons/md";
import { PiBasketFill } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";

const AccountProfile = () => {
  const pathname = usePathname();
const menuItems = [
  { title: "پروفایل", path: "/profile", icon: RxAvatar },
  { title: "همه سفارش ها", path: "/allOrders", icon: PiBasketFill },
  {
    title: "درخواست مرجوعی",
    path: "/rejectedRequest",
    icon: MdAssignmentReturn,
  },
  { title: "لیست علاقمندی ها", path: "/favoriteList", icon: FaRegHeart },
  { title: "نقد و نظرات", path: "/reviews", icon: MdReviews },
  { title: "آدرس ها", path: "/addresses", icon: FaAddressBook },
  { title: "بازدید های اخیر", path: "/lastSeen", icon: FaEye },
  { title: "اطلاعات شخصی", path: "/personalInfo", icon: BsPersonLinesFill },
];
  return (
    // max-w-xs
    <div className="border p-2 m-3 rounded-md">
      <h2 className="font-semibold text-lg p-2">حساب کاربری شما</h2>
      <ul>
        {menuItems.map(({ title, path, icon :Icon }) => (
          <li
            key={path}
            className={`text-gray-500 p-3 ${
              pathname === path ? "text-mainLightBlue bg-[#f6ffff]" : ""
            }`}
          >
            <Link href="/profile">
              <Icon className="inline text-lg ml-2" />
              <span className="text-sm">{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountProfile;
