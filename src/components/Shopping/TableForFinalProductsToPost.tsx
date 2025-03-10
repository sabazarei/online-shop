import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const productCartList: ProductCartType[] = [
  {
    cartTitle: "کت مردانه",
    cartImg: "/imgs/product-1.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartImg: "/imgs/013.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartImg: "/imgs/product-1.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartImg: "/imgs/013.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartImg: "/imgs/product-1.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartImg: "/imgs/013.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartImg: "/imgs/product-1.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartImg: "/imgs/013.jpg",
  },
];
function TableForFinalProductsToPost() {
  const [isBasketItemsOpen, setIsBasketItemsOpen] = useState<boolean>(false);
  return (
    <div className="w-[96%] grid grid-cols-1 grid-rows-[auto_1fr]">
      <section className="h-28 border rounded-md mx-3 grid grid-cols-[1fr_2fr_1fr_1fr_0.5fr]">
        <div className="grid grid-cols-1 grid-rows-2 place-items-center">
          <h1 className="text-sm text-gray-500 font-extrabold max-sm:font-semibold max-sm:text-[10px] max-sm:px-4">
            مرسوله 1 از 1
          </h1>
          <span className="text-sm max-sm:text-xs -mt-8 max-sm:-mt-10 text-gray-500 max-sm:text-[10px] max-sm:pb-5">
            {" "}
            (2کالا){" "}
          </span>
        </div>

        <div className="grid grid-cols-1 grid-rows-2 place-items-center ">
          <h1 className="text-sm text-gray-500 font-extrabold max-sm:font-semibold max-sm:text-[10px] max-sm:px-4 ">
            نحوه ارسال
          </h1>
          <span className="text-sm max-sm:text-xs -mt-8  text-gray-500 max-sm:text-[10px] max-sm:pb-5 max-sm:px-3">
            {" "}
            پست پیشتاز با ظرفیت اختصاصی برای دیجی‌کالا{" "}
          </span>
        </div>

        <div className="grid grid-cols-1 grid-rows-2 place-items-center">
          <h1 className="text-sm text-gray-500 font-extrabold max-sm:font-semibold max-sm:text-[10px] max-sm:px-2">
            ارسال از{" "}
          </h1>
          <span className="text-sm max-sm:text-xs -mt-8 max-sm:-mt-10 text-gray-500 max-sm:text-[10px] max-sm:pb-5">
            {" "}
            دو روز کاری{" "}
          </span>
        </div>

        <div className="grid grid-cols-1 grid-rows-2 place-items-center">
          <h1 className="text-sm text-gray-500 font-extrabold max-sm:font-semibold max-sm:text-[10px] max-sm:p-4">
            هزینه ارسال
          </h1>
          <span className="text-sm max-sm:text-xs -mt-8 max-sm:-mt-10 text-gray-500 max-sm:text-[10px] max-sm:pb-5">
            {" "}
            رایگان{" "}
          </span>
        </div>

        <button
          className="text-2xl text-gray-700 flex justify-center items-center"
          onClick={() => {
            setIsBasketItemsOpen((prev) => !prev);
          }}
        >
          <IoIosArrowDown className="max-sm:text-sm" />
        </button>
      </section>

      {/* second row */}

      <div className="w-full h-auto ml-4 rounded-x">
        {isBasketItemsOpen && (
          <div className="p-4 rounded-md mt-2 flex flex-wrap gap-x-16 max-lg:justify-center">
            {productCartList.map((productImage, index) => (
              <div key={index} className="p-2 rounded-md">
                <Image
                  alt="amazing"
                  width={100}
                  height={100}
                  src={productImage.cartImg}
                  className="h-auto max-w-full"
                />
                <span className="grid justify-self-center text-xs">
                  {productImage.cartTitle}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TableForFinalProductsToPost;
