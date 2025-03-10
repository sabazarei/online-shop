"use client";
import React, { useState } from "react";
import Review from "./ReviewTab";
import { IoGlassesOutline } from "react-icons/io5";
import { RiListCheck3 } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { Specification } from "./SpecificationTab";
import { Comments } from "./CommentsTab";
import { FAQ } from "./FAQTab";

export const ProductInfo = () => {
  const tabsData = [
    {
      label: "نقد و بررسی",
      index: 0,
      icon: IoGlassesOutline,
    },
    {
      label: "مشخصات",
      index: 1,
      icon: RiListCheck3,
    },
    {
      label: "نظرات کاربران ",
      index: 2,
      icon: BiCommentDetail,
    },
    {
      label: "پرسش و پاسخ",
      index: 3,
      icon: RiQuestionnaireLine,
    },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  
  return (
    <>
      <div className="bg-[#FFFFFF] w-full mb-52 rounded-[20px]">
        <div className="">
          <div className="flex max-sm:flex-wrap pt-9 border-b border-gray-200">
            {tabsData.map((tab, indx) => {
              return (
                <button
                  key={indx}
                  className={`text-gray-rgba md:px-8 sm:px-6 h-10 rounded-t-[20px] text-md max-sm:m-2 max-sm:text-sm ${
                    indx === activeTabIndex
                      ? "border-b-2 border-black"
                      : "hover: border-b-2 hover:border-black"
                  }`}
                  onClick={() => setActiveTabIndex(indx)}
                >
                  <tab.icon className="inline ml-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          {activeTabIndex === 0 ? (
            <Review />
          ) : activeTabIndex === 1 ? (
            <Specification />
          ) : activeTabIndex === 2 ? (
            <Comments />
          ) : (
            <FAQ />
          )}
        </div>
      </div>
    </>
  );
};
