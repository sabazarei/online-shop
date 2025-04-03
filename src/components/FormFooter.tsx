import Link from "next/link";

const FormFooter = () => {
    return(
        <>
            <footer className="border-t mt-6 w-full h-auto">
              <div className="pt-6">
                <div className="row">
                  <div className="col1 ">
                    <ul className="flex gap-5 max-sm:gap-2 font-medium justify-center text-[#7f7f7f] text-sm max-sm:text-xs">
                      <li>
                        <Link href={'#'}>درباره دیدیکالا</Link>
                      </li>
                      <li>
                        <Link href={'#'}> فرصت های شغلی</Link>
                      </li>
                      <li>
                        <Link href={'#'}> تماس با ما</Link>
                      </li>
                      <li>
                        <Link href={'#'}> همکاری با سازمان ها</Link>
                      </li>
                    </ul>

                  </div>
                  <div className="col2 my-4">
                    <p className="text-[#b0b0b0] text-xs text-center font-medium">
                    استفاده از مطالب فروشگاه اینترنتی دیدیکالا فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به (فروشگاه آنلاین دیدیکالا) می‌باشد.
                    </p>
                  </div>
                  <div className="col3 max-w-full text-[#b0b0b0] text-xs text-center my-2">
                    <div>Copyright © 2019 Didikala</div>
                  </div>
                </div>
              </div>
            </footer>
        </>
    )
}

export default FormFooter