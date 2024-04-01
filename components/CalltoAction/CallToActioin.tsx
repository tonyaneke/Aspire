import React from "react";
import Input from "../input";

export default function CallToActioin() {
  return (
    <div className="h-auto mt-10 flex justify-center items-center w-full bg-white">
      <div className="bg-[#0A85EA] auto py-5 w-[80vw] flex flex-col justify-center items-center rounded-lg">
        <h1 className="text-3xl mb-5 text-wrap text-center font-bold text-white mx-10">
          Get started with Aspire today
        </h1>
        <p className="w-[60%] text-center text-white font-normal">
          We are self-service data analytics software that lets you create
          visually appealing data visualisations and insightful dashboards in
          minutes.
        </p>
        <div className=" w-full md:px-30 lg:px-40 my-5 ">
          <Input />
        </div>
        <div>
          <p className="text-gray-400 text-center lg:px-24 font-light text-sm">
            ✅ No credit card required
          </p>
        </div>
      </div>
    </div>
  );
}
