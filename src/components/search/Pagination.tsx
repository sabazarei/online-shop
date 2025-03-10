"use client";
import { useState } from "react";

// import react icons
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
interface PaginationProps {
  maxPageNumber: number;
}
function Pagination({ maxPageNumber }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  let condition: number = 0;

  const pageNumber2 = [
    [2, 3, 4, 5, 6],
    [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ],
    [
      maxPageNumber - 5,
      maxPageNumber - 4,
      maxPageNumber - 3,
      maxPageNumber - 2,
      maxPageNumber - 1,
    ],
  ];

  if (currentPage < 5) {
    condition = 0;
  } else if (currentPage > 5 && currentPage <= maxPageNumber - 5) {
    condition = 1;
  } else if (currentPage > maxPageNumber - 5) {
    condition = 2;
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleArrowRight = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleArrowLeft = () => {
    setCurrentPage((prevPage) =>
      prevPage < maxPageNumber ? prevPage + 1 : prevPage
    );
  };

  const getPageStyle = (page: number) => {
    return currentPage === page
      ? "bg-mainRed py-1 px-2 text-white rounded-lg"
      : "";
  };

  return (
    <ul className="flex items-center">
      <MdKeyboardDoubleArrowRight
        className="cursor-pointer"
        onClick={() => handleArrowRight()}
      />
      <li
        className={`mx-3 inline cursor-pointer text-black ${getPageStyle(1)}`}
        onClick={() => handlePageClick(1)}
      >
        {1}
      </li>

      {condition !== 0 && <li className="">...</li>}
      {pageNumber2[condition].map((page, index) => (
        <li
          key={index}
          onClick={() => handlePageClick(page)}
          className={`mx-3 cursor-pointer ${getPageStyle(page)}`}
        >
          {page}
        </li>
      ))}
      {condition !== 2 && <li className="">...</li>}

      <li
        className={`mx-3 cursor-pointer inline text-black ${getPageStyle(
          maxPageNumber
        )}`}
        onClick={() => handlePageClick(maxPageNumber)}
      >
        {maxPageNumber}
      </li>
      <MdKeyboardDoubleArrowLeft
        className="cursor-pointer"
        onClick={() => handleArrowLeft()}
      />
    </ul>
  );
}

export default Pagination;
