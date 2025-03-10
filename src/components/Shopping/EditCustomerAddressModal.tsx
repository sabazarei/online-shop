"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";

interface EditCustomerAddressModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditCustomerAddressModal({
  isOpen,
  setIsOpen,
}: EditCustomerAddressModalProps) {
  interface IFormInput {
    firstName: string;
    lastName: string;
    age: number;
    fullName: string;
    customerPhoneNumber: string;
    province: string;
    city: string;
    addressDescription: string;
    costumerPostId: number;
  }

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return isOpen ? (
    <>
      {/* Dark background overlay inside the modal */}
      <section className="absolute inset-0 bg-black bg-opacity-15 z-0"></section>

      <section className="absolute top-60 lg:w-[50rem] w-[32rem] max-md:w-full z-10 justify-self-center bg-white rounded-xl grid grid-cols-1 grid-rows-[1fr-2fr] gap-y-6 ">
        <section className="flex justify-between">
          <h1 className="text-lg ml-4 mt-4 font-medium text-gray-800 pr-4 ">
            افزودن آدرس جدید
          </h1>
          <button
            className="w-10 h-10 ml-4 mt-4 bg-gray-100 rounded-full grid justify-self-end justify-center items-center text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <RxCross1 />
          </button>
        </section>
        {/* container of left side and right side */}
        <section className="grid grid-cols-2 grid-rows-1 max-lg:grid-cols-1 max-lg:grid-rows-2">
          {/* right side */}
          <section className="w-full h-[32rem] max-md:h-[40rem] max-md:w-full rounded-xl grid">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 grid-rows-[1fr-3fr]">
                {/* 4 inputs */}
                <section className="grid grid-cols-2 grid-rows-2 max-md:grid-cols-1 max-md:grid-rows-4 gap-x-2">
                  <div className="mr-6">
                    <p className="text-xs font-medium m-2">
                      نام و نام خانوادگی
                    </p>
                    <input
                      type="sring"
                      id="fullName"
                      placeholder="نام خود را وارد نمایید"
                      className="w-56 lg:w-40 max-md:w-[96%] h-10 py-1 px-2 placeholder:text-xs placeholder:font-medium border rounded-lg border-gray-300 "
                      {...register("fullName", {
                        required: "این فیلد اجباری است.",

                        minLength: {
                          value: 11,
                          message: "لطفا شماره خود را کامل وارد کنید.",
                        }, // Minimum value validation
                        maxLength: {
                          value: 11,
                          message: "تعداد ارقام زیاد است!",
                        }, // Maximum value validation
                      })}
                    />
                    <p className="text-red-700 text-xs"></p>
                  </div>

                  <div className="mr-2 max-md:mr-6">
                    <p className="text-xs font-medium m-2">شماره موبایل</p>
                    <input
                      type="string"
                      id=""
                      placeholder="09XXXXXXXXXX"
                      dir="ltr"
                      className="w-56 lg:w-40  max-md:w-[96%] h-10 py-1 px-2 placeholder:text-xs placeholder:font-medium placeholder:pr-12 border border-gray-300 rounded-lg "
                      {...register("customerPhoneNumber", {
                        required: "این فیلد اجباری است.",
                      })}
                    />
                    <p className="text-red-700 text-xs"></p>
                  </div>

                  <div className="mr-6">
                    <p className="text-xs font-medium m-2">استان</p>
                    <input
                      type="text"
                      id="province"
                      className="w-56 lg:w-40 max-md:w-[96%] h-10  py-1 px-2 border border-gray-300 rounded-lg "
                      {...register("province", {
                        required: "این فیلد اجباری است.",
                      })}
                    />
                    <p className="text-red-700 text-xs"></p>
                  </div>

                  <div className="mr-2 max-md:mr-6">
                    <p className="text-xs font-medium m-2">شهر</p>
                    <input
                      type="text"
                      id="province"
                      className="w-56 lg:w-40 max-md:w-[96%] h-10 py-1 px-2 border border-gray-300 rounded-lg "
                      {...register("province", {
                        required: "این فیلد اجباری است.",
                      })}
                    />
                    <p className="text-red-700 text-xs"></p>
                  </div>
                </section>

                <section>
                  {/* tozihat */}
                  <div className="m-6">
                    <p className="text-xs font-medium m-2">توضیحات</p>
                    <textarea
                      id="addressDescription"
                      placeholder="آدرس تحویل گیرنده را وارد کنید"
                      className="border border-gray-300 rounded-lg w-[100%] h-24 py-1 px-2 grid justify-self-center"
                      {...register("fullName", {
                        minLength: {
                          value: 5,
                          message: "لطفا شماره خود را کامل وارد کنید.",
                        }, // Minimum value validation
                        maxLength: {
                          value: 100,
                          message: "تعداد کلمات زیاد است!",
                        }, // Maximum value validation
                      })}
                    ></textarea>
                  </div>

                  <div className="m-6">
                    <p className="text-xs font-medium m-2">کد پستی</p>
                    <input
                      type="sring"
                      id="customerPostId"
                      placeholder="کد پستی را بدون خط تیره وارد کنید"
                      className="border border-gray-300 rounded-lg w-[100%] h-10 py-1 px-2 grid justify-self-center"
                      {...register("fullName", {
                        minLength: {
                          value: 5,
                          message: "لطفا شماره خود را کامل وارد کنید.",
                        }, // Minimum value validation
                        maxLength: {
                          value: 100,
                          message: "تعداد کلمات زیاد است!",
                        }, // Maximum value validation
                      })}
                    />
                    <p className="text-red-700 text-xs"></p>
                  </div>

                  <div className="grid grid-cols-2">
                    <button
                      type="submit"
                      className="mr-6 bg-blue-700  h-12 text-white rounded-xl shadow-2xl text-sm font-normal"
                    >
                      ثبت و ارسال به این آدرس
                    </button>
                    <button className="text-mainBlue border-b text-xs border-dashed border-mainBlue mx-12">
                      انصراف و بازگشت
                    </button>
                  </div>
                </section>
              </div>
            </form>
          </section>

          {/* left side */}
          <section className="w-full h-[32rem] max-md:w-full bg-gray-100 rounded-xl"></section>
        </section>{" "}
        {/* container of left side and right side */}
      </section>
    </>
  ) : null;
}

export default EditCustomerAddressModal;
