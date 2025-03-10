import Image from "next/image";
import React from "react";

const Review = () => {
  return (
    <>
      <div className="m-10">
        <Image
          className="inline ml-3"
          src="/imgs/title-circles.png"
          width={30}
          height={30}
          alt="Circle Decoration"
          priority // Ensures faster LCP by preloading the image
        />
        <h2 className="inline text-md text-[#6f7479]">نقد و بررسی</h2>
        <h1 className="text-lg text-[#666] font-semibold border-b border-gray-100 py-2 m-2">
          گوشی موبایل سامسونگ مدل Galaxy A50 SM-A505F/DS دو سیم کارت ظرفیت
          128گیگابایت
        </h1>
        <div className="text-[#666] mx-24 max-md:mx-2 text-justify">
          <p className="text-sm max-sm:text-[13px] leading-8 max-sm:leading-7">
            سامسونگ سال 2019 را با متنوع کردن هرچند بیشتر سری گوشی‌های A خود
            آغاز کرد. این سری از تولیدات سامسونگ به داشتن صفحه‌نمایش بسیار با
            کیفیت AMOLED و دوربین‌هایی با امکانات بالا شهرت دارند. در این میان
            به نظر می‌رسد گوشی «Galaxy A50» حرف‌های زیادی در هر دوی این زمینه‌ها
            داشته باشد. گوشی موبایل Galaxy A50 با صفحه‌نمایش سوپر آمولد طراحی
            شده است و ظاهر زیبایی دارد. سامسونگ تلاش کرده است حاشیه را در این
            تولید جدید خود تا حد امکان کم کند. این گوشی قاب پشتی از جنس پلاستیک
            دارد و قاب جلویی آن را شیشه پوشانده که البته جلوه‌ی زیبایی به گوشی
            داده است. این محصول سامسونگ با جدیدترین نسخه از سیستم‌عامل اندروید
            (Pie) روانه بازار شده است تا از هر نظر گوشی مدرن به‌حساب بیاید.
            صفحه‌نمایش استفاده‌شده در این گوشی 6.4 اینچ با رزولوشن FullHD+ است
            که با استفاده از فناوری Super AMOLED و پنل OLED تصاویر شفاف و
            بی‌نظیری را به نمایش می‌گذارد. این صفحه‌نمایش در هر اینچ 403 پیکسل
            را نشان می‌دهد که این یعنی جزئیات و وضوح تصویر عالی است. همچنین روکش
            این نمایشگر لایه‌ی محافظ Corning Gorilla Glass است که از خط‌وخش و
            ضربه جلوگیری می‌کند. تراشه‌ی این محصول، Exynos 9610 از تراشه‌های 10
            نانومتری سامسونگ است که به همراه 4 گیگابایت رم عرضه می‌شود. این
            تراشه یکی از قوی‌ترین تراشه‌های موجود در حال حاضر است و برای انجام
            بازی‌های سنگین و بازکردن چندین برنامه به صورت هم‌زمان و تماشای ویدئو
            کاملا مناسب است و کم نمی‌آورد. تراشه‌ی گرافیکی Mali-G72 MP3 هم برای
            پخش ویدئو و بازی مناسب است. این گوشی در دو ظرفیت 64 و 128 گیگابایتی
            عرضه شده است و با استفاده از یک کارت حافظه‌ی جانبی قادر خواهید بود
            حافظه داخلی را تا یک ترابایت دیگر هم افزایش دهید. دوربین اصلی A50
            سنسور 25مگاپیکسلی دارد و از نوع عریض (Wide) است. دو سنسور 8 و 5
            مگاپیکسلی دیگر هم در کنار این دوربین اصلی مجموعه دوربین‌های قاب پشتی
            A50 را تشکیل داده‌اند. دوربین سلفی 25مگاپیکسلی هم در قاب جلویی این
            گوشی به کار گرفته شده است. باتری 4000 میلی‌آمپرساعتی، پشتیبانی از
            فناوری شارژ سریع 15 واتی، درگاه USB Type-C و حسگر اثرانگشت در زیر
            قاب اصلی هم از دیگر ویژگی‌های این تازه‌وارد است. سامسونگ در ساخت این
            گوشی از جدیدترین فناوری‌های ساخت گوشی استفاده کرده است تا
            میان‌رده‌ای با قابلیت‌های نزدیک به یک بالارده خوش‌ساخت را روانه
            بازار کند.
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
