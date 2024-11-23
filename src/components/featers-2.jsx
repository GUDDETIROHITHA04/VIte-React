import { ArrowRightIcon } from "@heroicons/react/24/outline";
import chartBreakoutSquare from "../assets/icons/chart-breakout-square.svg";
import messageChatCircle from "../assets/icons/message-chat-circle.svg";
import zap from "../assets/icons/zap.svg";
import mockupWrap from "../assets/mockup-wrap.png";
import screenMockup from "../assets/screen-mockup.png";
export default function Featers2() {
  return (
    <div className="container py-16 mx-auto">
      <div className="flex justify-center items-center flex-col gap-8">
        <h2 className="inline-block bg-purple-100 rounded-full p-2 py-0 text-purple-700 border border-purple-300 text-xl font-medium">
          Features
        </h2>
        <h1 className="font-semibold text-[32px]">
          Cutting edge features for advanced analytics
        </h1>
        <div className="text-center text-gray-700 font-normal text-xl">
          <p>
            Powerful, self-serve product and growth analytics to help you
            convert, engage,
          </p>
          <p>and retain more users. Trusted by over 4,000 startups.</p>
        </div>
      </div>
      <div className="flex justify-end items-center relative mt-8">
        <img src={screenMockup} alt="img" className="ml-10 w-[80%]" />
        <img
          src={mockupWrap}
          alt="img"
          className="absolute md:top-28 top-14 md:left-20 left-12 w-[25%] border-4 rounded-2xl border-black/90"
        />
      </div>
      <div className="mt-24">
        <div className="flex justify-center gap-8 items-center flex-wrap ">
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
            <div className="text-purple-700 font-semibold text-base flex justify-center items-center gap-1 cursor-pointer">
              <p>Learn more</p> <ArrowRightIcon className="w-4 h-4" />
            </div>
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
            <div className="text-purple-700 font-semibold text-base flex justify-center items-center gap-1 cursor-pointer">
              <p>Learn more</p> <ArrowRightIcon className="w-4 h-4" />
            </div>
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
            <div className="text-purple-700 font-semibold text-base flex justify-center items-center gap-1 cursor-pointer">
              <p>Learn more</p> <ArrowRightIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
