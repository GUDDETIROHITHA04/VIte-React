import React, { useState } from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export default function Nav() {
  const [showResources, setShowResources] = useState(false);

  const handleResourcesClick = () => {
    setShowResources(!showResources);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <div className="container mx-auto min-h-16 flex justify-between items-center w-full">
        <div className="flex-1 flex justify-between items-center">
          <div className="flex justify-between items-center gap-4">
            <img src={logo} alt="logo" />
            <div className="flex justify-between items-center gap-4 text-gray-700 font-medium">
              <a href="#">Home</a>
              <a href="#">
                Product<KeyboardArrowDownIcon />
              </a>
              <a href="#" onClick={handleResourcesClick}>
                Resources
                <KeyboardArrowDownIcon
                  className={showResources ? "rotate-180" : ""}
                />
              </a>
              <a href="#">Pricing</a>
            </div>
          </div>
          <img
            src={avatar}
            alt="avatar"
            className="cursor-pointer rounded-full"
          />
        </div>
      </div>
      {showResources && (
  <div className="resources-modal bg-white shadow-lg absolute top-16 left-1/2 transform -translate-x-1/2 w-[700px] z-50">
    <div className="flex flex-col gap-4 p-6">
      <div className="flex flex-col gap-6">
        {/* Blog */}
        <a
          href="#"
          className="text-gray-800 font-medium flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="ml-2">Blog</span>
        </a>
        <p className="text-gray-600 ml-7 max-w-[200px]">
          The latest industry news, updates, and info.
        </p>

        {/* Customer Stories */}
        <a
          href="#"
          className="text-gray-800 font-medium flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h18M3 14h18"
            />
          </svg>
          <span className="ml-2">Customer Stories</span>
        </a>
        <p className="text-gray-600 ml-7 max-w-[200px]">
          Learn how our customers are making big changes.
        </p>

        {/* Video Tutorials */}
        <a
          href="#"
          className="text-gray-800 font-medium flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-6.304-3.547A1 1 0 007 8.445v7.11a1 1 0 001.448.894l6.304-3.547a1 1 0 000-1.788z"
            />
          </svg>
          <span className="ml-2">Video Tutorials</span>
        </a>
        <p className="text-gray-600 ml-7 max-w-[200px]">
          Get up and running on new features and techniques.
        </p>
      </div>
    </div>
  </div>
)}




    </div>
  );
}

