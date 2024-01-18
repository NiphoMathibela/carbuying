import React from "react";
import Slider from "./Slider";
import PageDisplay from "./PageDisplay";

const HomeContent = () => {

  return (
    <div className="w-full">

      <div className="hidden xl:block">
        <div className=" font-semibold text-sm text-[#90A3BF] my-4 text-left">
          Popular Cars
        </div>
        <Slider />
      </div>
      <div className=" font-semibold text-sm text-[#90A3BF] my-4 text-left">
        Cars For Sale
      </div>

      {/* Filter bar and cars for sale */}

      <PageDisplay />
    </div>
  );
};

export default HomeContent;
