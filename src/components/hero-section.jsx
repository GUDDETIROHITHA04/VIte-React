// import React from "react";
import hero from "../assets/hero.png";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
export default function HeroSection() {
  return (
    <div className="container mx-auto">
      <div className="h-16"></div>
      <div className="flex min-h-screen  flex-col space-y-10">
        <div className="flex justify-center items-center">
          <div className="space-y-6 flex items-center flex-col mt-16">
            <button className="inline-block border  bg-purple-100 text-purple-700 p-1 px-2 text-xs rounded-full  border-purple-300">
              <span className="bg-white px-1 border rounded-full border-purple-300">
                New Features
              </span>
              <span className="px-1">Check out the team dashboard</span>
            </button>
            <h1 className="text-4xl font-medium text-center md:text-6xl">
              Beautiful analytics to grow smarter
            </h1>
            <div className="text-gray-500 font-medium text-center">
              <p>
                Powerful, self-serve product and growth analytics to help you
                convert, engate,
              </p>
              <p>and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div className="space-x-2">
              <button className="border px-4 py-2 rounded-md font-medium text-gray-700">
                <PlayCircleOutlineIcon/> Demo
              </button>
              <button className=" font-medium bg-purple-700 text-white px-4 py-2 rounded-md">
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={hero} alt="" className="w-full h-full " />
        </div>
      </div>
    </div>
  );
}
