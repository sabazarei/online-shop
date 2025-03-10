"use client";

import { ProductsCategoryType } from "@/types/GlobalTypes";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import PopoverMenu from "./PopoverMenu";
import HeaderAccountBtn from "./HeaderAccountBtn";
import HeaderMiniShopCart from "./HeaderMiniShopCart";
const productsCategories: ProductsCategoryType[] = [
  {
    categoryTitle: "کالای دیجیتال",
    subCategories: [
      {
        subCategoryTitle: "لوازم جانبی گوشی",
        linkHref: "/",
      },
      {
        subCategoryTitle: "کیف و کاور گوشی",
        linkHref: "/",
      },
      {
        subCategoryTitle: "پاور بانک (شارژر همراه)",
        linkHref: "/",
      },
    ],
  },
  {
    categoryTitle: "خودرو، ابزار و تجهیزات صنعتی",
    subCategories: [
      {
        subCategoryTitle: "لوازم جانبی گوشی",
        linkHref: "/",
      },
    ],
  },
  {
    categoryTitle: "مد و پوشاک",
    subCategories: [
      {
        subCategoryTitle: "لوازم جانبی گوشی",
        linkHref: "/",
      },
      {
        subCategoryTitle: "کیف و کاور گوشی",
        linkHref: "/",
      },
      {
        subCategoryTitle: "پاور بانک (شارژر همراه)",
        linkHref: "/",
      },
    ],
  },
  {
    categoryTitle: "زیبایی و سلامت",
    subCategories: [
      {
        subCategoryTitle: "لوازم جانبی گوشی",
        linkHref: "/",
      },
      {
        subCategoryTitle: "کیف و کاور گوشی",
        linkHref: "/",
      },
      {
        subCategoryTitle: "هارد، فلش و SSD",
        linkHref: "/",
      },
    ],
  },
  {
    categoryTitle: "خانه و آشپزخانه",
    subCategories: [
      {
        subCategoryTitle: "لوازم جانبی گوشی",
        linkHref: "/",
      },
      {
        subCategoryTitle: "کیف و کاور گوشی",
        linkHref: "/",
      },
      {
        subCategoryTitle: "پاور بانک (شارژر همراه)",
        linkHref: "/",
      },
    ],
  },
  {
    categoryTitle: "کتاب، لوازم تحریر و هنر",
    subCategories: [
      {
        subCategoryTitle: "هارد، فلش و SSD",
        linkHref: "/",
      },
      {
        subCategoryTitle: "مچ‌بند و ساعت هوشمند",
        linkHref: "/",
      },
      {
        subCategoryTitle: "پاور بانک (شارژر همراه)",
        linkHref: "/",
      },
    ],
  },
  {
    categoryTitle: "اسباب بازی، کودک و نوزاد",
    subCategories: [
      {
        subCategoryTitle: "لوازم جانبی گوشی",
        linkHref: "/",
      },
      {
        subCategoryTitle: "کیف و کاور گوشی",
        linkHref: "/",
      },
      {
        subCategoryTitle: "پاور بانک (شارژر همراه)",
        linkHref: "/",
      },
    ],
  },
  {
    categoryTitle: "ورزش و سفر",
    subCategories: [
      {
        subCategoryTitle: "لوازم جانبی گوشی",
        linkHref: "/",
      },
      {
        subCategoryTitle: "کیف و کاور گوشی",
        linkHref: "/",
      },
      {
        subCategoryTitle: "پاور بانک (شارژر همراه)",
        linkHref: "/",
      },
    ],
  },
  {
    categoryTitle: "خوردنی و آشامیدنی",
    subCategories: [
      {
        subCategoryTitle: "لوازم جانبی گوشی",
        linkHref: "/",
      },
      {
        subCategoryTitle: "مچ‌بند و ساعت هوشمند",
        linkHref: "/",
      },
      {
        subCategoryTitle: "پاور بانک (شارژر همراه)",
        linkHref: "/",
      },
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [selectedSublinkListIndex, setSelectedSublinkListIndex] =
    useState<number>(-1);

  const handleHeaderSublinkSelection = (selectedIndex: number) => {
    if (selectedIndex == selectedSublinkListIndex) {
      setSelectedSublinkListIndex(-1);
    } else {
      setSelectedSublinkListIndex(selectedIndex);
    }
  };

  const [yposition, setYPosition] = useState(0);
  //const [lowestYPosition, setlowestYPosition] = useState(0);

  const onScroll = useCallback(() => {
    setYPosition(window.scrollY);
  }, []);

  // if (window.scrollY > lowestYPosition) {
  //   setlowestYPosition(() => window.scrollY);
  // }

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <header className="fixed z-50 bg-white w-full ">
      {/* read-banner */}
      <div
        className={`hidden md:block relative h-[60px] transition-all duration-300 ${
          yposition > 100 && "-translate-y-16 !h-0"
        }`}
      >
        <Image src="/imgs/large-ads.jpg" alt="omin-net-logo" fill />
      </div>
      <div className="shadow-md px-4 xl:px-16 relative ">
        {/* header-1 */}
        <div className="flex justify-between pt-5 pb-6   ">
          <Image
            src="/imgs/logo.png"
            alt="omin-net-logo"
            width={120}
            height={50}
            quality={100}
          />
          <div className="hidden md:block md:w-80 lg:w-[30rem]">
            <div className="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#979797"
                className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                className="w-full h-[45px] !bg-[#ededed] bg-transparent placeholder:text-[#757575] text-slate-700 text-sm  rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="نام کالا، برند و یا دسته مورد نظر خود را جستجو کنید…"
              />
            </div>
          </div>
          <HeaderAccountBtn />
        </div>
        {/* header-2 */}
        <div
          dir="ltr"
          className={`w-full h-10 transition-all duration-300    pb-2  ${
            yposition > 250 && "-translate-y-1 opacity-0  !h-0 pb-0"
          }`}
        >
          <nav className="mx-auto flex max-w-7x items-center justify-between ">
            {/* user-mini-shopping-cart */}
            <HeaderMiniShopCart />
            {/* hamburger-menu */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 "
              >
                <span className="sr-only">Open main menu</span>
                <CgMenu
                  className={`h-[30px] w-[40px] transition-all text-black"
                    `}
                />
              </button>
            </div>

            {/* category-menu */}
            <div className="hidden md:block">
              <PopoverMenu productsCategories={productsCategories} />
            </div>
          </nav>
          {/* mobile mode - full-screen opacity */}
          {mobileMenuOpen && (
            <div className="absolute w-full  h-screen top-0 left-0 opacity-20 bg-black"></div>
          )}
          {/* mobile mode */}
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden  bg-white  opacity-100"
            dir="rtl"
          >
            <div className="fixed inset-0 z-10" />

            <DialogPanel
              className={`fixed inset-y-0 right-0 z-50 w-80 overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 h-full  rounded-md  backdrop-blur-2xl bg-white`}
            >
              <div className="py-5 flex justify-center ">
                <Image
                  src="/imgs/logo.png"
                  alt="omin-net-logo"
                  width={140}
                  height={80}
                  quality={100}
                />
              </div>
              {/* input */}
              <div className="relative flex items-center px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#979797"
                  className="absolute w-5 h-5 top-2.5 left-8 text-slate-900"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <input
                  className="w-full  !bg-[#ededed] bg-transparent placeholder:text-[#757575] text-slate-700 text-sm  rounded-2xl pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="جستجو کنید…"
                />
              </div>
              <div className="mt-6 flow-root px-6">
                <div className="-my-6 divide-y divide-gray-500/10 !text-white">
                  <div className="space-y-2 py-6">
                    {productsCategories.map((item, index) => (
                      <div key={index} className="cursor-pointer">
                        <div
                          className="flex items-center justify-between -mx-3  rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:text-gray-900"
                          onClick={() => handleHeaderSublinkSelection(index)}
                        >
                          <div className="flex">
                            <div className="bg-red-400 relative rounded-lg  w-[30px] h-[30px]">
                              {/* <ImAirplane className=" absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" /> */}
                            </div>
                            <span className="mr-4">{item.categoryTitle}</span>
                          </div>

                          <IoIosArrowDown
                            className={` transition-all duration-500 ${
                              selectedSublinkListIndex == index &&
                              "-rotate-180 transition-all duration-500"
                            }`}
                          />
                        </div>

                        <div className="">
                          {item.subCategories &&
                            selectedSublinkListIndex == index && (
                              <div className="space-y-4 ps-11 text-sm  transition-all  duration-500  animate-fade-down animate-once animate-ease-in">
                                {item.subCategories.map((subCategory) => (
                                  <Link
                                    className="block text-gray-600 hover:text-blue-500 "
                                    href={subCategory.linkHref}
                                    key={subCategory.subCategoryTitle}
                                  >
                                    {subCategory.subCategoryTitle}
                                  </Link>
                                ))}
                              </div>
                            )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
