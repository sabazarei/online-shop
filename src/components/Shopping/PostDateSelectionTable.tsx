'use client'
import { useState } from "react";

function PostDateSelection(){
    const [deliveryTime, setDeliveryTime] =
      useState<string>("deliveryInMorning");
    return(
        <div className="w-[93%] mr-6 mt-7 relative overflow-x-auto border-b-[1px] border-x-[1px] rounded-br-2xl rounded-bl-2xl">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
          <thead className="text-gray-700 bg-gray-100 font-normal">
            <tr>
              <th className="w-32 px-6 py-4 text-center border-t-4 border-[#39e0cc]">
                <div className="">
                  <h1> سه شنبه </h1>
                  <span className="text-gray-300 font-medium">
                    26 شهریور
                  </span>
                </div>
              </th>
              <th className="w-32 px-6 py-4 border-[1px] text-center ">
                <h1> سه شنبه </h1>
                <span className="text-gray-300 font-medium">
                  26 شهریور
                </span>
              </th>
              <th className="w-32 px-6 py-4 border-[1px] text-center text-gray-300">
                <h1> سه شنبه </h1>
                <span className="text-gray-300 font-medium">
                  26 شهریور
                </span>
              </th>
              <th className="w-32 px-6 py-4 border-[1px] text-center">
                {/* <h1> سه شنبه </h1>
                <span className="text-gray-300 font-medium">
                  26 شهریور
                </span> */}
              </th>
              <th className="w-32 px-6 py-3 border-[1px] text-center">
                {/* <h1> سه شنبه </h1>
                <span className="text-gray-300 font-medium">
                  26 شهریور
                </span> */}
              </th>
              <th className="w-32 px-6 py-3 border-[1px] text-center">
                {/* <h1> سه شنبه </h1>
                <span className="text-gray-300 font-medium">
                  26 شهریور
                </span> */}
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="w-32 py-4">
                <div className="flex flex-col space-y-2">

                  <div className="flex items-center mb-2 mr-4">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="deliveryInMorning"
                      name="delivery-time"
                      className="hidden"
                      checked={deliveryTime === "deliveryInMorning"}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                    />
                    <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-100">
                      <div
                        className={`w-2 h-2  bg-gray-100 rounded-full ${
                          deliveryTime === "deliveryInMorning"
                            ? "ring-4 ring-mainRed"
                            : ""
                        }`}
                      ></div>
                    </div>
                    <span className="ms-5 text-sm">    ساعت 9 تا 13 </span>
                  </label>
                </div>

                <div className="flex items-center mb-2 mr-4">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="deliveryAtNoon"
                      name="delivery-time"
                      className="hidden"
                      checked={deliveryTime === "deliveryAtNoon"}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                    />
                    <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-100">
                      <div
                        className={`w-2 h-2  bg-gray-100 rounded-full ${
                          deliveryTime === "deliveryAtNoon"
                            ? "ring-4 ring-mainRed"
                            : ""
                        }`}
                      ></div>
                    </div>
                    <span className="ms-5 text-sm">
                    ساعت 13 تا 17
                    </span>
                  </label>
                </div>

                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default PostDateSelection