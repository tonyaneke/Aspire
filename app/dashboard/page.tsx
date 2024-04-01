"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) <p>Loading...</p>;

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div>
        <h1 className="text-2xl pt-10 pl-10 font-bold text-blue-900">
          Welcome {user?.firstName}
        </h1>
        <p className="text-center">Dashboard section coming soon...</p>
      </div>
    </div>
  );
}
