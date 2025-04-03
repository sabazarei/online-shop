import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

const BlogSideBar = () => {

    const newBlogsInfo = [
        {
          id: 1,
          slug: "طراحی سایت",
          src: "/imgs/1 (1).png",
          title: "سایتو فروشگاهتو طراحی کن",
          date: " 10 دی 1398",
        },
        {
          id: 2,
          slug: "امنیت",
          src: "/imgs/2 (1).png",
          title: "امنیت سایتت رو تامین کن",
          date: " 10 دی 1398",
        },
        {
          id: 3,
          slug: "اینستاگرام",
          src: "/imgs/3 (1).png",
          title: "اینستاگرام را پول ساز کن",
          date: " 10 دی 1398",
        },
        {
          id: 4,
          slug: "سایت چند زبانه",
          src: "/imgs/4 (1).png",
          title: "سایت خودت رو چند زبانه کن",
          date: " 10 دی 1398",
        },
      ]
    
      const blogStickers = [
        {id:1, title:'بهینه سازی'},
        {id:2, title:'برنامه نویسی'},
        {id:3, title:'طراحی سایت'},
        {id:4, title:'وردپرس'},
        {id:5, title:'پلاگین نویسی'},
        {id:6, title:'گرافیک'},
      ] 

    return(
        <>
        <div className=" p-3 mt-14 w-80 ">
          <div className="">
            <div className="mb-3 font-bold">
              <h3>جدیدترین نوشته ها</h3>
            </div>
            <hr />
            
              {newBlogsInfo.map((newBlog, index) => (
                <div className="flex border-b pt-3 pb-2 " key={index}>
                  <div>
                    <Link href={`/blog/${newBlog.slug}`}>
                      <div className="relative w-20 h-14 ">
                        <Image fill src={newBlog.src} className="rounded-[4px]" alt=""></Image>
                      </div>
                    </Link>
                  </div>
                  <div className="mr-3 flex-col space-y-3">
                    <Link href={`/blog/${newBlog.slug}`}>
                    <p className="text-[13px] text-[#383838] hover:text-[#6f42c1]">{newBlog.title}</p>
                    </Link>
                    <div>
                      <span className="text-[11px] text-[#AEAEAE]">{newBlog.date}</span>
                    </div>
                  </div>
                </div>
                
              ))}
            
          </div>
          <hr className="border w-80 my-4" />

          <div>
            <div className="flex  items-center mt-9 ">
              <div className="relative w-7 h-4">
                <Image fill src={'/imgs/title-circles.png'} alt=""></Image>
              </div>
              <h2 className="pr-3 text-[#545454]">دسته ها</h2>
            </div>
            <div>
              <ul className="text-[#545454] mt-3 text-sm ">
                <li className="flex items-center pr-1 mb-2 hover:text-mainLightBlue">
                  <IoIosArrowBack/>
                  <Link href={'#'}>بهینه سازی</Link>
                </li>
                <li className="flex items-center pr-1 mb-2 hover:text-mainLightBlue">
                  <IoIosArrowBack/>
                  <Link href={'#'}>برنامه نویسی</Link>
                </li>
                <li>
                  <div className="flex items-center pr-1 mb-2 hover:text-mainLightBlue">
                  <IoIosArrowBack/>
                  <Link href={'#'}>طراحی سایت</Link>
                  </div>
                  <ul className="mr-4">
                    <li className="flex items-center pr-1 mb-2 hover:text-mainLightBlue">
                    <IoIosArrowBack/>
                    <Link href={'#'}>وردپرس</Link>
                    </li>
                    <li className="flex items-center pr-1 mb-2 hover:text-mainLightBlue">
                    <IoIosArrowBack/>
                    <Link href={'#'}>پلاگین نویسی</Link>
                    </li>
                  </ul>
                </li>
                <li className="flex items-center pr-1 mb-2 hover:text-mainLightBlue">
                <IoIosArrowBack/>
                <Link href={'#'}>گرافیک</Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border w-80 my-4" />

          <div>
            <div className="flex items-center">
              <div className="relative w-7 h-4">
                <Image fill src={'/imgs/title-circles.png'} alt=""></Image>
              </div>
              <h2 className="pr-3 text-[#545454]">برچسب ها</h2>
            </div>
            <div className="mt-4">
            <ul  className="flex flex-wrap gap-3 ">
              {
                blogStickers.map((blogStc,index)=>(
                    <>
                      <li key={index} className="">
                      <Link href={'#'} className="hover:text-red-500 text-xs whitespace-nowrap w-auto px-2 py-1  rounded-xl bg-[#f5f5f5] text-[#007BFF]">
                        {blogStc.title}
                      </Link>
                      </li>
                    </>
                  
                ))
              }
              </ul>
            </div>

          </div>

          <hr className="border w-80 my-4" />

          

        </div>
        </>
    )
}

export default BlogSideBar