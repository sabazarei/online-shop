"use client";
import Image from "next/image";
import { useState } from "react";

// react icons
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineManageSearch } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
//import components
import FilterSelection from "./FilterSelection";
import PriceRangeSlider from "./PriceRangeSlider";

function FilterSideBar() {
  // State to control the visibility of the filter card on mobile
  const [showFilterSideBar, setShowFilterSideBar] = useState(false);
  const [rangeValues, setRangeValues] = useState<{ min: number; max: number }>({
    min: 0,
    max: 100,
  });
  const handleRangeChange = (values: { min: number; max: number }) => {
    setRangeValues(values);
  };

  return (
    <section className=" mt-5 mr-5 ">
      {/* filter button */}
      <section className="relative">
        <button
          className={`${
            showFilterSideBar ? "hidden" : "md:hidden"
          }  p-2 bg-gray-200 rounded-xl mb-4`}
          onClick={() => setShowFilterSideBar(!showFilterSideBar)}
        >
          <section className="mx-2">
            جستجوی پیشرفت
            <MdOutlineManageSearch className="inline text-xl mr-2" />
          </section>
        </button>
        <button
          className={`${
            showFilterSideBar ? "md:hidden" : "hidden"
          } p-2 rounded-xl mb-4 absolute left-6 -top-2 text-xl `}
          onClick={() => setShowFilterSideBar(!showFilterSideBar)}
        >
          <RxCross2 />
        </button>
      </section>
      {/* filter button end*/}

      <section
        className={`${
          showFilterSideBar ? "block" : "hidden"
        } md:block bg-red-00 h-[50rem]`}
      >
        <div className="flex items-center gap-5 mt-8">
          <Image src="/imgs/title-circles.png" alt="O" width={30} height={30} />
          <h1 className="text-md text-gray-500 font-medium mb-5">
            فیلتر محصولات
          </h1>
        </div>
        {/* Filter Card Content */}
        <section className="mt-7">
          {/* search bar */}
          <div className="flex w-full h-10 px-7 mb-7">
            <input
              type="text"
              className="w-full h-10 border grid justify-self-center placeholder:text-xs placeholder:pr-2 rounded-r-lg "
              placeholder="نام برند یا محصول مورد نظر را بنویسید ..."
            />

            <button className="w-10 bg-mainRed text-white text-2xl grid justify-center items-center rounded-l-lg">
              <IoSearchOutline className="" />
            </button>
          </div>

          <FilterSelection />
        </section>

        <div className="flex items-center gap-5 mt-8">
          <Image src="/imgs/title-circles.png" alt="O" width={30} height={30} />
          <h1 className="text-md text-gray-500 font-medium mb-5">
            فیلتر براساس قیمت :
          </h1>
        </div>

        <div dir="ltr" className="">
          {/* <h1 className="text-3xl text-neutral-300 font-medium">Custom Price Range Slider</h1> */}
          <PriceRangeSlider
            min={50}
            max={900}
            onChange={handleRangeChange}
            width="w-[80%] lg:w-[17rem]"
            smallScreenWidth="w-full"
          />
        </div>
      </section>
    </section>
  );
}

export default FilterSideBar;
