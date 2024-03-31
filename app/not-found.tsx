import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="font-extrabold text-red-700 text-5xl mt-52 w-screen flex justify-center items-center">
        404: PAGE NOT FOUND
      </h1>
      <Link href={"/dashboard"}>
        <p className="font-semibold text-center underline mt-5">Go Home</p>
      </Link>
    </div>
  );
}
