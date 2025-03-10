import Image from "next/image";
function DiscountCodeBox() {
  return (
    <section>
      <section className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-2">
        <div className="grid grid-rows-3 max-sm:grid-rows-3 mr-2 h-48 max-sm:px-4">
          <div className="flex items-center gap-5 mt-8">
            <Image
              src="/imgs/title-circles.png"
              alt="O"
              width={30}
              height={30}
            />
            <h1 className="text-md text-gray-500 font-medium mb-5">
              استفاده از کارت هدیه دیجی‌کالا{" "}
            </h1>
          </div>

          <span className="text-xs">
            با ثبت کد کارت هدیه، مبلغ کارت هدیه از “مبلغ قابل پرداخت” کسر
            می‌شود.
          </span>

          <div className="grid grid-cols-[2fr_1fr] max-sm:grid-cols-1 max-sm:grid-rows-[auto_auto] ">
            <input
              type="text"
              className="border h-10 rounded-lg placeholder:text-sm placeholder:pr-4"
              placeholder="مثلا: ldkne345bj5"
            />
            <button className="w-24 h-10 bg-blue-600 text-xs text-white p-2 mr-5 rounded-lg max-sm:mt-5">
              ثبت کد هدیه
            </button>
          </div>
        </div>

        <div className="grid grid-rows-3 max-sm:grid-rows-3 px-4 h-48 max-sm:mt-5">
          <div className="flex items-center gap-5 mt-8">
            <Image
              src="/imgs/title-circles.png"
              alt="O"
              width={30}
              height={30}
            />
            <h1 className="text-md text-gray-500 font-medium mb-5">
              استفاده از کارت هدیه دیجی‌کالا{" "}
            </h1>
          </div>

          <span className="text-xs">
            با ثبت کد کارت هدیه، مبلغ کارت هدیه از “مبلغ قابل پرداخت” کسر
            می‌شود.
          </span>

          <div className="grid grid-cols-[2fr_1fr] max-sm:grid-cols-1 max-sm:grid-rows-[auto_auto] ">
            <input
              type="text"
              className="border h-10 rounded-lg placeholder:text-sm placeholder:pr-5"
              placeholder="مثلا: ldkj5"
            />
            <button className="  w-24 h-10 bg-blue-600 text-xs text-white p-2 mr-5 rounded-lg max-sm:mt-5">
              ثبت کد تخفیف
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default DiscountCodeBox;
