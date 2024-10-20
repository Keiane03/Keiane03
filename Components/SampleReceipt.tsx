"use client";

import React from "react";

interface SampleReceiptProps {
  onClose: () => void;
}

const SampleReceipt: React.FC<SampleReceiptProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white p-2 justify-center items-center rounded-lg shadow-lg w-[80%] md:w-[53%] relative flex flex-col text-center h-[60%] md:h-[80%]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl mr-4 font-bold text-[#1B2375] hover:text-[#F282A6]"
        >
          &times;
        </button>
        <h1 className="font-bold text-[#1B2375]  text-xl md:text-2xl mb-3">
          Sample Receipt
        </h1>
        <div className="flex flex-row w-11/12 mb-2">
          <div className="flex flex-row w-full">
            <div
              className="bg-[url('/Images/ReceiptExclamation.png')] bg-[#FBD9E4] bg-no-repeat bg-center w-2/12 md:w-1/12 rounded-l-lg 
               bg-[length:60%] md:bg-[length:40%] flex items-center justify-center"
            >
              {/* This div will automatically adjust height based on its parent and flex settings */}
            </div>
            <div className="md:w-11/12 w-10/12 text-[8px] md:text-[11px] text-left text-[#1B2375] font-medium py-2 pr-2 bg-[#FBD9E4] flex items-center rounded-r-lg">
              Photos should be clear and readable. Date of purchase, Supermarket
              of purchase, Surf Products Bought, and Total Price of all Surf
              products bought are readable. Unclear photos will result in
              invalid submission.
            </div>
          </div>
        </div>

        <div className="md:bg-[url('/Images/SampleReceipt.png')] bg-no-repeat bg-center h-full w-full bg-contain bg-[url('/Images/MobileSampleReceipt.png')]"></div>
      </div>
    </div>
  );
};

export default SampleReceipt;
