import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { IoIosArrowDropup } from "react-icons/io";

type brandLogo = {
  brandName: string;
  brandlogoImg: string;
};

type footerService = {
  mainTitle: string;
  services: { serviceTitle: string; serviceHref: string }[];
};

type footerSocialMediaType = {
  icon: ReactNode;
  href: string;
};

const LogoList: brandLogo[] = [
  {
    brandName: "تحویل اکسپرس",
    brandlogoImg: "/imgs/footer1.svg",
  },
  {
    brandName: "پشتیبانی 24 ساعته",
    brandlogoImg: "/imgs/footer2svg.svg",
  },
  {
    brandName: "پرداخت درمحل",
    brandlogoImg: "/imgs/footer3svg.svg",
  },
  {
    brandName: "۷ روز ضمانت بازگشت",
    brandlogoImg: "/imgs/delivery.svg",
  },
  {
    brandName: "ضمانت اصل بودن کالا",
    brandlogoImg: "/imgs/contact-us.svg",
  },
];

const footerServiceList: footerService[] = [
  {
    mainTitle: "راهنمای خرید از تاپ کالا",
    services: [
      { serviceTitle: "نحوه ثبت سفارش", serviceHref: "/" },
      { serviceTitle: "رویه ارسال سفارش", serviceHref: "/" },
      { serviceTitle: "شیوه‌های پرداخت", serviceHref: "/" },
    ],
  },
  {
    mainTitle: "خدمات مشتریان",
    services: [
      {
        serviceTitle: "پاسخ به پرسش‌های متداول",
        serviceHref: "/",
      },
      { serviceTitle: "رویه‌های بازگرداندن کالا", serviceHref: "/" },
      { serviceTitle: "شرایط استفاده", serviceHref: "/" },
      { serviceTitle: "حریم خصوصی", serviceHref: "/" },
    ],
  },
  {
    mainTitle: "با تاپ کالا",
    services: [
      {
        serviceTitle: "فروش در تاپ کالا",
        serviceHref: "/",
      },
      { serviceTitle: "همکاری با سازمان‌ها", serviceHref: "/" },
      { serviceTitle: "فرصت‌های شغلی", serviceHref: "/" },
      { serviceTitle: "تماس با تاپ کالا", serviceHref: "/" },
    ],
  },
];

const baseStringClass =
  "bg-white text-gray-500 w-8 h-7 p-[6px]  rounded-lg hover:text-gray-600 transition-all";

const footerSocialMedia: footerSocialMediaType[] = [
  {
    icon: <FaFacebookF className={baseStringClass} />,
    href: "/",
  },
  { icon: <FaInstagram className={baseStringClass} />, href: "/" },
  { icon: <FaXTwitter className={baseStringClass} />, href: "/" },
  { icon: <FaLinkedinIn className={baseStringClass} />, href: "/" },
];

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-100 py-3  mt-24 space-y-20 px-10 sm:px-24">
      {/* up-btn */}
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-32">
          <span>بازگشت به بالا</span>
          <div className=" rounded-full ">
            <IoIosArrowDropup className="text-[30px] rounded-full bg-[#EDF0F5]  text-red-500 " />
          </div>
        </div>
      </div>
      {/* service-logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {LogoList.map((item, index) => (
          <div key={index} className="flex flex-col  items-center">
            <div className="h-24 w-16 relative">
              <Image src={item.brandlogoImg} alt={item.brandName} fill />
            </div>
            <p>{item.brandName}</p>
          </div>
        ))}
      </div>
      {/* service-title */}
      <div className="flex justify-between flex-wrap gap-16">
        {footerServiceList.map((service, index) => (
          <div key={index}>
            <p className="font-semibold pb-4">{service.mainTitle}</p>
            <div className="flex flex-col space-y-3 text-sm text-gray-600">
              {service.services.map((item, index) => (
                <Link href={item.serviceHref} key={index}>
                  {item.serviceTitle}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="w-full md:w-1/2">
          <p className="text-[10px] sm:text-sm ">
            از تخفیف‌ها و جدیدترین‌های فروشگاه باخبر شوید:
          </p>
          <div className="relative flex items-center pt-2 pb-4">
            <button className="text-white bg-red-600 rounded-md px-3 py-2.5 text-xs absolute top-3 left-2">
              ارسال
            </button>

            <input
              className="w-full  h-[45px] !bg-white bg-transparent placeholder:text-[#757575] text-slate-700 text-sm border-gray-200 border-2  rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="آدرس ایمیل خود را وارد کنید..."
            />
          </div>
          <div>
            <p className="text-sm ">ما را در شبکه های اجتماعی دنبال کنید.</p>
            <ul className="flex justify-center">
              {footerSocialMedia.map((item, index) => (
                <li key={index} className="pe-3">
                  <Link href={item.href} className="">
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* site-description */}
      <div className="">
        <p className="py-5">
          هفت روز هفته ، 24 ساعت شبانه‌روز پاسخگوی شما هستیم.
        </p>
        <div className="flex justify-center space-y-3 text-center md:text-right md:space-y-0 md:justify-between flex-wrap gap-x-11  w-full ">
          <div className="space-y-2">
            <p className="text-gray-600 font-bold  ">
              فروشگاه اینترنتی تاپ کالا، بررسی، انتخاب و خرید آنلاین
            </p>
            <p className="text-gray-500 text-xs max-w-[40rem]">
              تاپ کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از
              یک دهه تجربه، با پایبندی به سه اصل کلیدی، پرداخت در محل، 7 روز
              ضمانت بازگشت کالا و تضمین اصل‌بودن کالا، موفق شده تا همگام با
              فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل
              شود. به محض ورود به تاپ کالا با یک سایت پر از کالا رو به رو
              می‌شوید! هر آنچه که نیاز دارید و به ذهن شما خطور می‌کند در اینجا
              پیدا خواهید کرد.
            </p>
          </div>
          <div className="flex gap-3 ">
            <Image
              src="/imgs/symbol-01.png"
              alt="symbol-1"
              width={160}
              height={100}
              className="bg-stone-200 rounded-md"
            />{" "}
            <Image
              src="/imgs/symbol-02.png"
              alt="symbol-1"
              width={160}
              height={200}
              className="bg-stone-200 rounded-md"
            />
          </div>
        </div>
        <p className="text-sm text-gray-600 text-center pt-11">
          استفاده از مطالب فروشگاه اینترنتی تاپ کالا فقط برای مقاصد غیرتجاری و
          با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به شرکت نوآوران فن
          آوازه (فروشگاه آنلاین تاپ کالا) می‌باشد.
        </p>
      </div>
    </div>
  );
};

export default Footer;
