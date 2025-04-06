"use client";
import RedAnimatedButton from "@/components/global/RedAnimatedButton";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";

const EditProfilePage = () => {
  type FormValuesType = {
    firstName: string;
    idNumber: number;
    email: string;
    lastName: string;
    phoneNumber: number;
    profileImage: File | null;
    withoutIdNumber: boolean;
    subscribeNewsletter: boolean;
  };

  const { register, handleSubmit, reset } = useForm<FormValuesType>({
    defaultValues: {},
  });

  const [imgFile, setImgFile] = useState<File | null>(null);
  // const { errors } = formState;

  // const watchedFields = watch();
  const onSubmit: SubmitHandler<FormValuesType> = async (data) => {
    const isEmpty = Object.values(data).every((value) => {
      return (
        value === "" || value === null || value === undefined || value === false
      );
    });

    if (isEmpty) {
      toast.error("لطفا حداقل یک فیلد را پر کنید.");
      return;
    } else {
      console.log(data, "form-data...");
      console.log(imgFile);
    }

    reset();
    setImgFile(null); // Reset image state
    reset({ profileImage: null }); // Reset the form value for profileImage
  };
  function handleUploadFile(file: File) {
    const maxSize = 1 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error(
        "حجم عکس انتخاب شده بیش از حد مجاز است. مقدار حجم مجاز 1 مگابایت است"
      );
      return;
    }
    setImgFile(file);
    // const urlImage = URL.createObjectURL(file);
  }
  return (
    <>
      <div className="md:col-span-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2">
            <div>
              <div className="m-4">
                <p className="font-semibold text-black m-2">نام</p>
                <input
                  type="text"
                  id="firstName"
                  className="border rounded-lg w-full h-11 py-1 px-2"
                  {...register("firstName", {
                    // required: "این فیلد اجباری است.",
                  })}
                />
                {/* <p className="text-mainRed text-xs">
                  {errors?.firstName?.message?.toString()}
                </p> */}
              </div>
              <div className="m-4">
                <p className="font-semibold text-black m-2">کد ملی</p>
                <input
                  type="number"
                  id="idNumber"
                  className="border rounded-lg w-full h-11 py-1 px-2"
                  {...register("idNumber", {
                    // required: "این فیلد اجباری است.",
                  })}
                />
                {/* <p className="text-mainRed text-xs">
                  {errors?.firstName?.message?.toString()}
                </p> */}
              </div>
              <div className="m-4">
                <p className="font-semibold text-black m-2">آدرس ایمیل</p>
                <input
                  type="email"
                  id="email"
                  className="border rounded-lg w-full h-11 py-1 px-2"
                  {...register("email", {
                    // required: "این فیلد اجباری است.",
                  })}
                />
                {/* <p className="text-mainRed text-xs">
                  {errors?.email?.message?.toString()}
                </p> */}
              </div>
            </div>

            <div>
              <div className="m-4">
                <p className="font-semibold text-black m-2">نام خانوادگی</p>
                <input
                  type="text"
                  id="lastName"
                  className="border rounded-lg w-full h-11 py-1 px-2"
                  {...register("lastName", {
                    // required: "این فیلد اجباری است.",
                  })}
                />
                {/* <p className="text-mainRed text-xs">
                  {errors?.lastName?.message?.toString()}
                </p> */}
              </div>
              <div className="m-4">
                <p className="font-semibold text-black m-2">شماره موبایل</p>
                <input
                  type="number"
                  id="phoneNumber"
                  className="border rounded-lg w-full h-11 py-1 px-2"
                  {...register("phoneNumber", {
                    // required: "این فیلد اجباری است.",
                  })}
                />
                {/* <p className="text-mainRed text-xs">
                  {errors?.phoneNumber?.message?.toString()}
                </p> */}
              </div>
              <div className="m-4">
                <p className="font-semibold text-black m-2">عکس پروفایل</p>

                <div className="w-full border rounded-lg h-11 py-1 px-2 relative ">
                  {imgFile ? (
                    <div className="absolute text-sm left-16 top-0 h-11 py-1 px-2 flex items-center justify-center">
                      {imgFile.name}
                    </div> // Show selected file name
                  ) : (
                    <span className="absolute h-11 py-1 top-0 text-sm flex items-center">
                      انتخاب عکس
                    </span>
                  )}
                  <label
                    htmlFor="upload"
                    className="flex justify-center items-center cursor-pointer absolute left-0 top-0 border w-16 h-11 rounded-l-lg bg-gray-200 hover:bg-gray-200 transition-all text-gray-700"
                  >
                    <span className="text-sm">بارگذاری</span>
                  </label>
                  <input
                    accept="image/jpg, image/jpeg, image/png, image/webp "
                    className="hidden"
                    type="file"
                    id="upload"
                    {...register("profileImage", {
                      onChange(event: React.ChangeEvent<HTMLInputElement>) {
                        if (
                          event.target.files &&
                          event.target.files.length > 0
                        ) {
                          handleUploadFile(event.target.files[0]);
                        }
                      },
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="m-4">
            <p className="font-semibold text-black m-2">شماره کارت</p>
            <input
              type="number"
              id="phoneNumber"
              className="border rounded-lg w-full h-11 py-1 px-2"
              {...register("phoneNumber", {
                // required: "این فیلد اجباری است.",
              })}
            />
            {/* <p className="text-mainRed text-xs">
              {errors?.phoneNumber?.message?.toString()}
            </p> */}
          </div>
          {/* <button
            type="submit"
            // bg-gradient-to-b from-[#63ed7a] to-[#a8f5b4]
            className={`m-4 bg-[#63ed7a] border-[#63ed7a] w-[97px] h-10 text-white rounded-lg text-sm  shadow-[0_2px_6px_#a8f5b4]
                `}
          >
            بررسی اطلاعات
          </button> */}

          <div className="mt-10">
            <div className="m-4 flex items-center">
              <input
                type="checkbox"
                id="withoutIdNumber"
                className="mr-2"
                {...register("withoutIdNumber")}
              />
              <label htmlFor="subscribeNewsletter" className="mr-3 text-sm">
                تبعه خارجی فاقد کد ملی هستم
              </label>
            </div>
            <div className="m-4 flex items-center">
              <input
                type="checkbox"
                id="subscribeNewsletter"
                className="mr-2"
                {...register("subscribeNewsletter")}
              />
              <label htmlFor="subscribeNewsletter" className="mr-3 text-sm">
                اشتراک در خبرنامه دیدیکالا
              </label>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <RedAnimatedButton
              type="submit"
              className="h-11"
              text="ثبت اطلاعات کاربری"
              icon={<CgProfile className="text-xl" />}
            />
            <button
              type="reset"
              className="bg-gray-500 text-white w-16 h-11 rounded-lg"
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfilePage;
