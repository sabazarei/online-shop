"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

interface NewAddressModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function NewAddressModal({ isOpen, setIsOpen }: NewAddressModalProps) {
  interface IFormInput {
    fullName: string;
    customerPhoneNumber: string;
    province: string;
    city: string;
    addressDescription: string;
    customerPostId: number;
  }

  // Default location (Tehran)
  const defaultPosition: [number, number] = [35.6892, 51.389];
  const [selectedPosition, setSelectedPosition] =
    useState<[number, number]>(defaultPosition);

  // Custom Leaflet Marker Icon
  const customIcon = new L.Icon({
    iconUrl: markerIcon as unknown as string,
    shadowUrl: markerShadow as unknown as string,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Form Data:", data);
    console.log("Selected Position:", selectedPosition);
  };

  // Map component that interacts with the map instance
  function MapInteraction() {
    const map = useMap(); // Access the Leaflet map instance

    // Set up event listener on map click
    map.on("click", (e: any) => {
      setSelectedPosition([e.latlng.lat, e.latlng.lng]);
    });

    return null; // This component does not render anything visually
  }

  return isOpen ? (
    <>
      <section className="fixed inset-0 bg-black bg-opacity-15 z-5"></section>
      <section className="lg:w-[50rem] w-[32rem] max-md:w-full my-10 z-10 absolute top-1 justify-self-center bg-white rounded-xl grid grid-cols-1 grid-rows-[1fr-2fr] gap-y-6 ">
        <section className="flex justify-between">
          <h1 className="text-lg ml-4 mt-4 font-medium text-gray-800 pr-4">
            افزودن آدرس جدید
          </h1>
          <button
            className="w-10 h-10 ml-4 mt-4 bg-gray-100 rounded-full grid justify-self-end justify-center items-center text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <RxCross1 />
          </button>
        </section>

        {/* Right Side: Form */}
        <section className="grid grid-cols-2 grid-rows-1 max-lg:grid-cols-1 max-lg:grid-rows-2">
          <section className="w-full h-[32rem] max-md:w-full rounded-xl grid">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 grid-rows-[1fr-3fr]">
                {/* Form fields */}
                <section className="grid grid-cols-2 grid-rows-2 max-md:grid-cols-1 max-md:grid-rows-4 gap-x-2">
                  <div className="mr-6">
                    <p className="text-xs font-medium m-2">
                      نام و نام خانوادگی
                    </p>
                    <input
                      type="text"
                      placeholder="نام خود را وارد نمایید"
                      className="w-56 lg:w-40 max-md:w-[96%] border rounded-lg border-gray-300 h-10 py-1 px-2"
                      {...register("fullName", {
                        required: "این فیلد اجباری است.",
                      })}
                    />
                  </div>

                  <div className="mr-2 max-md:mr-6">
                    <p className="text-xs font-medium m-2">شماره موبایل</p>
                    <input
                      type="text"
                      placeholder="09XXXXXXXXXX"
                      dir="ltr"
                      className="w-56 lg:w-40 max-md:w-[96%] border border-gray-300 rounded-lg h-10 py-1 px-2"
                      {...register("customerPhoneNumber", {
                        required: "این فیلد اجباری است.",
                      })}
                    />
                  </div>

                  <div className="mr-6">
                    <p className="text-xs font-medium m-2">استان</p>
                    <input
                      type="text"
                      className="w-56 lg:w-40 max-md:w-[96%] border border-gray-300 rounded-lg h-10 py-1 px-2"
                      {...register("province", {
                        required: "این فیلد اجباری است.",
                      })}
                    />
                  </div>

                  <div className="mr-2 max-md:mr-6">
                    <p className="text-xs font-medium m-2">شهر</p>
                    <input
                      type="text"
                      className="w-56 lg:w-40 max-md:w-[96%] border border-gray-300 rounded-lg h-10 py-1 px-2"
                      {...register("city", {
                        required: "این فیلد اجباری است.",
                      })}
                    />
                  </div>
                </section>

                {/* توضیحات */}
                <div className="m-6">
                  <p className="text-xs font-medium m-2">توضیحات</p>
                  <textarea
                    placeholder="آدرس تحویل گیرنده را وارد کنید"
                    className="border border-gray-300 rounded-lg w-full h-24 py-1 px-2"
                    {...register("addressDescription")}
                  />
                </div>

                {/* کد پستی */}
                <div className="m-6">
                  <p className="text-xs font-medium m-2">کد پستی</p>
                  <input
                    type="number"
                    placeholder="کد پستی را بدون خط تیره وارد کنید"
                    className="border border-gray-300 rounded-lg w-full h-10 py-1 px-2"
                    {...register("customerPostId")}
                  />
                </div>

                {/* دکمه‌ها */}
                <div className="grid grid-cols-2">
                  <button
                    type="submit"
                    className="mr-6 bg-blue-700 h-12 text-white rounded-xl"
                  >
                    ثبت و ارسال به این آدرس
                  </button>
                  <button className="text-mainBlue border-b text-xs border-dashed border-mainBlue mx-12">
                    انصراف و بازگشت
                  </button>
                </div>
              </div>
            </form>
          </section>

          {/* Left Side: Map */}
          <section className="w-full h-[32rem] max-md:w-full rounded-xl p-5">
            <MapContainer
              center={selectedPosition}
              zoom={12}
              style={{ height: "100%", width: "100%", borderRadius: "12px" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={selectedPosition} icon={customIcon}>
                <Popup>مکان انتخاب شده</Popup>
              </Marker>
              <MapInteraction />{" "}
              {/* Use the MapInteraction component to set up click event */}
            </MapContainer>
          </section>
        </section>
      </section>
    </>
  ) : null;
}

export default NewAddressModal;
