'use client'
import DoubleCircle from "@/components/DoubleCircle";
import NewAddressModal from "@/components/Shopping/NewAddressModal";
import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdAddLocationAlt, MdPhoneIphone } from "react-icons/md";

const ProfileAddressPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="md:col-span-2 relative">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {/* first-col */}
        <div className="">
          <div className="flex py-5 my-3 mb-7 border-b-4 border-mainLightBlue">
            <DoubleCircle />
            <h1>آدرس ها</h1>
          </div>

          <div
            className="mx-5 border-4 border-dashed border-gray-300 max-w-full h-56 rounded-xl flex flex-col items-center justify-center gap-12"
            onClick={() => setIsModalOpen(true)}
          >
            <p className="text-2xl text-gray-400 font-bold">ایجاد آدرس جدید</p>
            <div>
              <MdAddLocationAlt className="text-4xl text-gray-400" />
            </div>
          </div>
          <div className="">
            {isModalOpen && (
              <NewAddressModal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
              />
            )}
          </div>

          {/* map */}
          <div className="border-t-4 border-mainLightBlue w-full my-7 p-4">
            <h1 className="text-gray-700 text-xl font-bold">جلال بهرامی راد</h1>
            <h3 className="text-gray-500 pb-16">
              خراسان شمالی، بجنورد، خراسان شمالی-بجنورد
            </h3>
            <hr />
            <div className="flex justify-between relative">
              <div className="text-gray-500 ">
                <div className="flex items-center py-3">
                  <FaRegEnvelope className="ml-3 text-xl" />
                  <p>کد پستی: </p>
                  <span>0986453</span>
                </div>
                <div className="flex items-center py-2">
                  <MdPhoneIphone className="ml-3 text-xl" />
                  <p> تلفن همراه: </p>
                  <span>0945643241</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-1 text-gray-500">
                <button className="bg-[#e3e3e3] px-4 p-1 rounded-md m-1">
                  ویرایش
                </button>
                <button className="bg-[#e3e3e3] px-3 p-1 rounded-md m-1">
                  حذف
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProfileAddressPage;
