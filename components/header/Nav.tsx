"use client";

import { useState } from "react";
import { Pivot as Hamburger } from "hamburger-react";
import Link from "next/link";
import NavButton from "./NavButton";
import Image from "next/image";
import fullImage from "@/public/images/fullLogo.png";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  const { user, isLoaded } = useUser();

  const closeNavbar = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex sticky top-0 z-50 justify-between items-center bg-white h-20 md:px-20 px-8 w-full md:py-0">
        <Link
          href="/"
          onClick={closeNavbar}
          className="text-2xl cursor-pointer"
        >
          <Image
            src={fullImage}
            className="object-fit"
            alt="logo"
            height={100}
            width={80}
          />
        </Link>

        <div className="hidden lg:flex gap-5 text-blue-900 capitalize text-sm font-semibold items-center cursor-pointer">
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/company">Company</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <div className="px-7 lg:ml-20">
            {isLoaded && user ? (
              <div className="flex gap-5 items-center">
                <Link
                  className="shadow-lg rounded-full bg-red-600 w-28 font-semibold text-white text-sm hover:bg-red-700 px-4 py-2"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <NavButton />
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            direction="right"
            label="show menu"
            color={"black"}
          />
        </div>
      </div>
      {isOpen && (
        <div className="font-semibold bg-gray-700 z-10 w-full absolute text-white font-sm flex flex-col space-y-10 right-0 pt-20 p-5 lg:hidden">
          <Link href="/about" onClick={closeNavbar}>
            About
          </Link>
          <Link href="/team" onClick={closeNavbar}>
            Team
          </Link>
          <Link href="/company" onClick={closeNavbar}>
            Company
          </Link>
          <Link href="/pricing" onClick={closeNavbar}>
            Pricing
          </Link>
          <Link href="/contact" onClick={closeNavbar}>
            Contact
          </Link>

          {isLoaded && user ? (
            <>
              <Link
                className="shadow-lg rounded-full bg-red-600 w-28 font-semibold text-white text-sm hover:bg-red-700 px-4 py-2"
                href="/dashboard"
              >
                Dashboard
              </Link>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <NavButton />
          )}
        </div>
      )}
      <div className="border-b-2 w-[80%] lg:w-[91%] mx-auto" />
    </div>
  );
}
