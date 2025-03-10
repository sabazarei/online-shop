import React, { useCallback, useEffect, useState, useRef } from "react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  onChange: (value: { min: number; max: number }) => void;
  currencyText?: string;
  width: string;
  smallScreenWidth: string;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  onChange,
  currencyText = "تومان",
  width,
  smallScreenWidth,
}) => {
  const [zIndex1, setZIndex1] = useState<string>("10");
  const [zIndex2, setZIndex2] = useState<string>("10");
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement>(null);

  // convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
    // console.log("Left Range Width (min to max):", `${minPercent}% to ${maxPercent}%`);
  }, [minVal, getPercent]);

  // set the width of the range to decrease from right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
    // console.log("Right Range Width (max to min):", `${maxPercent - minPercent}%`);
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    if (minVal != minValRef.current || maxVal != maxValRef.current) {
      onChange({ min: minVal, max: maxVal });
      minValRef.current = minVal;
      maxValRef.current = maxVal;
      // console.log("Changed minVal and maxVal:", { min: minVal, max: maxVal });
    }
  }, [minVal, maxVal, onChange]);

  return (
    <section className="">
      {/* Style the price range slider */}
      <div className={`${width} grid justify-self-center`}>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);

            setMinVal(value);
            if (minVal + 1 === maxVal) {
              setZIndex1("20");
            } else {
              setZIndex1("10");
            }
          }}
          className={`thumb pointer-events-none absolute h-0 appearance-none
           [&::-webkit-slider-thumb]:bg-mainRed [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:rounded-full  
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:mt-1
            [&::-webkit-slider-thumb]:pointer-events-auto 
            [&::-webkit-slider-thumb]:relative
            transition-transform duration-300 ease-in-out hover:scale-105
            ${width}  cursor-pointer z-${zIndex1}  `}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);

            setMaxVal(value);
            if (minVal + 1 === maxVal) {
              setZIndex2("20");
            } else {
              setZIndex2("10");
            }
          }}
          className={`thumb h-0 absolute appearance-none pointer-events-none
           [&::-webkit-slider-thumb]:bg-mainRed [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full  
           [&::-webkit-slider-thumb]:w-4  [&::-webkit-slider-thumb]:h-4
           [&::-webkit-slider-thumb]:mt-1
           [&::-webkit-slider-thumb]:pointer-events-auto 
           [&::-webkit-slider-thumb]:relative
           transition-transform duration-300 ease-in-out hover:scale-105
          ${width} cursor-pointer z-${zIndex2}        
            `}
        />

        <div className="relative ">
          <div className="absolute h-1 w-[100%] z-1 rounded-lg bg-gray-300 " />

          <div ref={range} className="absolute h-1 rounded-lg z-2 bg-mainRed" />
        </div>
      </div>

      {/* Display Price Value */}
      <section className="grid justify-self-center justify-items-center">
        <div
          dir="rtl"
          className={`${width} px-4 flex justify-center text-gray-800 text-sm mt-6`}
        >
          <p className="mx-1">قیمت:</p>

          <p className="">{maxVal}</p>
          <p className="px-1">-</p>
          <p className="ml-1">
            {minVal} 
          </p>
          <p>{currencyText}</p>
        </div>
      </section>
    </section>
  );
};

export default PriceRangeSlider;
