import React from "react";
import topics from "../file.json";

const Cards = () => {
  return (
    <div className="grid grid-cols-2 px-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {topics.map((topic, index) => (
        <div key={index} className="max-w-xs bg-base-300 shadow-xl rounded-md">
          <figure>
            <img
              src={topic.img}
              alt={topic.title}
              className="w-full h-48 object-cover rounded-t-md"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{topic.title}</h2>
            <p className="text-sm">{topic.desc.slice(0, 40)}...</p>
            <div className="mt-4 flex justify-end">
              <button className="btn btn-white bg-blue-500 text-white rounded-full px-8 font-bold ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
