import React from 'react'

const Tesitimonials = () => {
  return (
    <div className='section-container'>
       <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          <div className='md:w-1/2'>
            <img src="/images/Home/testimonials/testimonials.png" alt="" />
          </div>
          <div className='md:w-1/2'>
          <div className='text-left md:w-4/5'>
          <p className='subtitle'>testimonials</p>
            <h2 className='title'>
            What Our Clients Have to Say About Us
            </h2>
            <blockquote className='my-5 text-secondary leading-[30px]'>
            “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
            </blockquote>
          </div>
          </div>
       </div>
    </div>
  )
}

export default Tesitimonials