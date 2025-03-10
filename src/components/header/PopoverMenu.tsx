/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductsCategoryType } from "@/types/GlobalTypes";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface Props {
  productsCategories: ProductsCategoryType[];
}

export default function PopoverMenu({ productsCategories }: Props) {
  let timeout: any; // NodeJS.Timeout
  const timeoutDuration = 0;

  const buttonRef = useRef<HTMLButtonElement>(null); // useRef<HTMLButtonElement>(null)
  const [openState, setOpenState] = useState(false);
  const [selectedSubCategoryIndex, setSelectedSubCategoryIndex] = useState(-1);

  const handleSubCategoryClick = (selectedIndex: number) => {
    console.log(selectedIndex, "...");
    console.log(selectedSubCategoryIndex, "qqq");

    if (selectedIndex == selectedSubCategoryIndex) {
      setSelectedSubCategoryIndex(-1);
    } else {
      setSelectedSubCategoryIndex(selectedIndex);
    }
  };

  const toggleMenu = () => {
    // log the current open state in React (toggle open state)
    setOpenState((openState) => !openState);
    // toggle the menu by clicking on buttonRef
    buttonRef?.current?.click();
  };

  // Open the menu after a delay of timeoutDuration
  const onHover = (open: boolean, action: any) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout);
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu(), timeoutDuration);
    }
    // else: don't click! 😁
  };

  const handleClick = (open: boolean) => {
    setOpenState(!open); // toggle open state in React state
    clearTimeout(timeout); // stop the hover timer if it's running
  };

  const handleClickOutside = (event: any) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div>
      <Popover style={{ border: "none" }} className="relative">
        {({ open }) => (
          <div
            onMouseEnter={() => onHover(open, "onMouseEnter")}
            onMouseLeave={() => onHover(open, "onMouseLeave")}
            className="flex flex-col"
          >
            <PopoverButton
              ref={buttonRef}
              className="... focus-visible:outline-none"
            >
              <div
                onClick={() => handleClick(open)}
                className={`relative flex items-center hover:text-red-600 transition-all duration-100 ${
                  open ? "text-red-600" : ""
                }`}
              >
                <span className="pe-3 ps-4 border-l-2 ">دسته بندی کالا</span>
                <CgMenu />
                <div
                  className={`absolute top-8 ${
                    open ? "w-full border-b-2 border-red-600" : ""
                  }`}
                ></div>
              </div>
            </PopoverButton>

            <Transition show={open}>
              <PopoverPanel className="absolute top-[20px] w-full h-full"></PopoverPanel>
            </Transition>

            <Transition
              show={open}
              as={Fragment}
              // enter="transition ease-out duration-200"
              //   enterFrom="opacity-0 translate-y-1"
              //   enterTo="opacity-100 translate-y-0"
              // leave="transition ease-in duration-150"
              // leaveFrom="opacity-100 translate-y-0"
              //  leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel
                static
                className="z-10 absolute top-10 right-0 text-right w-[30rem]  mx-auto"
              >
                <div className=" bg-white shadow-lg relative  ">
                  {productsCategories.map((productCategory, index) => (
                    <div dir="rtl" key={index} className=" grid grid-cols-2 ">
                      <div
                        className="px-4 py-3  border-l-2   hover:bg-[#F5F5F5] cursor-pointer"
                        onClick={() => handleSubCategoryClick(index)}
                      >
                        {productCategory.categoryTitle}
                      </div>
                      <div className="absolute top-0 left-1">
                        {selectedSubCategoryIndex == index &&
                          productCategory.subCategories.map(
                            (productSubCategory, index) => (
                              <div
                                className="flex items-center px-4 py-3   hover:text-blue-600 cursor-pointer"
                                key={index}
                              >
                                <Link href={productSubCategory.linkHref} />
                                {productSubCategory.subCategoryTitle}
                                <MdOutlineKeyboardArrowLeft className="text-2xl " />
                              </div>
                            )
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </div>
        )}
      </Popover>
    </div>
  );
}
