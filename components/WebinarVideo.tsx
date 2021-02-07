import React from "react";

export const WebinarVideo = (props) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-4 items-center justify-center flex-col ">
        <div>
          <h1
            className={"title-font text-2xl lg:text-4xl md:mb-2 font-medium text-black text-center font-semibold "}
          >
            <span className={`${props.heading_features}`}>
            {props.heading}
            </span>
          </h1>
        </div>
        <iframe
          title={props.video_title}
          src={props.url}
          loading="lazy"
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="w-5/6 h-5/6 md:h-screen mb-5 object-cover object-center rounded clear-both overflow-hidden"
          // Vimeo: className="w-5/6 mb-5 object-cover object-center rounded clear-both overflow-hidden -mt-48 md:-mt-24 lg:mt-0"
        />

        <div className="text-center text-black text-md lg:text-xl lg:w-2/3 w-full font-semibold">
          {/* Vimeo: <div className="text-center text-black text-xl lg:w-2/3 w-full -mt-56 md:-mt-24 lg:mt-0 font-semibold">*/}
          <p className={`mb-8 leading-relaxed ${props.description_features}`}>
            {props.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebinarVideo;
