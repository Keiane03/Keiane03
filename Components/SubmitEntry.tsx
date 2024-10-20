"use client";

import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useState, useRef } from "react";
import { FaImage } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import Link from "next/link";
import dynamic from "next/dynamic";
import SampleReceipt from "./SampleReceipt";
import Image from "next/image";

const Term = dynamic(() => import("./TermsAndCondition"), {
  ssr: false, // Disable SSR to ensure it loads on the client side
});

const SubmitEntryPage: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [previousImage, setPreviousImage] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isTermOpen, setIsTermOpen] = useState(false);
  const [isSampleReceiptOpen, setSampleReceiptOpen] = useState(false);
  const [isProductOpenIndex, setIsProductOpenIndex] = useState<number | null>(
    null
  ); // Track the open product index
  const [products, setProducts] = useState([
    { sku: "", quantity: "", price: "" },
  ]);

  const [totalAmount, setTotalAmount] = useState(0);

  const openTerm = () => {
    setIsTermOpen(true);
  };

  const closeTerm = () => {
    setIsTermOpen(false);
  };

  const openSampleReceipt = () => {
    setSampleReceiptOpen(true);
  };

  const closeSampleReceipt = () => {
    setSampleReceiptOpen(false);
  };

  const handleSubmit = async () => {
    setLoading(true); // Start loading

    // Simulate a delay for demonstration (e.g., a network request)
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 seconds delay

    // After loading, you can navigate to another page or perform another action
    setLoading(false); // Stop loading

    // Directly redirect after loading
    window.location.href = "/CongratulationPage";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviousImage(imagePreview); // Save current image before replacing
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setImagePreview(previousImage); // Revert to the previous image
  };

  const handleAddProduct = () => {
    setProducts([...products, { sku: "", quantity: "", price: "" }]);
  };

  const handleProductChange = (
    index: number,
    field: keyof Product,
    value: string
  ) => {
    const newProducts = [...products];
    newProducts[index][field] = value;

    // Calculate the total amount whenever quantity or price is changed
    calculateTotal(newProducts);
    setProducts(newProducts);
  };

  const calculateTotal = (products: Product[]) => {
    let total = 0;
    products.forEach((product) => {
      const qty = parseFloat(product.quantity) || 0; // Convert to number
      const price = parseFloat(product.price) || 0; // Convert to number
      total += qty * price; // Calculate total
    });
    setTotalAmount(total); // Update total amount state
  };

  interface Product {
    sku: string;
    quantity: string;
    price: string;
  }

  const productsOptions = [
    {
      value: "FreshAndBloom",
      label: "Surf Fabric Conditioner Fresh and Bloom",
    },
    { value: "SunFresh", label: "Surf Power and Detergent Sun Fresh" },
    { value: "Antibac", label: "Surf Fabric Conditioner Antibac with Mint" },
  ];

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviousImage(imagePreview); // Save current image before replacing
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const [selectedProduct, setSelectedProduct] = useState("");

  const handleProductSelect = (optionLabel: string, index: number) => {
    setSelectedProduct(optionLabel);
    handleProductChange(index, "sku", optionLabel); // Update the product in the array
    setIsProductOpenIndex(null); // Close the dropdown after selecting
  };

  interface Product {
    sku: string;
    quantity: string;
    price: string;
  }

  const [isStoreOpen, setIsStoreOpen] = useState(false); // To toggle dropdown visibility
  const [selectedStore, setSelectedStore] = useState(""); // To store the selected option

  const [isProductOpen, setIsProductOpen] = useState(false);

  const stores = [
    {
      value: "RobinsonsPlaceManila",
      label: "Robinsons Place Manila, Ermita, Manila",
    },
    { value: "SMmegamall", label: "SM Supermarket Megamall" },
    {
      value: "smHypermarketMakati",
      label: "SM Hypermarket, Makati, Metro Manila",
    },
  ];

  const handleStoreSelect = (store: string) => {
    setSelectedStore(store);
    setIsStoreOpen(false); // Close the dropdown after selection
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/Images/Background-Flowers.png')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover", // Ensures the background covers the entire screen
      }}
    >
      <div className="flex pb-0 pt-7 pl-3 md:pt-7 md:pl-7 md:pb-3 items-center ">
        <Link href="/" className="flex items-center">
          <IoMdArrowBack className="size-4 md:size-8 md:cursor-pointer" />
          <span className="md:text-black text-transparent">
            Back to the Landing Page
          </span>
        </Link>
      </div>

      <div
        className="bg-[url('/Images/Redemption-Sheet.png')] bg-no-repeat bg-center h-[60px] md:h-[100px] w-full
                bg-[length:90%] 
                md:bg-[length:70%] 
                sm:bg-[length:30%]"
      ></div>
      <div className=" mx-5 md:mx-24 h-100% flex flex-col md:flex-row md:mt-5">
        <div className="w-full md:w-7/12 flex flex-col ">
          <div className="flex flex-row justify-between items-center gap-3">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-[#1B2375] font-medium text-sm">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="text-[#1B2375] focus:outline-none py-2 px-1 md:py-3 md:px-2 w-full rounded-[3px] text-xs"
                required
              />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center gap-3 mt-4">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-[#1B2375] font-medium text-sm">
                Mobile Number:
              </label>
              <div className="flex items-center">
                {/* Prefix +63 */}
                <span className="py-2 px-1 md:py-3 md:px-2 bg-white text-xs rounded-l-[3px] text-[#858C94]">
                  +63
                </span>
                {/* Input field for the rest of the mobile number */}
                <input
                  type="number"
                  className="bg-white focus:outline-none py-2 px-1 md:py-3 md:px-2 w-full rounded-r-[3px] text-xs"
                  maxLength={10} // Limit to 10 digits for Philippine numbers
                  required
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label className="mb-1 text-[#1B2375] font-medium text-sm">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="text-[#1B2375] focus:outline-none py-2 px-1 md:py-3 md:px-2 w-full rounded-[3px] text-xs"
                required
              />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center gap-3 mt-4">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-[#1B2375] font-medium text-sm">
                Store Name:
              </label>
              <div
                className="relative py-2 px-1 md:py-3 md:px-2 w-full rounded-[3px] text-xs border text-[#1B2375] bg-white cursor-pointer"
                onClick={() => {
                  setIsStoreOpen(!isStoreOpen);
                  if (isProductOpen) setIsProductOpen(false); // Close product dropdown if it's open
                }} // Toggle dropdown on click
              >
                {/* Display selected store or default placeholder */}
                {selectedStore ? selectedStore : "Select Store"}

                {/* Dropdown menu */}
                {isStoreOpen && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-[3px] z-10 text-base text-[#858C94]">
                    {stores.map((store, index) => (
                      <div
                        key={index}
                        onClick={() => handleStoreSelect(store.label)}
                        className="py-3 px-2 hover:bg-gray-200 cursor-pointer text-xs"
                      >
                        {store.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center gap-3 my-4">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-[#1B2375] font-medium text-sm">
                Purchase Date:
              </label>
              <input
                type="date"
                placeholder="MM/DD/YYYY"
                className="text-[#1B2375] py-2 px-1 md:py-3 md:px-2 w-full rounded-[3px] text-xs focus:outline-none uppercase"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-1 text-[#1B2375] font-medium text-sm">
                Receipt Number:
              </label>
              <input
                type="number"
                placeholder="Enter Receipt Number"
                className="text-[#1B2375] focus:outline-none py-2 px-1 md:py-3 md:px-2 w-full rounded-[3px] text-xs"
              />
            </div>
          </div>

          <div className="flex flex-col">
            {products.map((product, index) => (
              <div key={index}>
                {/* Conditionally render the label only for the first product (index === 0) */}
                <div className="mb-2">
                  {index === 0 && (
                    <label className="mb-1 text-[#1B2375] font-medium text-sm">
                      Surf Product Purchased
                    </label>
                  )}
                </div>

                {/* Combined flex container for SKU and inputs */}
                <div className="flex flex-row w-full gap-3">
                  {/* SKU Dropdown - Half width */}
                  <div className="flex flex-col w-[48%] md:w-[50%] relative">
                    {/* Custom Dropdown */}
                    <div
                      className="py-2 px-1 md:py-3 md:px-2 w-full rounded-[3px] text-xs text-[#858C94] bg-white cursor-pointer flex items-center justify-between"
                      onClick={() => {
                        // Toggle the dropdown
                        setIsProductOpenIndex(
                          isProductOpenIndex === index ? null : index
                        );
                        if (isStoreOpen) setIsStoreOpen(false); // Close store dropdown if it's open
                      }} // Toggle dropdown on click
                    >
                      {/* Truncated text for SKU */}
                      <p className="text-[#1B2375] truncate whitespace-nowrap overflow-hidden text-ellipsis w-[80%]">
                        {product.sku || "Select Product"}
                      </p>
                      <svg
                        className={`transform transition-transform duration-200 ${
                          isProductOpenIndex === index ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 10l5 5 5-5H7z" />
                      </svg>
                    </div>

                    {/* Dropdown menu */}
                    {isProductOpenIndex === index && (
                      <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-[3px] z-10 text-base text-[#858C94] ">
                        {productsOptions.map((productOption, optionIndex) => (
                          <div
                            key={optionIndex}
                            onClick={() =>
                              handleProductSelect(productOption.label, index)
                            }
                            className="py-3 px-2 hover:bg-gray-200 cursor-pointer text-xs truncate whitespace-nowrap overflow-hidden text-ellipsis"
                          >
                            {productOption.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Second and Third Divs for Qty and Price - 3/12 width each */}
                  <div className="flex flex-row gap-2 w-6/12">
                    {/* Quantity Input - 3/12 */}
                    <div className="flex flex-col w-full">
                      <input
                        type="number"
                        placeholder="Qty"
                        className="py-2 px-1 md:py-3 md:px-2 w-full rounded-[3px] text-xs focus:outline-none truncate whitespace-nowrap overflow-hidden text-ellipsis"
                        value={product.quantity}
                        max="999" // Limits the maximum value to 3 digits (999)
                        step="1" // Ensures only whole numbers (no floating-point values)
                        onChange={(e) => {
                          const value = e.target.value;
                          // Ensure the value is a whole number and within 3 digits
                          if (
                            value === "" ||
                            (Number(value) <= 999 && value.length <= 3)
                          ) {
                            handleProductChange(index, "quantity", value);
                          }
                        }}
                      />
                    </div>

                    {/* Price Input - 3/12 */}
                    <div className="flex flex-col w-full">
                      <input
                        type="number"
                        step="0.01" // Allows floating-point numbers
                        max="99999" // Limits the maximum value to 5 digits
                        placeholder="Price"
                        className="py-2 px-1 md:py-3 md:px-2 w-full rounded-[3px] text-xs focus:outline-none truncate whitespace-nowrap overflow-hidden text-ellipsis"
                        value={product.price}
                        onChange={(e) => {
                          const value = e.target.value;
                          // Allow empty input to let users delete all numbers
                          if (value === "") {
                            handleProductChange(index, "price", "");
                          } else if (
                            value.length <= 6 &&
                            parseFloat(value) <= 99999
                          ) {
                            handleProductChange(index, "price", value);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Button to Add Products */}
            <div className="justify-end flex mt-3 md:mb-24 mb-5 ">
              <div
                onClick={handleAddProduct}
                className="cursor-pointer flex flex-row items-center text-center justify-center w-[120px] md:w-[108px] bg-[#F28FA6] text-white gap-3 rounded-[3px] py-2 md:py-[3px] md:hover:bg-[#9DE1E5]"
              >
                <div className="flex items-center">
                  <FaSquarePlus className="text-white size-4 md:size-3" />
                </div>
                <div className="flex items-center">
                  <span className="text-[12px] md:text-[10px]">
                    Add Products
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-5/12 flex flex-col  ml-0 md:ml-10">
          <div className="flex flex-row md:flex-row w-full items-center mb-2 mt-5">
            <label className="text-[#1B2375] font-medium md:text-base text-[12px] mr-2">
              Total Amount of Surf Product Purchased:
            </label>
            <span className="ml-1 text-[12px] md:text-base text-[#1B2375] font-extrabold md:font-bold">
              ₱ {totalAmount.toFixed(2)} {/* Display total amount */}
            </span>
          </div>

          <div>
            <div className="flex flex-row justify-between">
              <span className="text-[#1B2375]">Upload Receipt:</span>
              <span
                className="text-xs text-pink-500 flex flex-row items-center font-bold cursor-pointer"
                onClick={openSampleReceipt}
              >
                See sample
                <IoMdArrowBack className="transform rotate-180 " />
              </span>
              {isSampleReceiptOpen && (
                <SampleReceipt onClose={closeSampleReceipt} />
              )}
            </div>

            <div
              className={`flex-col w-full h-64 justify-center ${
                imagePreview ? "" : "border-2 border-dashed"
              } border-[#F28FA6] rounded-lg flex ${
                imagePreview
                  ? "justify-start items-start ml-0 md:ml-10"
                  : "justify-center items-center"
              } mt-2`} // Center contents when no image, left-align image when uploaded
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {imagePreview ? (
                <Image
                  src="/Images/LoadingFlower.png"
                  alt="Loading"
                  width={200}
                  height={100}
                  className="spinner h-3/4 w-auto object-contain" // Image aligned to the left
                />
              ) : (
                <>
                  <div>
                    <FaImage className="size-14 text-[#F28FA6] bg-transparent" />
                  </div>
                  <div className="w-40 text-center mb-1">
                    <span className="text-[15px] text-[#1B2375]">
                      Drag&Drop image here or
                    </span>
                  </div>
                  <div className="mb-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      id="file-upload"
                      className="hidden" // Hide the default input
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center cursor-pointer px-3 border border-gray-300 rounded-md bg-[#F28FA6] text-white hover:bg-orange-500"
                    >
                      <span className="mr-2">📁</span> {/* Optional icon */}
                      <span className="text-[13px]">Choose a file</span>
                    </label>
                  </div>
                  <div className="w-52 text-center">
                    <span className="text-[13px] text-[#1B2375]">
                      Supported formats: PNG, TIFF, JPG, up to N MB
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Loading Overlay */}
          {loading && (
            <div className="md:flex hidden  items-center justify-center h-screen w-screen fixed top-0 left-0 bg-[#1B2375] bg-opacity-30 z-50">
              <Image
                src="/Images/LoadingFlower.png"
                alt="Loading..."
                width={300}
                height={100}
                className="spinner" // Ensure you have this spinner class for spinning effect
              />
            </div>
          )}

          {loading && (
            <div className="md:hidden flex items-center justify-center h-screen w-screen fixed top-0 left-0 bg-[#1B2375] bg-opacity-30 z-50">
              <Image
                src="/Images/LoadingFlower.png"
                alt="Loading..."
                width={200}
                height={100}
                className="spinner" // Ensure you have this spinner class for spinning effect
              />
            </div>
          )}

          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col md:flex-row justify-center items-center text-center gap-2 md:gap-10 w-full md:w-1/2 mt-5">
              {/* Submit Button */}
              <div className="w-full">
                <button
                  className={`flex items-center justify-center py-2 w-full md:w-[100px] text-center rounded text-white ${
                    isChecked
                      ? "bg-[#F28FA6] hover:bg-orange-500"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  onClick={handleSubmit} // Handle button click
                  disabled={!isChecked} // Disable when checkbox is not checked
                >
                  Submit
                </button>
              </div>

              {/* Reset Button */}
              <button
                className={`flex items-center justify-center px-7 py-2 w-full md:w-[100px] text-center rounded text-white ${
                  !imagePreview
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#F28FA6] w-full"
                }`}
                disabled={!imagePreview}
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>

          {/* Checkbox and Terms */}
          <div className="flex items-center justify-center text-center mt-4 md:mb-0 mb-10">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked} // Reflects if the checkbox is checked
              onChange={handleCheckboxChange} // Only changes the checked state when the user clicks the checkbox
              className="cursor-pointer form-checkbox h-3 w-3 text-[#F28FA6] border-gray-300 rounded focus:ring-[#F28FA6] focus:ring-opacity-50"
            />
            <label htmlFor="terms" className="ml-2 text-[#1B2375] font-medium">
              Do you agree to the{" "}
              <span
                onClick={(e) => {
                  e.preventDefault(); // Prevent any default link or label behavior
                  openTerm(); // Only open the terms without affecting the checkbox
                }}
                className="underline cursor-pointer"
              >
                Terms and Conditions
              </span>
            </label>
            {isTermOpen && <Term onClose={closeTerm} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitEntryPage;
