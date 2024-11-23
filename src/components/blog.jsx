import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
// import React from "react";
import avatar from "../assets/avatar.png";
import image from "../assets/image.png";
import B2 from "../assets/B2.png";
import B3 from "../assets/B3.png";

import A2 from "../assets/A2.png";
import A3 from "../assets/A3.png";
export default function Blog() {
  return (
    <div className="container mx-auto py-24 space-y-8">
      <div className="space-y-2">
        <div className="flex justify-between items-center ">
          <div>
            <p className="font-semibold text-base text-purple-700">Our blog</p>
            <h1 className="font-semibold text-4xl">Lastest blog posts</h1>
          </div>
          <button className="bg-purple-700 text-white py-3 px-5 border rounded-lg text-base font-semibold">
            View all posts
          </button>
        </div>
        <p className="font-normal text-xl text-gray-700">
          Tool and strategies modern teams need to help their companies grow.
        </p>
      </div>
      <div className="flex justify-between items-center gap-8 md:flex-row flex-col">
        <div className="max-w-96 flex justify-start items-start gap-4 flex-col">
          <img src={image} alt="" />
          <p className="font-semibold text-base text-purple-700">Design</p>
          <div className="flex justify-between items-center w-full text-2xl font-semibold">
            <h1>UX review presentations</h1>
            <ArrowUpRightIcon className="w-5 h-5" />
          </div>
          <p className="font-normal text-xl text-gray-700 text-justify">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
          <div className="flex items-center gap-2">
            <img src={avatar} alt="" className="w-[50%] h-[50%]" />
            <div>
              <h1 className="text-nowrap text-sm font-semibold">Olivia Rhye</h1>
              <p className="text-nowrap text-sm font-normal text-gray-700">
                20 Jan 2024
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-96 flex justify-start items-start gap-4 flex-col">
          <img src={B2} alt="" />
          <p className="font-semibold text-base text-purple-700">Product</p>
          <div className="flex justify-between items-center w-full text-2xl font-semibold">
            <h1>Migrating to Linear 101</h1>
            <ArrowUpRightIcon className="w-5 h-5" />
          </div>
          <p className="font-normal text-xl text-gray-700 text-justify">
          Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.
          </p>
          <div className="flex items-center gap-2">
            <img src={A2} alt="" className="w-[50%] h-[50%]" />
            <div>
              <h1 className="text-nowrap text-sm font-semibold">Phoenix Baker</h1>
              <p className="text-nowrap text-sm font-normal text-gray-700">
              19 Jan 2024
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-96 flex justify-start items-start gap-4 flex-col">
          <img src={B3} alt="" />
          <p className="font-semibold text-base text-purple-700">Software Engineering</p>
          <div className="flex justify-between items-center w-full text-2xl font-semibold">
            <h1>Building your API stack</h1>
            <ArrowUpRightIcon className="w-5 h-5" />
          </div>
          <p className="font-normal text-xl text-gray-700 text-justify">
          Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.
          </p>
          <div className="flex items-center gap-2">
            <img src={A3} alt="" className="w-[50%] h-[50%]" />
            <div>
              <h1 className="text-nowrap text-sm font-semibold">Lana Steiner</h1>
              <p className="text-nowrap text-sm font-normal text-gray-700">
                18 Jan 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
