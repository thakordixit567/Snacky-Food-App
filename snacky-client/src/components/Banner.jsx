import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-slate-100 to-slate-100">
      <div className="py-14 flex flex-col md:flex-row justify-between items-center gap-3">
        {/*texts*/}
        <div className="md:w-1/2 space-y-7 ">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Explore the Exquisite Enjoyment of{" "}
            <span className="text-orange">Food.</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Discover a world where every plate tells a tale of culinary
            expertise and dedicated artistry.
          </p>
          <button className="btn bg-orange px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>

        {/* Images */}
        <div className="md:w-1/2">
          <img src="/images/Home/banner.png" className="w-100" alt="" />

          <div >
            <div className="flex bg-white py-1 px-2 rounded-2xl items-center gap-3">
              <img
                src="/images/Home/b-food1.png"
                className="rounded-2xl"
                alt=""
              />
              <div className="space-y-1">
                <h5> Spicy Nodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-red">₹180</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
