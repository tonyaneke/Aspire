import React from "react";
import Image from "next/image";

import dropIcon from "@/public/icons/dropdown.png";

export default function Faq() {
  return (
    <div className="bg-[#F6F5F8] w-full flex flex-col items-center py-20">
      <div>
        <h1 className="text-center mb-2 text-2xl font-bold text-[#0F0049]">
          Frequently asked questions
        </h1>
        <p className="text-xs text-[#111827] opacity-50">
          We have put together some commonly asked questions
        </p>
      </div>

      <div>
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <li
              key={i}
              className="flex justify-between  items-center p-6 gap-4 rounded-md shadow-md bg-white h-10"
            >
              <p className="text-xs font-semibold text-[#0F0049]">
                Smod tempor incididunt ut labore et dolore
              </p>
              <Image
                className="cursor-pointer"
                src={dropIcon}
                alt="dropdown icon"
                width={15}
                height={15}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
