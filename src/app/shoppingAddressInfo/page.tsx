"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
//import icons
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { GoCheck } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { BsCheckLg } from "react-icons/bs";

// import components
import NewAddressModal from "@/components/Shopping/NewAddressModal";
import DeleteAddressModal from "@/components/Shopping/DeleteAddressModal";
import CustomerAddressBox from "@/components/Shopping/CustomerAddressBox";
import EditCustomerAddressModal from "@/components/Shopping/EditCustomerAddressModal";
import PostDateSelection from "@/components/Shopping/PostDateSelectionTable";
import PostDeliveryDuration from "@/components/Shopping/PostDeliveryDuration";
import DeliveryMethodSelection from "@/components/Shopping/DeliveryMethodSelection";
import ProductsSliderForPayment from "@/components/Shopping/ProductsSliderForPayment";
import TotalExpenseCard from "@/components/Shopping/TotalExpenseCard";



const ShoppingAddressInfo = () => {
  const router = useRouter();
  //   // get jalali date
  //   const today = moment().locale("fa");
  //   const persianDayOfMonth = moment().format("jDD");
  //   const dayOfWeekToday = today.format("dddd");
  //   const persianMonthName = today.jMonth();

  //   const persianMonthsOfYear = [
  //     "فروردین",
  //     "اردیبهشت",
  //     "خرداد",
  //     "تیر",
  //     "مرداد",
  //     "شهریور",
  //     "مهر",
  //     "آبان",
  //     "آذر",
  //     "دی",
  //     "بهمن",
  //     "اسفند",
  //   ];

  //   const persianFormattedDate = `${dayOfWeekToday}،  ${persianDayOfMonth}  ${persianMonthsOfYear[persianMonthName]}`;
  //   console.log(persianFormattedDate);

  const [isCustomerEditAddressField, setIsCustomerEditAddressField] =
    useState<boolean>(true);
  const [isNewAddressModalOpen, setIsNewAddressModalOpen] =
    useState<boolean>(false);
  const [isDeleteAddressModal, setIsDeleteAddressModal] =
    useState<boolean>(false);
  const [isEditCustomerAddressModal, setIsEditCustomerAddressModal] =
    useState<boolean>(false);

  return (
    <>
      <main className="relative grid grid-rows-1 overflow-hidden ">
        {isNewAddressModalOpen && (
          <NewAddressModal
            isOpen={isNewAddressModalOpen}
            setIsOpen={setIsNewAddressModalOpen}
          />
        )}

        {isDeleteAddressModal && (
          <DeleteAddressModal
            isOpen={isDeleteAddressModal}
            setIsOpen={setIsDeleteAddressModal}
          />
        )}

        {isEditCustomerAddressModal && (
          <EditCustomerAddressModal
            isOpen={isEditCustomerAddressModal}
            setIsOpen={setIsEditCustomerAddressModal}
          />
        )}

        <header className="h-32 w-full shadow-md relative flex justify-center items-center">
          <div className="flex h-2 w-[50%] absolute bottom-0">
            <div className="w-1/2 h-full bg-gray-200 relative">
              <div className="w-8 h-8 bg-mainRed rounded-full absolute -right-4 -bottom-3"></div>
              <h1 className="absolute -right-10 bottom-10 text-mainRed font-medium text-sm">
                اطلاعات ارسال
              </h1>
            </div>

            <div className="w-1/2 h-full bg-gray-200 relative">
              <div className="w-8 h-8 bg-gray-300 rounded-full absolute -bottom-3 -right-4"></div>
              <h1 className="absolute -right-5 bottom-10 text-gray-600 font-medium text-sm">
                پرداخت
              </h1>

              <div className="w-8 h-8 bg-gray-300 rounded-full absolute -left-4 -bottom-3"></div>
              <h1 className="absolute -left-16 bottom-10 text-gray-600 font-medium text-sm">
                اتمام خرید و ارسال
              </h1>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-[3fr_1fr] max-lg:grid-cols-1">
          <section className="grid grid-cols-1 auto-rows-auto gap-y-0">
            {/* row1 */}
            <section>
              {/* Flex container for Image and H1 */}
              <div className="flex items-center gap-5 mt-8">
                <Image
                  src="/imgs/title-circles.png"
                  alt="O"
                  width={30}
                  height={30}
                />
                <h1 className="text-md text-gray-500 font-medium mb-5">
                  انتخاب آدرس تحویل سفارش
                </h1>
              </div>
              <div className="w-full ml-4 border rounded-xl">
                {isCustomerEditAddressField && (
                  <div className=" grid grid-cols-[1fr_10fr]">
                    <div className=" grid justify-center items-center">
                      <div className="bg-mainRed w-1 h-full grid justify-center items-center">
                        <div className="border-mainRed border-2 w-12 h-12 rounded-full bg-[#f3feff] grid items-center justify-center">
                          <span className="text-mainRed text-2xl">
                            <GoCheck />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-[auto_auto] max-sm:grid-cols-1 max-sm:grid-rows-1">
                      <ul className="text-gray-500 p-8 max-sm:p-4 pr-5 max-sm:text-sm">
                        <li className="text-sm flex items-center gap-x-2 pb-3">
                          گیرنده: جلال بهرامی راد
                          <button className="text-mainRed border-b text-xs border-dashed border-mainRed">
                            اصلاح این آدرس
                          </button>
                        </li>
                        <li className="text-md p-1">
                          شماره تماس: ۰۹۰۳۰۸۱۳۷۴۲{" "}
                          <span className="max-sm:block">
                            | کد پستی: ۹۹۹۹۹۹۹۹۹۹
                          </span>
                        </li>

                        <li className="text-sm p-1">
                          استان خراسان شمالی ، ‌شهر بجنورد ، خراسان شمالی-بجنورد
                        </li>
                      </ul>

                      <button
                        className="bg-gray-100 text-gray-500 px-3 py-1 h-9 m-4 w-32 rounded-xl text-sm justify-self-end"
                        onClick={() =>
                          setIsCustomerEditAddressField((prev) => !prev)
                        }
                      >
                        تغییر آدرس ارسال
                      </button>
                    </div>
                  </div>
                )}

                {!isCustomerEditAddressField && (
                  <section className="grid grid-rows-3 pb-6">
                    <section>
                      <section className="grid grid-rows-1 grid-cols-[10fr_1fr] m-9 max-sm:m-5">
                        <h1 className="font-bold">
                          آدرس مورد نظر خود را جهت تحویل انتخاب فرمایید:
                        </h1>
                        <button
                          className="w-7 h-7 border-2 border-gray-500 rounded-full grid justify-self-end justify-center items-center text-gray-500"
                          onClick={() => setIsCustomerEditAddressField(true)}
                        >
                          <RxCross1 />
                        </button>
                      </section>
                      <button
                        className="w-[94%] max-sm:w-[98%] rounded-2xl h-24 border-4 border-dashed border-gray-400 grid items-center justify-self-center justify-center"
                        onClick={() => {
                          setIsNewAddressModalOpen(true);
                        }}
                      >
                        <h1 className="text-gray-400 font-extrabold text-3xl">
                          ایجاد آدرس جدید
                        </h1>
                      </button>
                    </section>
                    <CustomerAddressBox
                      isDeleteOpen={isDeleteAddressModal}
                      setIsDeleteOpen={setIsDeleteAddressModal}
                      isEditAddressOpen={isEditCustomerAddressModal}
                      setIsEditAddressOpen={setIsEditCustomerAddressModal}
                    />
                  </section>
                )}
              </div>
            </section>

            <DeliveryMethodSelection />
            <ProductsSliderForPayment />

            <section>
              <div className="w-full ml-4 mt-8 border-b-2 relative"></div>
              <PostDateSelection />
              <PostDeliveryDuration />

              <div className="flex items-center gap-5 mt-8">
                <Image
                  src="/imgs/title-circles.png"
                  alt="O"
                  width={30}
                  height={30}
                />
                <h1 className="text-md text-gray-500 font-medium mb-5">
                  صدور فاکتور
                </h1>
              </div>

              <div className="mr-7">
                <label className="flex items-center space-x-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    className="w-4 h-4 appearance-none checked:bg-mainRed bg-gray-300 border-gray-300 peer rounded-[3px]"
                  />

                  <BsCheckLg className="absolute pr-[2px] text-white text-sm hidden peer-checked:block pointer-events-none" />
                  <span className="text-gray-700 pr-3">
                    درخواست ارسال فاکتور خرید
                  </span>
                </label>
              </div>

              <section className="grid grid-cols-2 mt-16 mb-10">
                <div className="place-self-start">
                  <button
                    className="max-md:text-sm max-sm:font-medium text-mainRed font-semibold border-b border-dashed border-mainRed flex items-center gap-1"
                    onClick={() => router.push("")}
                  >
                    <MdKeyboardDoubleArrowRight className=" font-semibold" />
                    <span>بازگشت به سبد خرید</span>
                  </button>
                </div>

                <div className="place-self-end">
                  <button
                    className="max-md:text-sm max-sm:font-medium text-mainRed font-semibold border-b border-dashed border-mainRed flex items-center gap-1"
                    onClick={() =>
                      router.push("/shoppingAddressInfo/shoppingPayment")
                    }
                  >
                    <span>تایید و ادامه </span>
                    <MdKeyboardDoubleArrowLeft className=" font-semibold " />
                  </button>
                </div>
              </section>
            </section>
          </section>

          <TotalExpenseCard />
        </section>
      </main>
    </>
  );
};

export default ShoppingAddressInfo;
