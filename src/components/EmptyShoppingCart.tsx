import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const EmptyShoppingCart = () => {
    return(
        <>
            <div className="flex flex-col space-y-96 max-sm:text-center">
                <div className=" border border-[#eee] rounded-xl w-11/12 h-5/12  flex flex-col items-center absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <div className="mt-6">
                        <MdOutlineRemoveShoppingCart className=" text-[#ABABAB] w-24 h-24 bg-[#edf0f5] rounded-[50%] p-4 mb-3  " />
                    </div>
                    <p className="text-[#858585] text-[28px] flex items-center mb-3  ">سبد خرید شما خالیست!</p>
                    <p className="mb-4 mt-2 ml-5 text-sm ">می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</p>
                    <div className="">
                        <a href="#" className="text-mainRed mx-2 pb-1 border-b border-dashed border-mainRed font-bold text-sm ">لیست مورد علاقه من</a>
                        <span className="text-mainRed max-sm:">|</span>
                        <a href="#" className="text-mainRed mx-2 pb-1 border-b border-dashed border-mainRed font-bold text-sm ">محصولات شگفت‌انگیز</a>
                        <span className="text-mainRed ">|</span>
                        <a href="#" className="text-mainRed mx-2 pb-1 border-b border-dashed border-mainRed font-bold text-sm ">محصولات پرفروش روز</a>
                    </div>
                    <button className="bg-mainRed p-2 py-2 rounded-lg text-[#fff] mt-9 mb-10 ">
                        ادامه خرید در دیدیکالا
                    </button>
                </div> 
                
            </div>
                
                
                           
        </>
    )
}

export default EmptyShoppingCart