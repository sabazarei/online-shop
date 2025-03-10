import Image from "next/image";
import React from "react";

export const MediumBanner = () => {
  return (
    <div className="w-full px-3  grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0 md:gap-8 justify-items-center">
      <Image
        src="/imgs/medium-banner-1.jpg"
        className="rounded-xl"
        alt="medium-banner"
        width={720}
        height={100}
      />
      <Image
        src="/imgs/medium-banner-2.jpg"
        className="rounded-xl"
        alt="medium-banner"
        width={720}
        height={100}
      />
    </div>
  );
};
