import Image from "next/image";
import React from "react";

const SmallBannerSection = () => {
  return (
    <div className="w-full px-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
      <Image
        src="/imgs/small-banner-1.jpg"
        className="rounded-xl"
        alt="medium-banner"
        width={300}
        height={100}
      />
      <Image
        src="/imgs/small-banner-2.jpg"
        className="rounded-xl"
        alt="medium-banner"
        width={300}
        height={100}
      />
      <Image
        src="/imgs/small-banner-5.jpg"
        className="rounded-xl"
        alt="medium-banner"
        width={300}
        height={100}
      />
      <Image
        src="/imgs/small-banner-6.jpg"
        className="rounded-xl"
        alt="medium-banner"
        width={300}
        height={100}
      />
    </div>
  );
};

export default SmallBannerSection;
