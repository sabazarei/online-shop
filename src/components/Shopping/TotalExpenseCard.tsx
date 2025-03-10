import { FaArrowLeft } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";

function TotalExpenseCard() {
  return (
    <section className="justify-self-center">
      {/* w-[80%] min-w-[300px] h-[30rem] m-4 */}
      <div className="max-lg:w-[18rem] m-4 border rounded-3xl">
        <div className="flex justify-center gap-14 pt-5">
          <div className="flex flex-col text-justify  text-[#515151] font-bold ">
            <p className="pb-3">مبلغ کل (۲ کالا)</p>
            <p className="text-mainBlue pb-3">سود شما از خرید</p>
            <div className="flex items-center pb-4">
              <p className="">هزینه ارسال</p>
              <FiInfo className="mr-2 cursor-pointer" />
            </div>
          </div>
          <div dir="ltr" className="flex flex-col text-justify text-[#515151] ">
            <p className="pb-3">۱۶,۸۹۷,۰۰۰ تومان</p>
            <p className="text-mainBlue pb-3">(۱٪)۲۰۰,۰۰۰ تومان</p>
            <p className="pb-3">وابسته به آدرس</p>
          </div>
        </div>
        <hr className="w-72" />
        <div className=" flex gap-32 pt-2 pb-7 text-[#515151] ">
          <div className="flex pr-7 items-center ">
            <p className=" font-bold ">دیدیکلاب</p>
            <FiInfo className="mr-2 cursor-pointer" />
          </div>
          <div className="">
            <p className="">۱۵۰+ امتیاز</p>
          </div>
        </div>
        <hr className="w-72 " />
        <hr className="w-72 mt-[2px]" />
        <div className="pt-4">
          <h3 className="text-[#676767] text-xl flex justify-center items-center font-semibold ">
            مبلغ قابل پرداخت:
          </h3>
          <h3 className="text-mainRed text-xl my-3 flex justify-center items-center font-semibold">
            ۱۶,۶۹۷,۰۰۰ تومان
          </h3>
          <button className="w-11/12 h-14 mx-4 my-3 relative flex items-center justify-center rounded-[10px] bg-mainRed overflow-hidden md:flex group">
            {/* Expanding Light Red Background */}
            <div className="absolute right-0 top-0 h-full w-14 bg-red-300 rounded-l-2xl group-hover:rounded-l-[10px] transition-all duration-300 ease-in-out group-hover:w-full"></div>

            {/* Cart Icon (Positioned on top of background) */}
            <div className="absolute right-2 top-0 h-full w-10 grid place-items-center text-white z-10">
              <FaArrowLeft className="text-xl" />
            </div>

            {/* Button Text */}
            <div className="flex-grow flex justify-center items-center text-[#fff] text-base px-11  z-10">
              ادامه ثبت سفارش
            </div>
          </button>

          <div className=" text-[#a0a0a0] pr-3 pb-7">
            <p className="text-sm inline   ">
              کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند، برای ثبت سفارش مراحل
              بعدی را تکمیل کنید.
            </p>

            <FiInfo className="inline cursor-pointer mr-3" />
          </div>
        </div>
      </div>
      {/* d */}
    </section>
  );
}

export default TotalExpenseCard;
