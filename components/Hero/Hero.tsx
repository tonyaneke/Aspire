import React from "react";
import Image from "next/image";

import productImg from "../../public/images/product.png";
import Input from "../input";

export default function Hero() {
  return (
    <div className="border-b-2  flex flex-col gap-6 w-[80%]  ">
      <h1 className="text-blue-950 mt-20 mx-16 xl:text-5xl text-center lg:px-20 font-bold text-4xl">
        MultiPurpose Website Templates That boost your sales
      </h1>
      <p className="text-sm mx-14 text-center text-gray-400">
        Empowering Your Financial Journey through Customized Asset Management
        Services
      </p>
      <div className="md:mx-24 lg:mx-32">
        <Input />
      </div>
      <div>
        <p className="text-gray-400 text-center lg:px-24 font-light text-sm">
          ✅ No credit card required
        </p>
      </div>
      <div className="w-[80%] flex justify-center items-center mt-7 mx-auto">
        <Image
          src={productImg}
          className=" object-fit items-center"
          alt="product screenshot"
        />
      </div>
    </div>
  );
}
