import React from "react";

const ServiceList = [
    {id:1, title: "Catering", des: "Delight your guests with our flavors and  presentation", image: "/images/Home/services/icon1.png"},
    {id:2, title: "Fast delivery", des: "We deliver your order promptly to your door", image: "/images/Home/services/icon2.png"},
    {id:1, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering ", image: "/images/Home/services/icon3.png"},
    {id:1, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", image: "/images/Home/services/icon4.png"}
];

const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* text */}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">
              Discover our culinary adventure and exceptional services.
            </h2>
            <p className="my-5 text-secondary leading-[30px]">
              We create unforgettable dining experiences and provide exceptional
              services by combining culinary artistry with warm hospitality. Our
              passion drives us to curate these unique experiences for our
              guests.
            </p>
            <button className="bg-orange font-semibold btn text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>

        {/* diffrent services */}
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {
                ServiceList.map((service) => (
                    <div key={service.id} className="shadow-md rounded-3xl
                    py-5 px-4 text-center space-y-2 text-orange cursor-pointer
                     hover:border-indigo-600 transition-all duration-200 hover:border bg-gradient-to-r from-slate-100 to-zinc-100">
                      <img src={service.image} alt="" className="mx-auto" />
                      <h5 className="pt-2 font-semibold">{service.title}</h5>
                      <p className="text-[#B24444]">{service.des}</p>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
