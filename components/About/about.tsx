import React from "react";
import Image from "next/image";

import recImg from "@/public/images/Rectangle 21.png";

export default function AboutPage(): React.JSX.Element {
  return (
    <div className="w-full bg-[#0A85EA] h-screen p-20  md:px-14 flex justify-center items-center">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between gap-10 flex-col md:flex-row">
          <div className="flex flex-col justify-start gap-10">
            <h1 className=" text-5xl font-semibold text-white">
              About our company
            </h1>
            <p className="text-sm font-semibold text-blue-900 underline">
              {" "}
              learn more {"->"}
            </p>
          </div>
          <div className="max-w-lg  md:max-w-md ">
            <p className="text-xs text-left mt-3 text-white leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. <br />
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. <br />
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <Image src={recImg} alt="about image" />
        </div>
      </div>
    </div>
  );
}
