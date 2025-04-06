import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const LastFavList = () => {
  const favoriteList = [
    {
      id: 500,
      productName: "کت مردانه مجلسی مدل k-m-5500",
      productImage: "/imgs/coat-5500.jpg",
    },
    {
      id: 501,
      productName: "کت مردانه مجلسی مدل k-m-5640",
      productImage: "/imgs/coat-5640.jpg",
    },
    {
      id: 502,
      productName: "کت مردانه مجلسی مدل k-m-5110",
      productImage: "/imgs/coat-5110.jpg",
    },
  ];
  return (
    <div className="p-1 border rounded-lg">
      <div>
        <ul>
          {favoriteList.map((item) => (
             <li
              key={item.id}
              className="flex items-center border rounded-lg p-2 m-2"
            >
              <Image
                width={40}
                height={40}
                src={item.productImage}
                alt={item.productName}
              />
              <span className="flex-grow text-gray-500 font-semibold text-sm">
                {item.productName}
              </span>
              <span className="bg-gray-200 p-[8px] rounded-xl">
                <RiDeleteBin6Line className="text-mainRed text-lg" />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16 mb-3 flex justify-center">
        <Link
          href={""}
          className="text-mainRed text-sm font-semibold  border-b border-dashed border-mainRed"
        >
          <FaEdit className="inline text-lg ml-2" />
          مشاهده و ویرایش لیست مورد علاقه
        </Link>
      </div>
    </div>
  );
};

export default LastFavList;
