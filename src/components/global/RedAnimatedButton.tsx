import React from "react";

interface RedAnimatedButtonProps {
  text: string;
  icon: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}
const RedAnimatedButton: React.FC<RedAnimatedButtonProps> = ({
  text,
  icon,
  className,
  type = "button",
}) => {
  return (
    <div>
      <div className="m-3 my-5">
        <button
          type={type}
          className={`relative w-48 flex items-center justify-center rounded-[10px] bg-mainRed overflow-hidden md:flex group z-10 ${className}`}
        >
          <div className="absolute right-0 top-0 h-full w-10 bg-red-300 rounded-l-2xl group-hover:rounded-l-[10px] transition-all duration-300 ease-in-out group-hover:w-full"></div>

          <div className="text-xl absolute right-0 top-0 h-full w-10 grid place-items-center text-white z-10">
            {icon}
          </div>

          {/* Button Text */}
          <div className="flex-grow flex justify-center items-center text-white pr-8 z-10">
            {text}
          </div>
        </button>
      </div>
    </div>
  );
};

export default RedAnimatedButton;
