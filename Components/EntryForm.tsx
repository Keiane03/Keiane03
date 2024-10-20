import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { FaFileAlt } from "react-icons/fa";
import { MdVideogameAsset } from "react-icons/md";

const Entry = () => {
  return (
    <div
      className="bg-[url('/Images/Mobile.png')] md:bg-[url('/Images/web.png')] relative min-h-screen bg-cover bg-center overflow-hidden flex flex-col items-center"
      style={{ backgroundImage: 'md:url("/Images/web.png") url(/Images/Mobile.png")' }}
    >

      {/* ButtonSection */}
      <div className="absolute top-1/2 sm:bottom-[-150px] left-0 w-full flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-5 px-4">
        {/* SUBMIT ENTRIES BUTTON */}
        
        <Link href="/SubmitEntry">
            <button
            className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto rounded-full shadow-gray-500 shadow-sm text-white font-semibold text-sm sm:text-lg"
            style={{ backgroundColor: "#F282A6" }}
            >
            <FaFileAlt className="mx-5 mr-2 size-8" />
            <span className="text-[#1B2375] font-medium">SUBMIT ENTRIES</span>
            </button>
        </Link>
        {/* MECHANICS BUTTON */}
        <Link href="/Mechanics">
            <button
            className="flex items-center justify-center px-9 py-2 sm:px-6 sm:py-0 w-full sm:w-auto rounded-full shadow-gray-500 shadow-sm text-white font-semibold text-sm sm:text-lg"
            style={{ backgroundColor: "#F282A6" }}
            >
            <MdVideogameAsset className="mx-1 mr-3 sm:size-14 size-9" />
            <span className="text-[#1B2375] font-medium">MECHANICS</span>
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Entry;