"use client";
import { useState } from "react";

const sortingButtonsData = [
  {
    ButtonId: "all",
    ButtonTitle: "همه",
  },
  {
    ButtonId: "classification",
    ButtonTitle: "جدید ترین",
  },
  {
    ButtonId: "bestSelling",
    ButtonTitle: "پر فروش ترین",
  },
  {
    ButtonId: "cheapest",
    ButtonTitle: "ارزان ترین",
  },
  {
    ButtonId: "mostExpensive",
    ButtonTitle: "گران ترین",
  },
];

function SortButtons() {
  const [sortingBy, setSortingBy] = useState<string | null>("");
  const handleSortButtonClick = (ButtonId: string) => {
    setSortingBy(sortingBy === ButtonId ? null : ButtonId); // sets the state with the clicked button
  };
  return (
    <section className="my-6 mr-10 space-y-3">
      {/* Iterates through the list and finds the button whose ID matches the clicked button. */}
      {sortingButtonsData.map((button) => (
        <button
          key={button.ButtonId}
          className={`mx-4 text-sm  
            ${
              sortingBy === button.ButtonId
                ? "bg-mainRed py-1 px-2 text-white rounded-lg"
                : ""
            }`}
          onClick={() => handleSortButtonClick(button.ButtonId)}
        >
          {button.ButtonTitle}
        </button>
      ))}
    </section>
  );
}

export default SortButtons;
