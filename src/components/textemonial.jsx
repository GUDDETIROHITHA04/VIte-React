import React from "react";
import sisyphus from "../assets/sisyphus.png";
import avatar2 from "../assets/avatar2.png";
export default function Textemonial() {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="container mx-auto py-24 ">
        <div className="flex justify-center items-center flex-col gap-10">
          <img src={sisyphus} alt="logo" />
          <h1 className="font-medium text-5xl text-center">
            We’ve been using Untitled to kick start every new project and can t
            imagine working without it.
          </h1>
          <div className="flex justify-center items-center flex-col">
            <img src={avatar2} alt="avatar" className="rounded-full" />
            <h2 className="font-semibold text-lg">Candice Wu</h2>
            <p className="font-normal text-base text-gray-600">
              Product Manager, Sisyphus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
