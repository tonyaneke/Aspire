import React from "react";

export default function Input(): React.JSX.Element {
  return (
    <div className="relative mx-10 md:mx-10 xl:mx-36">
      <input
        type="search"
        id="search"
        className="block w-full p-4 ps-10 py-6 text-sm xs:text-xs text-gray-900 border border-gray-300 rounded-full bg-white shadow-xl focus:border-blue-500"
        placeholder="Enter email addr..."
        required
      />
      <button
        type="submit"
        className="text-white absolute end-2.5 bottom-2.5 bg-[#FF3A61] hover:bg-red-800 focus:ring-4 focus:outline-none font-medium rounded-full text-sm xs:text-xs px-4 py-4  "
      >
        Get Started
      </button>
    </div>
  );
}
