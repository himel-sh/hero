import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-base-200 p-3 font-semibold text-gray-500 text-xl">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee pauseOnClick={true}>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut assumenda
        ad culpa, enim ducimus soluta, corporis quo possimus repellat reiciendis
        maxime quam, amet voluptate id quisquam recusandae excepturi facere
        repudiandae.
      </Marquee>
    </div>
  );
};

export default LatestNews;
