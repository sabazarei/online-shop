"use client";
import { useEffect, useState } from "react";

export default function RangeSlider() {
  const [minValue, setMinValue] = useState(30);
  const [maxValue, setMaxValue] = useState(70);
  const minGap = 1; // Minimum gap between min and max values to prevent overlap
  const sliderMaxValue = 100;

  useEffect(() => {
    const fillColor = () => {
      let percent1 = (minValue / sliderMaxValue) * 100;
      let percent2 = (maxValue / sliderMaxValue) * 100;
      document.documentElement.style.setProperty(
        "--slider-track-bg",
        `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`
      );
    };
    fillColor();
  }, [minValue, maxValue]);

  const handleMinChange = (e) => {
    let value = parseInt(e.target.value);
    if (value <= maxValue - minGap) {
      setMinValue(value);
    }
  };

  const handleMaxChange = (e) => {
    let value = parseInt(e.target.value);
    if (value >= minValue + minGap) {
      setMaxValue(value);
    }
  };

  let chokh = 100
  let az = 10

  return (
    <>
      <div>
        <input type="range" min={az} max={chokh} />
      </div>
      <div className="flex items-center justify-center ">
        <div className="relative w-[95vmin] bg-white p-10 rounded-lg shadow-lg">
          <div className="relative w-1/3 bg-blue-600 text-white text-center py-2 rounded-md font-medium text-xl mx-auto">
            <span>{minValue}</span> <span>&ndash;</span> <span>{maxValue}</span>
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-600"></div>
          </div>

          <div className="relative w-full h-24 mt-8">
            <div className="absolute top-1/2 w-full h-1 bg-gray-300 rounded-md"></div>

            {/* Min Value Range */}
            <input
              type="range"
              min="0"
              max="100"
              value={minValue}
              onChange={handleMinChange}
              className="absolute w-full appearance-none bg-transparent pointer-events-auto mt-5"
            />

            {/* Max Value Range */}
            <input
              type="range"
              min="0"
              max="100"
              value={maxValue}
              onChange={handleMaxChange}
              className="absolute w-full appearance-none bg-transparent pointer-events-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// import { useState, useEffect } from "react";

// const DoubleRangeSlider = () => {
//     const [minValue, setMinValue] = useState(30);
//     const [maxValue, setMaxValue] = useState(70);
//     const minGap = 0;
//     const sliderMaxValue = 100;

//     useEffect(() => {
//         const fillColor = () => {
//             let percent1 = (minValue / sliderMaxValue) * 100;
//             let percent2 = (maxValue / sliderMaxValue) * 100;
//             document.documentElement.style.setProperty("--slider-track-bg", `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`);
//         };
//         fillColor();
//     }, [minValue, maxValue]);

//     const handleMinChange = (e) => {
//         let value = parseInt(e.target.value);
//         if (value < maxValue - minGap) {
//             setMinValue(value);
//         }
//     };

//     const handleMaxChange = (e) => {
//         let value = parseInt(e.target.value);
//         if (value > minValue + minGap) {
//             setMaxValue(value);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-blue-600">
//             <div className="relative w-96 bg-white p-8 rounded-lg shadow-lg">
//                 {/* Display Values */}
//                 <div className="bg-blue-600 text-white w-32 text-center p-2 rounded-md text-lg font-semibold mx-auto relative">
//                     <span>{minValue}</span> <span>&dash;</span> <span>{maxValue}</span>
//                     <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-blue-600"></div>
//                 </div>

//                 {/* Sliders */}
//                 <div className="relative w-full h-16 mt-6">
//                     {/* Slider Track */}
//                     <div className="absolute w-full h-1 bg-gray-300 rounded-md"
//                          style={{ background: `linear-gradient(to right, #dadae5 ${(minValue / sliderMaxValue) * 100}%, #3264fe ${(minValue / sliderMaxValue) * 100}%, #3264fe ${(maxValue / sliderMaxValue) * 100}%, #dadae5 ${(maxValue / sliderMaxValue) * 100}%)` }}>
//                     </div>

//                     {/* Min Range Input */}
//                     <input
//                         type="range"
//                         min="0"
//                         max="100"
//                         value={minValue}
//                         onChange={handleMinChange}
//                         className="absolute w-full appearance-none bg-transparent pointer-events-auto top-0 z-20"
//                         style={{ left: "0%", width: "50%" }} // Restrict movement to first half
//                     />

//                     {/* Max Range Input */}
//                     <input
//                         type="range"
//                         min="0"
//                         max="100"
//                         value={maxValue}
//                         onChange={handleMaxChange}
//                         className="absolute w-full appearance-none bg-transparent pointer-events-auto top-0 z-10"
//                         style={{ right: "0%", width: "50%" }} // Restrict movement to second half
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DoubleRangeSlider;
