/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import React, { Fragment, ReactElement } from "react";
import { IconType } from "react-icons";
import { IoMdExit } from "react-icons/io";
import { MdOutlineManageAccounts, MdOutlineMessage } from "react-icons/md";
import { RiAccountCircleLine, RiProfileLine } from "react-icons/ri";

type AccountMenuType = {
  title: string;
  linkHref: string;
  icon: ReactElement<IconType>;
};

const HeaderAccountBtn = () => {
  const accountMenu: AccountMenuType[] = [
    {
      title: "پروفایل",
      linkHref: "/",
      icon: <RiProfileLine />,
    },
    {
      title: "پیغام ها",
      linkHref: "/",
      icon: <MdOutlineMessage />,
    },
    {
      title: "ویرایش حساب کاربری",
      linkHref: "/",
      icon: <MdOutlineManageAccounts />,
    },
    {
      title: "خروج",
      linkHref: "/",
      icon: <IoMdExit />,
    },
  ];

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <PopoverButton className="... focus-visible:outline-none">
            <div className=" cursor-pointer  border-gray-200 border-2 flex justify-center items-center rounded-lg py-2 px-3">
              <span className="pe-2">حساب کاربری</span>
              <RiAccountCircleLine />
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
            <PopoverPanel className="absolute -left-4 w-64 z-10 mt-3 px-4">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                <div className="relative  bg-white px-3 py-4">
                  {accountMenu.map((item, index) => (
                    <div key={index}>
                      {item.title == "خروج" && (
                        <div className="w-full border-t-2 pb-2"></div>
                      )}
                      <div className="flex py-3 px-2 rounded-md  cursor-pointer hover:bg-[#F4F4F4] hover:text-red-500   bg-white    text-right items-center">
                        {item.icon}
                        <span className="ps-2 text-sm">{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default HeaderAccountBtn;
