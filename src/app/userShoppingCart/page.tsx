import React from "react";
import CartTabs from "@/components/CartTabs";
import CostCart from "@/components/CostCart";
import Image from "next/image";
import EmptyShoppingCart from "@/components/EmptyShoppingCart";
import { initCustomTraceSubscriber } from "next/dist/build/swc/generated-native";

const UserShoppingCartPage = () => {
  //redux
  const initialProductsInfo = [];

  if (initialProductsInfo.length === 1) {
    return <EmptyShoppingCart />;
  }

  return (
    <>
      <div className="grid lg:grid-cols-6 grid-cols-1 m-4 ">
        <div className=" col-span-4  ">
          <CartTabs />
        </div>

        <div className="flex flex-col justify-center items-center  lg:col-span-2   ">
          <div className="pt-20 max-sm:pt-12">
            <CostCart />
          </div>

          <div className=" mt-9">
            <div className="flex mb-3 items-center">
              <div>
                <Image
                  width={25}
                  height={25}
                  src={"/imgs/return-policy.svg"}
                  alt="return"
                />
              </div>
              <p className="mr-2 font-bold text-[13px]">هفت روز ضمانت تعویض</p>
            </div>
            <div className="flex mb-3 items-center">
              <div>
                <Image
                  width={25}
                  height={25}
                  src={"/imgs/payment-terms.svg"}
                  alt="payment"
                />
              </div>
              <p className="mr-2 font-bold text-[13px]">
                {" "}
                پرداخت در محل با کارت بانکی
              </p>
            </div>
            <div className="flex mb-3 items-center">
              <div>
                <Image
                  width={25}
                  height={25}
                  src={"/imgs/delivery.svg"}
                  alt="delivery"
                />
              </div>
              <p className="mr-2 font-bold text-[13px] "> تحویل اکسپرس</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserShoppingCartPage;
