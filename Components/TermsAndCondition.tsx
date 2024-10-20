"use client";

import React from "react";

interface TermProps {
  onClose: () => void;
}

const Term: React.FC<TermProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white p-5 justify-evenly rounded-lg shadow-lg w-[90%] md:w-[53%] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl mr-4 font-bold text-[#1B2375] hover:text-[#F282A6]"
        >
          &times;
        </button>

        <div
          className="bg-[url('/Images/TermsAndCondition.png')] bg-no-repeat bg-center h-[60px] md:h-[120px] w-full
                bg-[length:50%] 
                md:bg-[length:50%] 
                sm:bg-[length:30%]"
        ></div>

        <br />

        <div className="bg-[#dceef0] rounded-md p-2 border-b-2 border-t-2 border-r-2 border-l-2 border-[#c6e9ed]">
          <ul className="space-y-4 font-nunito text-[#1B2375]">
            {[
              "Purchase period should be from October 27 to November 15, 2024.",
              "All redemption should be done via online registration platform. Online redemption platform will close on November 15, 2024 at 11:59pm or until supplies last.",
              "Even if receipt is beyond 150 pesos worth of Surf, you can only claim one set of photocards.",
              "One receipt = one photocard set (depending on purchase content).",
              "Consumers CAN show multiple receipts but all receipts must comply with purchase requirement.",
              "Valid receipts from SUPERMARKETS ONLY will be accepted.",
              "Sari sari stores and convenience stores are NOT included in this promotion.",
            ].map((text, index) => (
              <li key={index} className="flex items-center">
                <span className="font-bold bg-[#F282A6] text-white text-center rounded-md mr-2 p-1 flex items-center justify-center">
                  <span className="text-[#F282A6]">.</span>
                  {String(index + 1).padStart(2, "0")}
                  <span className="text-[#F282A6]">.</span>
                </span>

                {/* Conditionally add bold text */}
                <span className="text-xs text-left">
                  {index === 1 ? (
                    <>
                      All redemption should be done via online registration
                      platform. Online redemption platform will close on{" "}
                      <span className="font-bold md:font-normal">
                        November 15, 2024 at 11:59pm
                      </span>{" "}
                      or until supplies last.
                    </>
                  ) : (
                    text
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Term;
