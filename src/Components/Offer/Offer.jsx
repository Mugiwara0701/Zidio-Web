import React from 'react'
import ServiceSwiper from './ServiceSwiper'

function Offer() {
  return (
    <div className="relative">
      <img src="https://zidio.in/assets/images/home-2/service-bg.png" alt="" />
      <span className='absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-semibold text-[40px]'>IT Support For Business</span><br /><br /><br />
      <span className='absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-700 text-center font-bold text-[80px] font-sans'>What we are Offering</span> 
      <ServiceSwiper/>
    </div>
  )
}

export default Offer