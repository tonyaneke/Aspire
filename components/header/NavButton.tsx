import Link from "next/link";
import React from "react";

export default function NavButton() {
  return (
    <div className="flex gap-3">
      <Link href={"/dashboard"}>
        <button className="shadow-lg text-black w-20 h-10 font-semibold bg-slate-200 hover:bg-slate-400 text-sm rounded-full ">
          Login
        </button>
      </Link>
      <Link href={"/dashboard"}>
        <button className="shadow-lg rounded-full bg-red-600 font-semibold text-white text-sm hover:bg-red-700 px-4 py-2">
          Get Started
        </button>
      </Link>
    </div>
  );
}
