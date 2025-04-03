import Link from "next/link";
import Image from "next/image";
// import { IoIosArrowBack } from "react-icons/io";
import BlogSideBar from "../../components/blog/BlogSideBar";


const Blog = () => {
  const blogPostsInformation = [
    {
      id: 1,
      slug: "طراحی سایت",
      src: "/imgs/1 (1).png",
      title: "سایتو فروشگاهتو طراحی کن",
      date: "چهارشنبه، 18 دی 1398",
    },
    {
      id: 2,
      slug: "امنیت",
      src: "/imgs/2 (1).png",
      title: "امنیت سایتت رو تامین کن",
      date: "چهارشنبه، 18 دی 1398",
    },
    {
      id: 3,
      slug: "اینستاگرام",
      src: "/imgs/3 (1).png",
      title: "اینستاگرام را پول ساز کن",
      date: "چهارشنبه، 18 دی 1398",
    },
    {
      id: 4,
      slug: "سایت چند زبانه",
      src: "/imgs/4 (1).png",
      title: "سایت خودت رو چند زبانه کن",
      date: "چهارشنبه، 18 دی 1398",
    },
    {
      id: 5,
      slug: "پلاگین نویسی",
      src: "/imgs/5 (1).png",
      title: "تخصصی واسه وردپرس پلاگین بنویس",
      date: "چهارشنبه، 18 دی 1398",
    },
    {
      id: 6,
      slug: "سایت چند زبانه",
      src: "/imgs/4 (1).png",
      title: "سایت خودت رو چند زبانه کن",
      date: "چهارشنبه، 18 دی 1398",
    },
    {
      id: 7,
      slug: "امنیت",
      src: "/imgs/2 (1).png",
      title: "امنیت سایتت رو تامین کن",
      date: "چهارشنبه، 18 دی 1398",
    },
    {
      id: 8,
      slug: "اینستاگرام",
      src: "/imgs/3 (1).png",
      title: "اینستاگرام را پول ساز کن",
      date: "چهارشنبه، 18 دی 1398",
    },
    {
      id: 9,
      slug: "سایت چند زبانه",
      src: "/imgs/4 (1).png",
      title: "سایت خودت رو چند زبانه کن",
      date: "چهارشنبه، 18 دی 1398",
    },
    {
      id: 10,
      slug: "پلاگین نویسی",
      src: "/imgs/5 (1).png",
      title: "تخصصی واسه وردپرس پلاگین بنویس",
      date: "چهارشنبه، 18 دی 1398",
    },
  ];

  

  return (
    <>
      <div className="grid grid-cols-12 midXl:gap-x-16">
        <div className=" max-sm:col-span-12 col-span-9 max-sm:flex max-sm:justify-center sm:flex sm:justify-center sm:items-center md:mx-6  lg:mx-6 mt-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 midXl:grid-cols-4  sm:gap-x-6 lg:gap-x-7 midXl:gap-x-28 xl:gap-x-20 gap-y-12">
            {blogPostsInformation.map((blog, index) => (
              <div
                key={index}
                className="col-span-1 max-sm:w-72 sm:w-60 midXl:w-52 xl:w-60 border rounded-2xl"
              >
                <div className="relative -mt-6 mb-3 max-sm:mr-7 sm:mr-8 md:mr-5 lg:mr-5 midXl:mr-6 xl:mr-8 ">
                  <Link href={`/blog/${blog.slug}`}>
                    <div className="relative max-sm:w-60 max-sm:h-32 sm:w-48 md:w-52 midXl:w-44 xl:w-48 h-28 ">
                      <Image
                        fill
                        src={blog.src}
                        className="rounded-lg"
                        alt="img1"
                      ></Image>
                      <span className="absolute top-3 left-0 text-xs text-[#fefefe] px-3 pt-1 rounded-sm bg-[rgba(0,0,0,0.5)]">
                        مقاله
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="relative text-right mr-2 h-24">
                  <div className="text-sm hover:text-red-500">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </div>
                  <p className="absolute left-2 bottom-0 pb-3 z-10 font-light text-[11px]">
                    {blog.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3 ">
          <BlogSideBar/>
        </div>
        

      </div>
    </>
  );
};

export default Blog;
