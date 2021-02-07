import React from "react";

export const WebinarButton = (props) => {
  return (
    <div className=" text-center">
      <div className="md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto -mt-24 md:-mt-16 lg:-mt-6">
        <a href={props.link}>
          <button
            className={`h-24 px-6 m-16 lg:m-2 shadow bg-red-600 hover:bg-red-500 focus:shadow-outline focus:outline-none text-gray-200 py-4 text-xl lg:text-2xl xl:text-2xl font-semibold ${props.features}`}
          >
            {props.description}
          </button>
        </a>
      </div>
    </div>
  );
};

export default WebinarButton;
