import { useState } from "react";
import Image from "next/image";
function PostDeliveryDuration() {
  const [deliveryDuration1, setDeliveryDuration1] =
    useState<string>("normalDelivery");
  return (
    <div className="w-full h-auto ml-4 grid grid-col-1 grid-rows-2">
      {/* duration1 */}
      <div className="flex items-center p-5">
        <label className="flex items-center cursor-pointer relative">
          <input
            id="default-radio-1"
            type="radio"
            value="deliveryDuration1"
            name="delivery-Duration"
            className="hidden"
            checked={deliveryDuration1 === "deliveryDuration1"}
            onChange={(e) => setDeliveryDuration1(e.target.value)}
          />
          <div className="ml-2 w-4 h-4 flex items-center justify-center rounded-full bg-gray-100">
            <div
              className={`w-2 h-2  bg-gray-100 rounded-full ${
                deliveryDuration1 === "deliveryDuration1"
                  ? "ring-4 ring-mainRed"
                  : ""
              }`}
            ></div>
          </div>

          <Image src="/imgs/d86ea8ec.svg" alt="." width={50} height={50} />
          <div className="grid grid-cols-1 grid-rows-2">
            <span className="ms-5 text-bold">
              بازه تحویل سفارش: زمان تقریبی تحویل از ۱۳ خرداد تا ۲۰ خرداد
            </span>
            <span className="ms-5 mt-1 text-sm font-medium text-gray-400">
              شیوه ارسال : پست پیشتاز با ظرفیت اختصاصی برای دیجی کالا هزینه|
              ارسال: رایگان
            </span>
          </div>
        </label>
      </div>

      {/* duration2 */}
      <div className="flex items-center p-5">
        <label className="flex items-center cursor-pointer relative">
          <input
            id="default-radio-1"
            type="radio"
            value="deliveryDuration2"
            name="delivery-duration"
            className="hidden"
            checked={deliveryDuration1 === "deliveryDuration2"}
            onChange={(e) => setDeliveryDuration1(e.target.value)}
          />
          <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-100">
            <div
              className={`w-2 h-2  bg-gray-100 rounded-full ${
                deliveryDuration1 === "deliveryDuration2"
                  ? "ring-4 ring-mainRed"
                  : ""
              }`}
            ></div>
          </div>
          <Image src="/imgs/d86ea8ec.svg" alt="." width={50} height={50} />
          <div className="grid grid-cols-1 grid-rows-2">
            <span className="ms-5 text-bold">
              بازه تحویل سفارش: زمان تقریبی تحویل از ۱۳ خرداد تا ۲۰ خرداد
            </span>
            <span className="ms-5 mt-1 text-sm font-medium text-gray-400">
              شیوه ارسال : پست پیشتاز با ظرفیت اختصاصی برای دیجی کالا هزینه|
              ارسال: رایگان
            </span>
          </div>
        </label>
      </div>
    </div>
  );
}

export default PostDeliveryDuration;
