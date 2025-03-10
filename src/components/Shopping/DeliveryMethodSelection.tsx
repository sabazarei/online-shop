import Image from "next/image";
import { useState } from "react";


function DeliveryMethodSelection() {
  const [deliveryMethod, setDeliveryMethod] =
    useState<string>("normalDelivery");
  return (
    <section>
      {/* Flex container for Image and H1 */}
      <div className="flex items-center gap-5 mt-8">
        <Image src="/imgs/title-circles.png" alt="O" width={30} height={30} />
        <h1 className="text-md text-gray-500 font-medium mb-5">
          انتخاب نحوه ارسال
        </h1>
      </div>

      <div className="w-full h-20 ml-4 border-b-2 relative">
        <div className="flex items-center mb-2 mr-8">
          <label className="flex items-center cursor-pointer relative">
            <input
              id="default-radio-1"
              type="radio"
              value="normalDelivery"
              name="delivery-method"
              className="hidden"
              checked={deliveryMethod === "normalDelivery"}
              onChange={(e) => setDeliveryMethod(e.target.value)}
            />
            <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-100">
              <div
                className={`w-2 h-2  bg-gray-100 rounded-full ${
                  deliveryMethod === "normalDelivery"
                    ? "ring-4 ring-mainRed"
                    : ""
                }`}
              ></div>
            </div>
            <span className="ms-5 text-sm">عادی</span>
          </label>
        </div>

        <div className="flex items-center mb-2 mr-8">
          <label className="flex items-center cursor-pointer relative">
            <input
              id="default-radio-1"
              type="radio"
              value="fastDelivery"
              name="delivery-method"
              className="hidden"
              checked={deliveryMethod === "fastDelivery"}
              onChange={(e) => setDeliveryMethod(e.target.value)}
            />
            <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-100">
              <div
                className={`w-2 h-2  bg-gray-100 rounded-full ${
                  deliveryMethod === "fastDelivery" ? "ring-4 ring-mainRed" : ""
                }`}
              ></div>
            </div>
            <span className="ms-5 text-sm">
              سریع‌ (مرسوله‌ها در سریع‌ترین زمان ممکن ارسال می‌شوند)
            </span>
          </label>
        </div>
      </div>
    </section>
  );
}

export default DeliveryMethodSelection;
