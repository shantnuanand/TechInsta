import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import Practice from "./Practice";
import Works from "./Works";

const Hero = () => {
  return (
    <>
      <div id="Home" className="max-w-screen-2xl container mx-auto pt-20 md:px-20 px-10 flex flex-col-reverse md:flex-row scroll-smooth font-body">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="mt-[10px] md:mt-1">
            <h1 className="text-4xl md:text-5xl mb-1">React JS made Easy</h1>
            <h1 className="text-3xl md:text-4xl mb-1 text-blue-300 font-semibold">
              <Typewriter
                words={[
                  "Code for Quality.",
                  "Strive for Perfection.",
                  "Become a Pro.",
                ]}
                loop={5}
                cursor
              />
            </h1>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <h1 className="text-md md:text-xl font-thin text-left">
                Upload your React <FaGithub className="inline-block" /> link
                below and get your code assessment.
              </h1>
            </div>
            <div className="md:pr-5">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <div className="flex justify-center mt-5">
              <button className="btn btn-white bg-blue-500 text-white rounded-full px-8 font-bold ">
                <FaCloudUploadAlt className="text-xl text-white" /> UPLOAD
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://assets-global.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e2980924b93d6c_Tb_drawkit_Illustration_Mental_Health___Psychology-min.png"
            alt="image"
          />
        </div>
      </div>
      <Practice />
      <Works />
    </>
  );
};

export default Hero;
