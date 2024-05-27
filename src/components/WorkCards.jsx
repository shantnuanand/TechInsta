import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";

const WorkCards = () => {
  const data = [
    {
      num: 1,
      img: <FaGithub size="150px" />,
      title:
        "Upload your react github link or login via github to search your repos.",
    },
    {
      num: 2,
      img: <FaRegFileAlt size="150px" />,
      title: "You can choose to practice basics from our practice topics.",
    },
    {
      num: 3,
      img: <FaEnvelopeOpenText size="150px" />,
      title:
        "Get your thorough code report ready. Report will be sent to your email address within 4 hours",
    },
  ];
  return (
    <div className="flex flex-col gap-4 items-center md:flex-row justify-evenly p-2">
      {data.map((d) => (
        <div
          key={d.num}
          className="max-w-xs bg-base-300 w-80 shadow-xl rounded-md p-5"
        >
          <figure>
            <div className="flex items-center justify-center w-full h-[200px] object-cover rounded-t-md">
              {d.img}
            </div>
          </figure>
          <div className="p-4 h-[150px]">
            <h2 className="text-xl font-bold mb-2 ">{d.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;
