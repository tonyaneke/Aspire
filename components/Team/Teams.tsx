import React from "react";

import teams from "@/data";
import Image from "next/image";

export default function Teams() {
  return (
    <div className="h-auto my-10 w-auto flex flex-col items-center">
      <div className="flex flex-col items-center gap-5">
        <p className="bg-red-100 rounded-full px-3 text-[#F63A61] text-center font-medium">
          OUR TEAM
        </p>
        <div>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl text-[#0F0049] ">
            Meet our dream team
          </h1>
        </div>
        <p className="text-center opacity-40 text-wrap  text-[#0F0049] mx-10 text-xs w-[50%]">
          We’re dedicated group of Sed ut perspiciatis unde omnis iste natus
          error sit voluptatem accusantium doloremque laudantium
        </p>
      </div>
      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teams.map((person) => (
          <li
            className=" w-52 xs:flex-wrap  flex flex-col items-center"
            key={person.id}
          >
            <Image
              src={person.image.src}
              width={250}
              height={250}
              alt={person.name}
              className=""
            />
            <h2 className="text-center pt-2  font-semibold text-[#0F0049] text-xs">
              {person.name}
            </h2>
            <p className="text-center font-normal opacity-40 text-[#0F0049] text-xs">
              {person.designation}
            </p>
          </li>
        ))}
      </ul>
      <div
        className="h-[20vh] bg-[#F6F5F8] border mt-4 rounded-lg shadow-lg 
      border-[#EAEAEA] p-4 flex flex-col md:flex-row gap-8 
      md:justify-between mx-[10%] md:items-center lg:mx-10 md:px-10
       "
      >
        <div>
          <h1 className="font-semibold text-[#0F0049] flex-1">Join our team</h1>
        </div>
        <div className="md:w-[60%]">
          <div>
            <p className="text-xs mb-2 text-wrap font-normal opacity-40 text-[#0F0049]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <button className="text-xs text-[#F63A61]">
            View Current Openings {"->"}
          </button>
        </div>
      </div>
    </div>
  );
}
