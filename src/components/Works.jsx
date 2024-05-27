import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import WorkCards from "./WorkCards";

const Works = () => {
  return (
    <div
      id="Works"
      className="max-w-screen-2xl h-auto container mx-auto md:px-20 mt-[100px] font-body"
    >
      <div className="flex justify-center pt-2 pb-5">
        <h1 className="text-4xl pb-5">How it works</h1>
      </div>
      <div className="">
        <WorkCards />
      </div>
      <div className="mt-4 flex justify-center">
        <button className="btn btn-white bg-blue-500 text-white rounded-full px-8 font-bold ">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Works;
