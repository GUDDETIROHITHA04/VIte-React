import React from "react";

import chartBreakoutSquare from "../assets/icons/chart-breakout-square.svg";
import command from "../assets/icons/command.svg";
import messageChatCircle from "../assets/icons/message-chat-circle.svg";
import messageHeartCircle from "../assets/icons/message-heart-circle.svg";
import messageSmileCircle from "../assets/icons/message-smile-circle.svg";
import zap from "../assets/icons/zap.svg";

export default function Featers() {
  return (
    <div className="container py-24 mx-auto flex justify-center items-center gap-16 flex-nowrap flex-col">
      <div className="px-12 space-y-3">
        <h2 className="text-base text-purple-700 text-center font-medium">
          Features
        </h2>
        <h1 className="font-semibold text-3xl text-center">
          Analytics that feels like it’s from the future
        </h1>
        <div>
          <p className="font-normal text-xl text-center text-gray-700">
            Powerful, self-serve product and growth analytics to help you
            convert, engage,
          </p>
          <p className="font-normal text-xl text-center text-gray-700">
            and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>
      </div>

      <div className="flex justify-center  gap-8 items-center flex-wrap ">
        <div className="max-w-96 max-h-44 space-y-4 felx justify-between items-center w-full">
          <div className="flex justify-center items-center">
            <img
              src={messageChatCircle}
              alt=""
              className="border p-2 rounded-md"
            />
          </div>
          <h1 className="font-semibold text-xl text-center">
            Share team inboxes
          </h1>
          <p className="font-normal text-base text-center text-gray-700">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
        </div>
        <div className="max-w-96 max-h-44 space-y-4 felx justify-center items-center w-full">
          <div className="flex justify-center items-center">
            <img src={zap} alt="" className="border p-2 rounded-md" />
          </div>
          <h1 className="font-semibold text-xl text-center">
            Deliver instant answers
            </h1>
            <p className="font-normal text-base text-center text-gray-700">
            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>
           
        </div>
        <div className="max-w-96 max-h-44 space-y-4 felx justify-center items-center w-full">
          <div className="flex justify-center items-center">
            <img
              src={chartBreakoutSquare}
              alt=""
              className="border p-2 rounded-md"
            />
          </div>
          <h1 className="font-semibold text-xl text-center">
            Manage your team with reports
            </h1>
            <p className="font-normal text-base text-center text-gray-700">
            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>

        </div>
        <div className="max-w-96 max-h-44 space-y-4 felx justify-center items-center w-full">
          <div className="flex justify-center items-center">
            <img
              src={messageSmileCircle}
              alt=""
              className="border p-2 rounded-md"
            />
          </div>
          <h1 className="font-semibold text-xl text-center">
          Connect with customers
          </h1>
          <p className="font-normal text-base text-center text-gray-700">
          Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
        </div>
        <div className="max-w-96 max-h-44 space-y-4 felx justify-center items-center w-full">
          <div className="flex justify-center items-center">
            <img src={command} alt="" className="border p-2 rounded-md" />
          </div>
          <h1 className="font-semibold text-xl text-center">
            Connect the tools your team already used
          </h1>
          <p className="font-normal text-base text-center text-gray-700">
          Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
          </p>
        </div>
        <div className="max-w-96 max-h-44 space-y-4 felx justify-center items-center w-full">
          <div className="flex justify-center items-center">
            <img
              src={messageHeartCircle}
              alt=""
              className="border p-2 rounded-md"
            />
          </div>
          <h1 className="font-semibold text-xl text-center">
            Our People Make the difference
          </h1>
          <p className="font-normal text-base text-center text-gray-700">
          We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
        </div>
      </div>
    </div>
  );
}
