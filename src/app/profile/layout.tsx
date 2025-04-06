import AccountProfile from "@/components/profile/AccountProfile";
import ProfileInfo from "@/components/profile/ProfileInfo";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import React from "react";

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Toaster></Toaster>
      <main className="w-full max-sm:overflow-hidden max-w-[1500px] mx-auto sm:p-2 xl:px-20">
        <div className="grid xl:grid-cols-[2fr_3fr_3fr] md:grid-cols-3 grid-cols-1 gap-3">
          {/* side-bar*/}
          <div className="min-h-screen">
            {/* profileInfo */}
            <section className="m-3">
              <ProfileInfo />
            </section>
            <section className="relative w-[90%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto aspect-[3/1] m-3.5">
              {/* The aspect-[3/1] means the height is always 1/3 of the width. */}
              <Image
                className="object-cover ml-3"
                src="/imgs/sidebar-banner-3.jpg"
                fill
                alt="invitation"
                priority
              />
            </section>
            {/* accountInfo */}
            <section className="sticky top-28 self-start">
              <AccountProfile />
            </section>
          </div>
          {/* left col --md*/}
          {children}
        </div>
      </main>
    </>
  );
};

export default ProfileLayout;
