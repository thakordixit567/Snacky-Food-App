import React from 'react'

const Menu = () => {
  return (
    <div>
    
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
    <div className="py-48 flex flex-col items-center justify-center gap-8">

     

      {/* texts */}
      <div className="text-center px-4 space-y-7">
      <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
          Dive into Delights Of Delectable <span className="text-orange">Food</span>
        </h2>
        <p className="text-[#4A4A4A] text-xl">
        Each plate tells a tale of culinary expertise and dedicated artistry.
        </p>
        <button className="bg-orange font-semibold btn text-white px-8 py-3 rounded-full">
          Order Now
        </button>
      </div>
      
    </div>
  </div>
    </div>
  )
}

export default Menu