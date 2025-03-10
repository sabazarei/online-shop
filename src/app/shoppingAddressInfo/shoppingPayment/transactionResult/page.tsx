"use client";

import React, { useState } from "react";
import "swiper/css";

import CompeletedTransaction from "@/components/Shopping/CompeletedTransaction";
import FailedTransaction from "@/components/Shopping/FailedTransaction";
import BestSellingProductsSection from "@/components/main-page/BestSellingProductsSection";

const TransactionResult = () => {
  // result of payment
  const [transactionResult] = useState<boolean>(true);

  return (
    <>
      <main className="relative grid grid-rows-1 overflow-hidden mb-14">
        <header className="h-24 w-full shadow-md relative flex justify-center items-center">
          <div className="flex h-2 w-[50%] absolute bottom-0">
            <div className="w-1/2 h-full bg-mainRed relative">
              <div className="w-8 h-8 bg-mainRed rounded-full absolute -right-4 -bottom-3"></div>
              <h1 className="absolute -right-10 bottom-10 text-mainRed font-medium text-sm">
                اطلاعات ارسال
              </h1>
            </div>

            <div className="w-1/2 h-full bg-mainRed relative">
              <div className="w-8 h-8 bg-mainRed rounded-full absolute -bottom-3 -right-4"></div>
              <h1 className="absolute -right-5 bottom-10 text-mainRed font-medium text-sm">
                پرداخت
              </h1>

              <div className="w-8 h-8 bg-mainRed rounded-full absolute -left-4 -bottom-3"></div>
              <h1 className="absolute -left-16 bottom-10 text-gray-600 font-medium text-sm">
                اتمام خرید و ارسال
              </h1>
            </div>
          </div>
        </header>
      
        
        {transactionResult && <CompeletedTransaction />}

        {!transactionResult &&   <FailedTransaction />}
        

      </main>
      <BestSellingProductsSection />
    </>
  );
};

export default TransactionResult;
