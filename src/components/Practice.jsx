import React from "react";
import Cards from "./Cards";

const Practice = () => {
  return (
    <div
      id="Practice"
      className="max-w-screen-2xl h-auto container mx-auto md:px-20 mt-[100px] font-body"
    >
      <div className="flex justify-center pt-2 pb-5">
        <h1 className="text-4xl pb-5">Practice Topics</h1>
      </div>
      <div className="pb-4 flex flex-wrap gap-2">
        <Cards />
      </div>
    </div>
  );
};

export default Practice;
