import { useState } from "react";

//import react icons
import { IoIosArrowDown } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";

const categoriesData = [
  {
    categoryId: "classification",
    categoryTitle: "دسته بندی",
    categorySubset: [
      "همه",
      "لباس مردانه",
      "تیشرت مردانه",
      "شلوار مردانه",
      "لباس زنانه",
      "اکسسوری",
    ],
  },
  {
    categoryId: "colors",
    categoryTitle: "رنگها",
    categorySubset: ["مشکی", "نوک مدادی", "آبی روشن", "نقره ای", "زرد"],
  },
];

function FilterSelection() {
  const [openCategory, setOpenCategory] = useState<string | null>("");

  const handleCategoryClick = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId); // Toggle category open/close
  };

  return (
    <section className="mx-7 border rounded-xl">
      {categoriesData.map((category) => (
        <div key={category.categoryId}>
          <button
            className="relative flex items-center w-full border-b h-16"
            onClick={() => handleCategoryClick(category.categoryId)}
          >
            <h1 className="text-sm mr-7">{category.categoryTitle}</h1>
            <div className="absolute flex items-center justify-center left-0 ml-5 w-9 h-9 bg-gray-200 rounded-full">
              <IoIosArrowDown
                className={`grid justify-self-center text-mainRed text-xl transition-transform 
                  ${openCategory === category.categoryId ? "rotate-180" : ""}`}
              />
            </div>
          </button>

          {openCategory === category.categoryId && (
            <section className="mr-6">
              {category.categorySubset.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-2 cursor-pointer relative my-2"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 appearance-none checked:bg-mainRed border border-gray-400 peer rounded-[3px] cursor-pointer"
                  />
                  <BsCheckLg className="absolute pr-[2px] text-white text-sm hidden peer-checked:block pointer-events-none" />
                  <span className="text-xs pr-3">{option}</span>
                </label>
              ))}
            </section>
          )}
        </div>
      ))}
    </section>
  );
}

export default FilterSelection;
