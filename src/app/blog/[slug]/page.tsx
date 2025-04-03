import BlogSideBar from "../../../components/blog/BlogSideBar";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdFolder } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import Comments from '../../../components/singleProduct/CommentsTab';

const SingleBlog = ({ params }) => {
  const { slug } = params;

  // Check if slug is defined and is a string
  if (!slug || typeof slug !== "string") {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <div> */}
      <div className="grid grid-cols-12 ">
        <div className="col-span-12 mr-16 max-md:mr-5 mt-7">
          <div className="text-[13px] max-sm:text-[10px]">
            <nav className="flex gap-x-2 text-[#666666] font-bold">
              <Link href={"http://localhost:3000/blog"}>
                <div className="flex justify-center items-center hover:text-[#007bff]">
                  خانه
                  <IoIosArrowBack className="mr-[1px]" />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="flex justify-center items-center hover:text-[#007bff]">
                  {decodeURIComponent(slug)}
                  <IoIosArrowBack className="mr-[1px]" />
                </div>
              </Link>
              <Link href={"#"} className="hover:text-[#007bff]">
                افزودن دکمه تماس در سایت وردپرسی
              </Link>
            </nav>
          </div>
          <div className="mt-5">
            <h2 className="text-[15px]  font-bold">
              افزودن دکمه تماس در سایت وردپرسی
            </h2>
          </div>
          {/* stars */}
          <div className="flex gap-1 mt-1">
            <span title="از 4 رای 4" className="">
              <Image
                width={15}
                height={15}
                src={"/imgs/star.svg"}
                alt=""
              ></Image>
            </span>
            <span title="از 4 رای 4">
              <Image
                width={15}
                height={15}
                src={"/imgs/star.svg"}
                alt=""
              ></Image>
            </span>
            <span title="از 4 رای 4">
              <Image
                width={15}
                height={15}
                src={"/imgs/star.svg"}
                alt=""
              ></Image>
            </span>
            <span title="از 4 رای 4">
              <Image
                width={15}
                height={15}
                src={"/imgs/star.svg"}
                alt=""
              ></Image>
            </span>
            <span title="از 4 رای 4">
              <Image
                width={15}
                height={15}
                src={"/imgs/star.svg"}
                alt=""
              ></Image>
            </span>
          </div>
        </div>
        <div className="col-span-9 max-sm:col-span-12">

          <header className="flex flex-wrap gap-x-6 text-[#8f8f8f] text-xs mt-8 max-md:mr-5 mr-16">
            <div className="flex gap-x-1">
              <FaRegCalendarAlt />
              1397/09/21
            </div>
            <div className="flex gap-x-1">
              <FaRegCircleUser />
              ارسال شده توسط
              <Link href={"#"} className="hover:text-[#007bff]">
                {" "}
                مدیریت
              </Link>
            </div>
            <div className="flex gap-x-1">
              <MdFolder />
              <Link href={"#"} className="hover:text-[#007bff] ">
                دسته بندی نشده
              </Link>
              ،
              <Link href={"#"} className="hover:text-[#007bff] ">
                کسب و کار آنلاین
              </Link>
              ،
              <Link href={"#"} className="hover:text-[#007bff] ">
                معرفی کتاب
              </Link>
            </div>
            <div className="flex gap-x-1">
              <IoMdEye />
              433 بازدید
            </div>
          </header>

          <div className="flex justify-center items-center mt-5">
            <div className="relative  w-2/3 max-sm:w-[500px] max-sm:h-[400px] sm:h-[380px] md:h-[450px] lg:h-[550px] ">
              <Image
                fill
                src={"/imgs/singleBlog.jpg"}
                className=""
                alt=""
              ></Image>
            </div>
          </div>

          <div className="mr-16 max-md:mr-5">
            <ul className="flex flex-col gap-y-2 text-sm max-sm:text-xs">
                <li className="font-bold">
                می‌خواهید قالب وردپرسی و ووکامرسی اختصاصی خودتان را بسازید؟
                </li>
                <li className="font-bold">
                می‌خواهید به عنوان طراح سایت کسب درآمد کنید؟
                </li>
                <li className="font-bold">
                می‌خواهید قالب سایت خود را به صورت حرفه‌ای شخصی‌سازی کنید؟
                </li>
            </ul>

            <p className="text-sm my-5">در دوره آموزش صفر تا صد دوره طراحی سایت:</p>
            <ol className="list-decimal text-sm max-sm:text-xs mr-12">
                <li>
                یک ایده در ذهن داریم آن را با مداد یا خودکار روی کاغذ طراحی می‌کنیم
                </li>
                <li>
                آن را با اصول طراحی سایت در فتوشاپ پیاده سازی می‌کنیم
                </li>
                <li>
                فایل‌های گرافیکی را با کدهای استاندارد CSS3 HTML5 به کد تبدیل می‌کنیم (در حین یادگیری کدنویسی فریم ورک Bootstrap را نیز یاد می‌گیرید که باعث می‌شود سایت یا فروشگاه شما علاوه بر دسکتاپ، با تبلت و موبایل نیز سازگار باشد)
                </li>
                <li>
                کدها را با رعایت اصول وردپرس به یک قالب هوشمند وردپرسی تبدیل می‌کنیم
                </li>
                <li>
                در نهایت قالب خود را با ووکامرس سازگار می‌کنیم
                </li>
            </ol>

            <p className="text-sm max-sm:text-xs my-5">
            با این آموزش می‌توانید هر نوع سایت خبری و فروشگاهی را با طراحی اختصاصی خودتان راه‌اندازی کنید. علاوه بر این شما یاد می‌گیرد با کمک بوت‌استرپ سایت خود را ریسپانسیو کنید تا بهترین نمایش را در مویایل و تبلت داشته باشد.
            </p>
            <p className="text-sm max-sm:text-xs">
            این تمام ماجرا نیست. شاید شما بخواهید از قالب‌های حرفه‌ای خارجی استفاده کنید. در این دوره شما یادمی‌گیرد که چطور قالب‌های حرفه‌ای را فارسی‌سازی و راست‌چین کنید تا برای سایت‌های فارسی مناسب باشد.
            </p>
            <p className="max-sm:text-xs text-sm my-5">
                <span className="text-red-500">با دیدن این دوره شما می‌توانید به عنوان یک طراح‌سایت و توسعه‌دهنده front-end وردپرس کسب درآمد کنید</span>
                ، پس باید بدانید که چطور پروژه قبول کنید و با مشتریان خود قرارداد ببندید. بخش پایانی این دوره مخصوص شما است تا بتوانید مثل یک طراح حرفه‌ای قرارداد ببندید و با خیالی آسوده از تخصص خود کسب درآمد کنید.
            </p>
          </div>

        </div>

        <div className="col-span-3 max-sm:mr-3 ">
          <BlogSideBar />
        </div>
      </div>
      
      {/* </div> */}
    </>
  );
};

export default SingleBlog;
