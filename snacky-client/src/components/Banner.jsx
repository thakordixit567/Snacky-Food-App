import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
     <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">

          {/*texts*/}
     <div className="md:w-1/2 space-y-7 ">
      <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
      Explore the Exquisite Enjoyment of  <span className="text-orange">Food.</span></h2>
      <p className="text-xl text-[#4A4A4A]">
      Discover a world where every plate tells a tale of culinary expertise and dedicated artistry. k
      </p>
      <button className="btn bg-orange px-8 py-3 font-semibold text-white rounded-full">Order Now</button>
     </div>

          {/* Images */}
     <div className="md:w-1/2">Right</div>
     </div>
    </div>
  );
};

export default Banner;
