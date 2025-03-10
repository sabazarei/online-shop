/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Popover,
  PopoverButton,
  Transition,
  PopoverPanel,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
type miniShopCartType = {
  title: string;
  count: number;
  color: string;
  img: string;
};

const miniShopCartList: miniShopCartType[] = [
  {
    title:
      "گوشی موبایل سامسونگ مدل Galaxy A30 SM-A305F/DS دو سیم کارت ظرفیت64 گیگابایت",
    count: 2,
    color: "green",
    img: "/imgs/1.jpg",
  },
  {
    title:
      "گوشی موبایل سامسونگ مدل Galaxy A30 SM-A305F/DS دو سیم کارت ظرفیت64 گیگابایت",
    count: 1,
    color: "green",
    img: "/imgs/1.jpg",
  },
  {
    title: "گوشی موبایل هوآوی مدل Y9 2019 JKM-LX1 دو سیم کارت ظرفیت 64گیگابایت",

    count: 3,
    color: "green",
    img: "/imgs/1.jpg",
  },
];

const HeaderMiniShopCart = () => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <PopoverButton className="... focus-visible:outline-none">
            <div className="flex text-[#607D8B] justify-center items-center ">
              <div className="relative">
                <MdOutlineShoppingCart className="text-[20px]" />
                <div className=" absolute px-[6px] py-[1px] text-center text-xs text-white  bg-red-600 rounded-[100%]  transform  -top-[12px] -right-[7px]">
                  2
                </div>
              </div>

              <span className="ps-2">سبد خرید</span>
            </div>
          </PopoverButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute -left-4 w-96 z-10 mt-3 px-4">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                <div className="relative  bg-white px-3 py-4">
                  <div className="flex justify-between">
                    <div className="flex text-blue-500 font-bold items-center ">
                      <MdKeyboardArrowLeft className="text-2xl text-blue-500" />
                      <Link href="/" className="">
                        مشاهده سبد خرید
                      </Link>
                    </div>
                    <p className="text-gray-600 ">
                      کالا {miniShopCartList.length}
                    </p>
                  </div>
                  {/* list */}
                  <div className="border-y-2  py-2 my-2 divide-y-2 divide-gray-100  ">
                    {miniShopCartList.map((item, index) => (
                      <div
                        key={index}
                        dir="rtl"
                        className="flex py-5 items-center cursor-pointer"
                      >
                        <div className="relative">
                          <Image
                            width={150}
                            height={20}
                            alt={item.title}
                            src={item.img}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold">{item.title}</p>
                          <div className="flex pt-3 justify-between items-center">
                            <div className="flex  items-center divide-x-2 divide-x-reverse">
                              <span className="pe-2">x {item.count}</span>
                              <div className="flex  items-center ps-3">
                                <div className="bg-blue-700  rounded-full  w-[16px] h-[16px]"></div>
                                <span className="ps-1">آبی</span>
                              </div>
                            </div>
                            <FaRegTrashCan className="text-red-500" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="bg-blue-400 cursor-pointer text-white rounded-md px-6 py-2 font-bold text-lg">
                      ثبت سفارش
                    </button>
                    <div dir="rtl">
                      <p>مبلغ قابل پرداخت : </p>
                      <p> 9500000 تومان</p>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default HeaderMiniShopCart;
