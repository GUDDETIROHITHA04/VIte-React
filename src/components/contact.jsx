import React from "react";

export default function Contact() {
  return (
    <div className="bg-[#F9FAFB] py-24">
      <div className="flex justify-between items-center flex-col gap-8">
        <h1 className="font-semibold text-4xl">Start your free trial</h1>
        <p className="text-gray-700 font-normal text-xl">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="space-x-4">
          <button className="border-purple-700 text-gray-900 py-3 px-5 border rounded-lg text-base font-semibold">
            Learn More
          </button>
          <button className="bg-purple-700 text-white py-3 px-5 border rounded-lg text-base font-semibold">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
