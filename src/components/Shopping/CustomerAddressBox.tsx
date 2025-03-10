"use client";

interface CustomerAddressBoxProps {
  isDeleteOpen: boolean;
  setIsDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditAddressOpen: boolean;
  setIsEditAddressOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CustomerAddressBox({ isDeleteOpen, setIsDeleteOpen, isEditAddressOpen, setIsEditAddressOpen }: CustomerAddressBoxProps) {

  return (
    <>
      <section className="">
        <div className="w-[94%] max-sm:w-[98%] mt-3 rounded-2xl border border-gray-300 items-center justify-center justify-self-center shadow-sm">
          <ul className="p-4">
            <li className="font-medium text-md mb-5">جلال بهرامی راد</li>
            <li className="text-gray-400 mb-10 text-sm">
              خراسان شمالی، بجنورد،خراسان شمالی-بجنورد-طالقانی غربی
            </li>

            <li className="grid grid-cols-2 grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-2 text-gray-500 text-sm">
              <span className="grid md:grid-cols-1 md:grid-rows-2">
                <span>کد پستی: 5798325618</span>
                <span> شماره همراه: ۰۹۰۳۰۸۱۳۷۴۲</span>
              </span>

              <section className="justify-self-end">
                <button
                  className="bg-gray-200 py-1 px-5 rounded-md font-medium"
                  onClick={() => {
                    setIsDeleteOpen(true);
                  }}
                >
                  حذف
                </button>
                <button className="bg-gray-200 py-1 px-5 rounded-md font-medium mr-2"
                onClick={() => {setIsEditAddressOpen(true)}}
                >
                  ویرایش
                </button>
              </section>
            </li>
          </ul>
          <button className="bg-mainRed w-full h-9 text-white font-medium text-sm grid justify-self-start rounded-br-xl rounded-bl-xl">
            <span className="pt-2">سفارش به این آدرس ارسال می‌شود.</span>
          </button>
        </div>
      </section>

      <section className="">
        <div className="w-[94%] max-sm:w-[98%] mt-3 rounded-2xl border border-gray-300  items-center justify-center justify-self-center  shadow-sm">
          <ul className="p-4 ">
            <li className="font-medium text-md mb-5">جلال بهرامی راد</li>
            <li className="text-gray-400 mb-10 text-sm">
              خراسان شمالی، بجنورد،خراسان شمالی-بجنورد-طالقانی غربی
            </li>

            <li className="grid grid-cols-2 grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-2 text-gray-500 text-sm">
              <span className="grid md:grid-cols-1 md:grid-rows-2">
                <span>کد پستی: 5798325618</span>
                <span> شماره همراه: ۰۹۰۳۰۸۱۳۷۴۲</span>
              </span>

              <section className="justify-self-end">
                <button
                  className="bg-gray-200 py-1 px-5 rounded-md font-medium"
                  onClick={() => {
                    setIsDeleteOpen(true);
                  }}
                >
                  حذف
                </button>
                <button className="bg-gray-200 py-1 px-5 rounded-md font-medium mr-2"
                 onClick={() => {setIsEditAddressOpen(true)}}
                >
                  ویرایش
                </button>
              </section>
            </li>
          </ul>
          <button className="bg-gray-200 w-full h-9 font-medium text-gray-600 text-sm grid justify-self-start rounded-br-xl rounded-bl-xl">
            <span className="pt-2">ارسال سفارش به این آدرس</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default CustomerAddressBox;
