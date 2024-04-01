"use client";

import React, { useEffect, useState } from "react";

export default function Input(): React.JSX.Element {
  const [isPhoneWidth, setIsPhoneWidth] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsPhoneWidth(window.innerWidth <= 768); // Assuming 768 is the width for phone screens
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="relative mx-10 md:mx-10 xl:mx-36 z-0">
      <input
        type="search"
        id="search"
        className="block w-full p-4 ps-10 py-6 text-sm xs:text-xs text-gray-900 border
         border-gray-300 rounded-full bg-white shadow-xl focus:border-blue-500"
        placeholder={isPhoneWidth ? "Email..." : "Enter email addr..."}
        required
      />
      <button
        type="submit"
        className="text-white absolute end-2.5 bottom-2 bg-[#FF3A61]
         hover:bg-red-800 focus:ring-4 focus:outline-none font-medium 
         rounded-full text-sm xs:text-xs px-4 py-4 "
      >
        {isPhoneWidth ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        ) : (
          "Get Started"
        )}
      </button>
    </div>
  );
}
