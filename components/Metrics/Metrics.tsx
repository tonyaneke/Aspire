import React from "react";

import icon1 from "@/public/icons/Icon.png";
import icon2 from "@/public/icons/Icon (1).png";
import icon3 from "@/public/icons/Icon (2).png";
import icon4 from "@/public/icons/Icon (3).png";
import Image from "next/image";

const metrics = [
  {
    icon: icon1,
    figure: "50M+",
    paragraph: "Wel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    bgColor: "#93E7FE",
  },
  {
    icon: icon2,
    figure: "$100M",
    paragraph:
      "Eis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam",
    bgColor: "#FFD978",
  },
  {
    icon: icon3,
    figure: "30%",
    paragraph:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
    bgColor: "#FAA9E4",
  },
  {
    icon: icon4,
    figure: "60+",
    paragraph: "Magni dolores eos qui ratione voluptatem sequi nesciunt",
    bgColor: "#FFA666",
  },
];

export default function Metrics() {
  return (
    <div className="w-[80vw] mx-auto  ">
      <div className="my-20">
        <h1 className="text-center text-5xl font-semibold">
          Our 12 years of together have given
          <br /> us much to be proud of
        </h1>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <ul className=" grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-8 ">
            {metrics.map((metric, index) => (
              <li
                key={index}
                className="shadow-lg  w-64 p-5 mb-5 h-64 bg-[#F6F5F8] rounded-xl"
              >
                <div
                  className="h-14 w-14 flex items-center justify-center rounded-lg mb-4"
                  style={{ backgroundColor: metric.bgColor }}
                >
                  <Image className="" src={metric.icon} alt="icon" />
                </div>
                <h1 className="font-medium text-3xl mb-5">{metric.figure}</h1>
                <p className="font-normal text-xs text-[#0F0049] opacity-40">
                  {metric.paragraph}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
