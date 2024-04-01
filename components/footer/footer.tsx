import React from "react";

export default function Footer() {
  return (
    <div
      className="h-auto py-[10vh] bg-blue-950 md:px-44 lg:px-60 flex 
    px-10 flex-col gap-10 w-full  items-center"
    >
      <div
        className="flex flex-col justify-between  
      border-b pb-10 gap-10 lg:gap-0 md:flex-row"
      >
        <div className="flex text-white gap-10">
          <div>
            <h2 className="mb-2">Company</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <p className="text-sm font-light text-gray-500 hover:text-gray-400">
                  About
                </p>
              </li>
              <li>
                <p className="text-sm font-light text-gray-500 hover:text-gray-400">
                  Pricing
                </p>
              </li>
              <li>
                <p className="text-sm font-light text-gray-500 hover:text-gray-400">
                  Jobs
                </p>
              </li>
              <li>
                <p className="text-sm font-light text-gray-500 hover:text-gray-400">
                  Blog
                </p>
              </li>
              <li>
                <p className="text-sm font-light text-gray-500 hover:text-gray-400">
                  Careers
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2">Product</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <p className="text-sm font-light text-gray-500 hover:text-gray-400">
                  Sales software
                </p>
              </li>
              <li>
                <p className="text-sm font-light text-gray-500 hover:text-gray-400">
                  Features
                </p>
              </li>
              <li>
                <p className="text-sm font-light text-gray-500 hover:text-gray-400">
                  Privacy and security
                </p>
              </li>
              <li>
                <p className="text-sm font-light text-gray-500 hover:text-gray-400">
                  Marketplace
                </p>
              </li>
              <li>
                <p className="text-sm font-light text-gray-500 hover:text-gray-400">
                  API
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2">Help Center</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <p
                  className="text-sm font-light text-gray-500
                 hover:text-gray-400"
                >
                  Community
                </p>
              </li>
              <li>
                <p
                  className="text-sm font-light text-gray-500
                 hover:text-gray-400"
                >
                  Knowledge base
                </p>
              </li>
              <li>
                <p
                  className="text-sm font-light text-gray-500 
                hover:text-gray-400"
                >
                  Academy
                </p>
              </li>
              <li>
                <p className="text-sm font-light text-gray-500 hover:text-gray-400">
                  Support
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-white mb-2">Download</h2>
          <p className="text-wrap w-52 text-sm font-light text-gray-500 hover:text-gray-400">
            Join millions of people who build a fully integrated sales and
            maketing solution.
          </p>
        </div>
      </div>

      <div className="flex justify-between ">
        <p className=" text-gray-500 hover:text-gray-400 text-xs">
          Copyright @2023 Aspire. All Rights Reserved.
        </p>

        <p className=" text-gray-500 hover:text-gray-400 text-xs">
          Terms & Conditions ~ Privacy Policy
        </p>
      </div>
    </div>
  );
}
