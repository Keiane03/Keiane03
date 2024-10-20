import React from "react";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

const Mechanics = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/Images/Background-Flowers.png')`,
        backgroundAttachment: "fixed", // Keeps the background fixed as you scroll
        backgroundPosition: "center", // Centers the image
        backgroundSize: "cover", // Ensures the background covers the entire screen
      }}
    >
      <div>
        <div className="">
          <Link href="/">
            <div className="flex pb-0 pt-7 pl-3 md:pt-7 md:pl-7 md:pb-3 items-center">
              <IoMdArrowBack className="size-4 md:size-8 md:cursor-pointer" />
              <span className="md:text-black text-transparent">
                Back to the Landing Page
              </span>
            </div>
          </Link>
        </div>

        <div className=" flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[40%]  h-full flex flex-col mt-5 mb-20 items-center">
            <div
              className="bg-[url('/Images/Mechanics.png')] bg-no-repeat mb-10 md:mb-20 bg-center h-[80px] md:h-[150px] w-full
                    bg-[length:70%] 
                    md:bg-[length:90%] 
                    sm:bg-[length:30%]"
            ></div>

            <div className="md:hidden bg-white rounded-md text-[#1B2375] pt-1 w-[80%] h-[90px] flex items-center justify-center mt-5 mb-10 flex-col gap-4">
              <span className="text-center font-semibold text-sm">
                Single receipt with 150 total purchase <br />
                of any Surf products
              </span>
              <span className="text-center italic text-[11px]">
                Purchase period from October 27 to November 15, 2024
              </span>
            </div>

            <div className="md:hidden w-full flex items-center justify-center mb-7">
              <div className="relative w-[80%] flex items-center justify-center">
                {/* Circle Div - Moved to the Left */}
                <div className="absolute left-[-5px] w-16 h-16 rounded-full bg-pink-400 text-center flex justify-center items-center text-white font-bold z-10">
                  <div className="flex flex-col items-center justify-center gap-0">
                    <span className="text-[30px] leading-none">1</span>
                    <span className="text-[10px] font-normal">Photocard</span>
                  </div>
                </div>

                {/* Main Content Div */}
                <div className="bg-white rounded-xl border-[3px] border-[#1B2375] px-1 text-[#1B2375] w-11/12 h-full flex items-center justify-center py-3 ml-7">
                  <h1 className="text-[18px] text-center">
                    50 worth of Surf Fabcon
                  </h1>
                </div>
              </div>
            </div>

            <div className="md:hidden w-full flex items-center justify-center mb-10">
              <div className="relative w-[80%] flex items-center justify-center">
                {/* Circle Div - Moved to the Left */}
                <div className="absolute left-[-5px] w-16 h-16 rounded-full bg-pink-400 text-center flex justify-center items-center text-white font-bold z-10">
                  <div className="flex flex-col items-center justify-center gap-0">
                    <span className="text-[30px] leading-none">2</span>
                    <span className="text-[10px] font-normal">Photocards</span>
                  </div>
                </div>

                {/* Main Content Div */}
                <div className="bg-white rounded-xl border-[3px] border-[#1B2375] px-1 text-[#1B2375] w-11/12 h-full flex items-center justify-center py-3 ml-7">
                  <h1 className="text-[18px]">
                    50 worth of Surf Fabcon <br />Fresh and Bloom
                  </h1>
                </div>
              </div>
            </div>

            <div className="md:hidden bg-white rounded-xl border-[3px] border-[#1B2375] p-3 text-[#1B2375] pt-1 w-[80%] mb-10">
              {" "}
              {/* Add padding-top to push the text down */}
              <div className="flex flex-col text-[13px]">
                <span>
                  *Even if receipt is beyond 150 pesos worth of Surf, you can
                  only claim one set of photocards
                </span>
                <span>
                  *One receipt=one photocard set(depending on purchase content)
                </span>
                <span>
                  *Consumers CAN show multiple receipts but all receipts must
                  comply with purchase requirement
                </span>
              </div>
            </div>

            <div className="relative w-[90%] mx-auto mb-16">
              {" "}
              {/* Make the parent container relative */}
              {/* SUPERMARKETS ONLY Div */}
              <div className="absolute -top-5 md:-top-7 left-1/2 transform -translate-x-1/2 w-8/12 py-2 md:py-1 rounded-full bg-pink-400 text-center justify-center items-center text-white font-semibold text-[16px] md:text-[24px] z-10">
                SUPERMARKETS ONLY
              </div>
              {/* Second Div */}
              <div className=" bg-white rounded-xl border-[3px] md:border-[2px] border-[#1B2375] px-1 text-[#1B2375] pt-1">
                {" "}
                {/* Add padding-top to push the text down */}
                <h1 className="pt-5 text-[14px] md:text-base px-2 md:px-0">
                  *Valid receipts from SUPERMARKETS ONLY will be accepted
                </h1>
                <h1 className="pb-2 text-[14px] md:text-base px-2 md:px-0">
                  *Sari sari stores and convenience stores are NOT included in
                  this promotion
                </h1>
              </div>
            </div>

            <div className="relative w-[90%] mx-auto">
              {" "}
              {/* Make the parent container relative */}
              {/* SUPERMARKETS ONLY Div */}
              <div className="absolute -top-5 md:-top-7 left-1/2 transform -translate-x-1/2 w-8/12 py-2 md:py-1 rounded-full bg-pink-400 text-center justify-center items-center text-white font-semibold text-[16px] md:text-[24px] z-10">
                REDEMPTION
              </div>
              {/* Second Div */}
              <div className="bg-white rounded-xl border-[3px] md:border-[2px] border-[#1B2375] px-1 text-[#1B2375] pt-1">
                {/* Add padding-top to push the text down */}
                <ol className="list-decimal pl-5">
                  <li className="pt-5 text-[14px] md:text-base px-2 md:px-2">
                    Wait for an email with your redemption code
                  </li>
                  <li className="pb-2 text-[14px] md:text-base px-2 md:px-2">
                    Line up in BINIverse booth, show your redemption code and
                    your valid government ID to claim your photocards
                  </li>
                </ol>
                <h4 className="text-red-500 text-xs mb-2">
                  *All redemption should be done via online registration
                  platform. Online redemption platform will close on{" "}
                  <span className="font-bold">
                    November 15, 2024 at 11:59pm
                  </span>{" "}
                  or until supplies last
                </h4>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-[51%] items-center flex-col">
            <div className=" w-full text-[#1B2375] mb-28">
              <h1 className="text-[50px] font-semibold">
                Single receipt with 150 total purchase of any Surf Products
              </h1>
              <h2 className="italic">
                Purchase period from October 27 to November 15,2024
              </h2>
            </div>

            <div className="flex flex-row w-full gap-3">
              {/* First Div */}
              <div className="w-1/2 flex flex-col items-center justify-center">
                <div className="relative w-full">
                  {/* Circle Div */}
                  <div className="absolute -top-[68px] left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-pink-400 text-center justify-center items-center text-white font-bold text-[40px] z-10">
                    <div className="flex flex-col gap-0">
                      <span className="h-[50px]">1</span>
                      <span className="text-[12px]">Photocard</span>
                    </div>
                  </div>

                  {/* Main Content Div */}
                  <div className="bg-white rounded-xl border-[3px] md:border-[2px] border-[#1B2375] px-1 text-[#1B2375] pt-1 w-full h-full flex items-center justify-center min-h-[130px] min-w-[300px]">
                    <h1 className="text-[29px] text-center">
                      50 worth of
                      <br /> Surf Fabcon
                    </h1>
                  </div>
                </div>
              </div>

              {/* Second Div */}
              <div className="w-1/2 flex flex-col items-center justify-center">
                <div className="relative w-full">
                  {/* Circle Div */}
                  <div className="absolute -top-[68px] left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-pink-400 text-center justify-center items-center text-white font-bold text-[40px] z-10">
                    <div className="flex flex-col gap-0">
                      <span className="h-[50px]">2</span>
                      <span className="text-[12px]">Photocard</span>
                    </div>
                  </div>

                  {/* Main Content Div */}
                  <div className="bg-white rounded-xl border-[3px] md:border-[2px] border-[#1B2375] text-[#1B2375] pt-1 w-full h-full flex items-center justify-center min-h-[130px] min-w-[300px]">
                    <span className="text-[29px] text-center">
                      50 worth of Surf
                      <br />
                      Fabcon Fresh and Bloom
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Last Div at the bottom */}
            <div className="bg-white rounded-xl border-[3px] md:border-[2px] border-[#1B2375] text-[#1B2375] pt-1 w-full h-[90px] flex items-center justify-center mt-5">
              <div className="flex flex-col text-sm">
                <span>
                  *Even if receipt is beyond 150 pesos worth of Surf, you can
                  only claim one set of photocards
                </span>
                <span>
                  *One receipt=one photocard set(depending on purchase content)
                </span>
                <span>
                  *Consumers CAN show multiple receipts but all receipts must
                  comply with purchase requirement
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mechanics;
