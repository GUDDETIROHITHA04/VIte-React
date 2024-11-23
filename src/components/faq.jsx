import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
// import React from "react";
import avatar from "../assets/avatar.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";

export default function Faq() {
  return (
    <div className="container mx-auto py-24 space-y-10">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className="font-semibold text-4xl">Frequently asked questions</h1>
        <p className="text-gray-700 font-normal text-xl">
          Everything you need to know about the product and billing.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 max-w-[700px] mx-auto">
        <div className="p-4">
          <div className="flex justify-between items-center gap-2">
            <h3 className="text-lg font-medium ">
              Is there a free trial available?
            </h3>
            <MinusCircleIcon className="w-6 h-6 text-gray-700" />
          </div>
          <p className="mr-8 text-justify text-base font-normal text-gray-700">
            Yes, you can try us for free for 30 days. If you want, we will provide
            you with a free, personalized 30-minute onboarding call to get you
            up and running as soon as possible.
          </p>
        </div>
        <hr />
        <div className="p-4">
          <div className="flex justify-between items-center gap-2">
            <h3 className="text-lg font-medium ">
              Can I change my plan later?
            </h3>
            <PlusCircleIcon className="w-6 h-6 text-gray-700" />
          </div>
        </div>
        <hr />
        <div className="  p-4">
          <div className="flex justify-between items-center gap-2">
            <h3 className="text-lg font-medium ">
              What is your cancellation policy?
            </h3>
            <PlusCircleIcon className="w-6 h-6 text-gray-700" />
          </div>
        </div>
        <hr />
        <div className="  p-4">
          <div className="flex justify-between items-center gap-2">
            <h3 className="text-lg font-medium ">
              can other info be added to the invoice?
            </h3>
            <PlusCircleIcon className="w-6 h-6 text-gray-700" />
          </div>
        </div>
        <hr />
        <div className="  p-4">
          <div className="flex justify-between items-center gap-2">
            <h3 className="text-lg font-medium ">
              How does billing work?
            </h3>
            <PlusCircleIcon className="w-6 h-6 text-gray-700" />
          </div>
        </div>
        <hr />
        <div className="p-4">
          <div className="flex justify-between items-center gap-2">
            <h3 className="text-lg font-medium ">
              How do I change my account email?
            </h3>
            <PlusCircleIcon className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      </div>
      <div className="bg-[#F9FAFB] p-8 rounded-2xl flex justify-between items-center flex-col gap-6">
        <div className="flex justify-between items-center relative gap-4">
          <img src={avatar3} alt="" />
          <img src={avatar} alt="" className="absolute -top-3 left-7 w-[50%]" />
          <img src={avatar4} alt="" />
        </div>
        <div className="text-center">
          <h1 className="font-semibold text-xl">Still have questions?</h1>
          <p className="font-normal text-lg text-gray-700">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <button className="bg-purple-700 text-white py-3 px-5 border rounded-lg text-base font-semibold">
          Get in touch
        </button>
      </div>
    </div>
  );
}
