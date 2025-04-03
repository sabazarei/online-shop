"use client";
import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";
import { SlLock } from "react-icons/sl";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TfiEmail } from "react-icons/tfi";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import FormFooter from "@/components/FormFooter";


const Login = () => {
  interface loginValueInputs {
    email: string;
    password: string;
  }

  const { register, handleSubmit, formState } = useForm<loginValueInputs>();

  const { errors } = formState;

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [enteredPassword, setEnteredPassword] = useState(false);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(e.target.value.length > 0);
  };

  const onSubmit: SubmitHandler<loginValueInputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <main>
        <div className="">
          <div className="flex flex-col justify-center items-center mt-2">
            {/* login logo */}
            <div className="relative w-32 h-9">
              <Link href="http://localhost:3000/">
                <Image fill src={"/imgs/logo.png"} alt="logo" />
              </Link>
            </div>
            {/* login form */}
            <div className="mt-4 border border-[#dee2e6] md:w-[420px] sm:w-[550px] max-sm:w-full pt-4 rounded-lg ">
              <div>
                {/* ورود */}
                <div className="flex items-center px-4 mt-2 ">
                  <div className="relative w-6 h-[14px] ">
                    <Image fill src={"/imgs/title-circles.png"} alt="circles" />
                  </div>
                  <h2 className="text-xl text-[#6f7479] font-bold pr-4 ">
                    ورود
                  </h2>
                </div>
                {/* login form inputs */}
                <div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    action=""
                    className="flex-col space-y-5 p-5 max-w-[440px] mx-auto"
                  >
                    <div className="relative mt-4">
                      <label
                        htmlFor=""
                        className="text-[#000] font-bold text-base  "
                      >
                        ایمیل
                      </label>
                      <input
                        type="email"
                        className="border border-[#eee] pr-2 w-full h-11 mt-3  rounded-lg focus:outline-none"
                        placeholder="ایمیل خود را وارد نمایید"
                        {...register("email", {
                          required: "این فیلد اجباری است.",
                        })}
                      />
                      <div className="absolute inset-y-12 text-lg text-[#979797] left-0 pl-3 ">
                        <TfiEmail />
                      </div>
                      <p className="text-red-600 text-sm pt-1">
                        {errors?.email?.message}
                      </p>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor=""
                        className="text-[#000] font-bold text-base  "
                      >
                        رمز عبور
                      </label>
                      <input
                        type={showPassword === false ? "password" : "text"}
                        className="border border-[#eee] w-full h-11 pr-2 mt-3 rounded-lg focus:outline-none"
                        placeholder="رمز عبور خود را وارد نمایید"
                        {...register("password", {
                          required: "این فیلد اجباری است.",
                          minLength: {
                            message: "حداقل تعداد کاراکتر 8 می باشد.",
                            value: 8,
                          },
                          maxLength: {
                            message: "حد اکثر تعداد کاراکتر 20 می باشد.",
                            value: 20,
                          },
                          onChange:(e)=>{handlePasswordChange(e)}
                        })}
                      />
                      <div className="absolute  inset-y-12 text-lg text-[#979797] left-0 pl-3">
                        {!enteredPassword ? (
                          <SlLock className=" text-[#979797]" />
                        ) : (
                          <div
                            onClick={togglePasswordVisibility}
                            className="cursor-pointer"
                          >
                            {showPassword ? (
                              <AiFillEyeInvisible />
                            ) : (
                              <AiFillEye />
                            )}
                          </div>
                        )}
                      </div>
                      <p className="text-red-600 text-sm pt-1">
                        {errors?.password?.message}
                      </p>
                    </div>
                    <div className="w-full">
                      <label className="flex items-center cursor-pointer relative">
                        <input
                          type="checkbox"
                          className="w-4 h-4 appearance-none checked:bg-mainRed bg-gray-300 border-mainBlue peer rounded-[3px]"
                        />

                        <BsCheckLg className="absolute pr-[2px] text-white text-sm hidden peer-checked:block pointer-events-none" />
                        <span className="pr-2 text-sm text-gray-800">
                          مرا به خاطر بسپار
                        </span>
                      </label>
                    </div>
                    <div>
                      <button className="w-full p-3 h-10 relative flex items-center justify-center rounded-xl bg-mainRed overflow-hidden md:flex group">
                        {/* Expanding Light Red Background */}
                        <div className="absolute right-0 top-0 h-full w-10 bg-red-300 rounded-l-2xl group-hover:rounded-l-[10px] transition-all duration-300 ease-in-out group-hover:w-full"></div>

                        {/* Cart Icon (Positioned on top of background) */}
                        <div className="absolute right-0 top-0 h-full w-10 grid place-items-center text-white z-10">
                          <HiMiniArrowRightStartOnRectangle className="text-xl" />
                        </div>

                        {/* Button Text */}
                        <div className="flex-grow flex justify-center items-center text-white pr-2 z-10">
                          ورود به دیدیکالا
                        </div>
                      </button>
                    </div>
                  </form>
                  <div className="mt-3 bg-[#61e00014] text-center py-6">
                    <div>
                      <span className="font-bold text-sm">
                        کاربر جدید هستید؟
                      </span>
                      <Link
                        className="text-mainRed border-b border-dashed border-mainRed font-bold mr-3 pb-1 text-sm"
                        href={"#"}
                      >
                        ثبت نام در دیدیکالا
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* login footer */}
            <FormFooter/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
