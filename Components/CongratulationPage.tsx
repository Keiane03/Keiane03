"use client";

import React from "react";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import Image from "next/image";

const CongratulationPage: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col md:bg-[url('/Images/Background-with-Flowers.png')] bg-[url('/Images/MobileFlowers.png')]"
      style={{
        backgroundAttachment: "fixed", // Keeps the background fixed as you scroll
        backgroundPosition: "center", // Centers the image
        backgroundSize: "cover", // Ensures the background covers the entire screen
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh", // Makes the div take the full height of the viewport
          textAlign: "center",
        }}
      >
        <Image
          src="/Images/BINIxSURF-logo.png"
          alt="BINIxSURF logo"
          width={300}
          height={100}
          className="mb-[-50px] md:flex hidden" // Adjust the margin to control space
        />

        <Image
          src="/Images/BINIxSURF-vertical.png"
          alt="BINIxSURF logo"
          width={100}
          height={100}
          className=" mb-[100px] md:hidden" // Adjust the margin to control space
        />

        <Image
          src="/Images/CONGRATULATIONS.png"
          alt="Congratulation logo"
          width={1000}
          height={100}
          className="md:flex hidden"
        />

        <Image
          src="/Images/CONGRATULATIONS.png"
          alt="Congratulation logo"
          width={350}
          height={100}
          className="md:hidden mb-10"
        />

        <div className="flex flex-col gap-7 mb-10 text-center items-center justify-center">
          <span className="text-[#1B2375] text-xl md:text-3xl font-semibold">
            You have submitted an Entry
          </span>
          <span className="md:flex hidden text-[#1B2375] w-full px-12 md:text-[15px] ">
            *All entries are subject to verification please wait for the email
            or message <br /> of confirmation and redemption code
          </span>
          <span className="md:hidden text-[#1B2375] w-full px-12 text-[11px] md:text-[15px] ">
            *All entries are subject to verification please wait for the email
            or message of confirmation and redemption code
          </span>
        </div>
        <div className="cursor-pointer text-[#1B2375] font-medium">
          <Link href="/" className="flex flex-row items-center gap-1">
            SUBMIT MORE ENTRIES
            <IoMdArrowBack className="transform rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CongratulationPage;
