"use client";

import React from "react";
import Image from "next/image";

import clickup from "../../public/images/clickup.png";
import dropbox from "../../public/images/dropbox.png";
import twilio from "../../public/images/twilio.png";
import freshbooks from "../../public/images/freshbooks.png";
import github from "../../public/images/github.png";
import PageWrapper from "../Animation/PageWrapper";

const partners = [
  { img: clickup, id: 1, url: "https://clickup.com" },
  { img: dropbox, id: 2, url: "https://dropbox.com" },
  { img: twilio, id: 3, url: "https://twilio.com" },
  { img: freshbooks, id: 4, url: "https://freshbooks.com" },
  { img: github, id: 5, url: "https://github.com" },
];

export default function Endorsement() {
  return (
    <div className="w-full my-24 px-16 gap-10 flex flex-col justify-center">
      <PageWrapper>
        <div>
          <h3 className="text-center mb-5 font-md text-lg">
            Trusted by 100K plus customers
          </h3>
        </div>
        <ul className="flex flex-col gap-16 justify-around md:flex-row  items-center">
          {partners.map((img) => (
            <li className="" key={img.id}>
              <a href={img.url} target="_blank">
                <Image
                  src={img.img}
                  width={140}
                  alt={"parters logo"}
                  className=" object-cover"
                />
              </a>
            </li>
          ))}
        </ul>
      </PageWrapper>
    </div>
  );
}
