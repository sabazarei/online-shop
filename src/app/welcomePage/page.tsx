"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { useForm, SubmitHandler, FormState } from "react-hook-form";
import FormFooter from "@/components/FormFooter";


const WelcomePage = () => {
  interface RegisterValueInputs {
    userName:string;
    phoneNumber:number;
    email: string;
    password: string;
  }

  const { register, handleSubmit, formState } = useForm<RegisterValueInputs>();

  const { errors } = formState;

  const onSubmit: SubmitHandler<RegisterValueInputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <main>
        <div className="">
          <div className="flex flex-col justify-center items-center mt-2">
            {/* welcome logo */}
            <div className="relative w-32 h-9">
              <Link href="http://localhost:3000/">
                <Image fill src={"/imgs/logo.png"} alt="logo" />
              </Link>
            </div>
            {/* welcome form */}
            <div className="mt-4 border border-[#dee2e6] md:w-[420px] sm:w-[550px] max-sm:w-full pt-4 rounded-lg ">
              <div>
                {/* خوشامدگویی */}
                <div className="flex items-center px-4 mt-2 ">
                  <div className="relative w-6 h-[14px] ">
                    <Image fill src={"/imgs/title-circles.png"} alt="circles" />
                  </div>
                  <h2 className="text-xl max-sm:text-lg text-[#6f7479] font-bold pr-4 ">
                    به دیدیکالا خوش آمدید
                  </h2>
                </div>
                
                <div className="flex justify-center items-center mt-6 mb-3">
                <FaRegCircleUser className=" font-thin bg-[#edf0f5] text-[#ABABAB] rounded-[500px] w-24 h-24 p-6 "/>
                </div>
                
                    <h5 className="text-center font-bold text-xl max-sm:text-lg">حساب کاربری شما در دیدیکالا ساخته شد</h5>
                
                {/* login form inputs */}
                <div>
                  <div className=" rounded-lg py-4 px-5 bg-[#f9f7d8] border border-[#f6e8a1] mt-4 mx-6 mb-3 text-justify">
                    <p className="text-sm text-[#a37731]">
                    اکنون می‌توانید به صفحه‌ای که در آن بودید بازگردید و یا با تکمیل اطلاعات حساب کاربری خود به کلیه امکانات و سرویس‌های تاپ کالا و سرویس‌های وابسته به آن دسترسی داشته باشید
                    </p>
                  </div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    action=""
                    className="flex-col space-y-5 p-5 max-w-[440px] mx-auto"
                  >
                 
                    <div className="flex items-center justify-center">
                      <button className="w-52 p-3 h-10 relative flex items-center justify-center rounded-xl bg-mainRed overflow-hidden md:flex group">
                        {/* Expanding Light Red Background */}
                        <div className="absolute right-0 top-0 h-full w-10 bg-red-300 rounded-l-2xl group-hover:rounded-l-[10px] transition-all duration-300 ease-in-out group-hover:w-full"></div>

                        {/* Cart Icon (Positioned on top of background) */}
                        <div className="absolute right-0 top-0 h-full w-10 grid place-items-center text-white z-10">
                          <FaRegCircleUser className="text-xl" />
                        </div>

                        {/* Button Text */}
                        <div className="flex-grow flex justify-center items-center text-white pr-8 z-10">
                            تکمیل حساب کاربری
                        </div>
                      </button>
                    </div>
                  </form>
                  <div className="mt-3 bg-[#61e00014] text-center py-6">
                    <div>
                      <span className="font-bold text-sm">
                        قبلا ثبت نام کرده اید؟
                      </span>
                      <Link
                        className="text-mainRed border-b border-dashed border-mainRed font-bold mr-3 pb-1 text-sm"
                        href={"#"}
                      >
                        وارد شوید 
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

export default WelcomePage;
