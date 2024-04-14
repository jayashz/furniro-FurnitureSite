import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='w-screen h-[100vh] bg-black ml-[-3rem] bg-hero-bgrnd relative'>
        <div className='w-[643px] h-[443px] bg-[#FFF3E3] px-8 py-12 absolute right-[2rem] top-[10rem]' >
            <h5 className=' font-semibold text-[16px] tracking-[3px]'>New Arrival</h5>
            <h2 className='font-bold text-[52px] text-[#B88E2F]'>Discover our</h2>
            <h2 className='font-bold text-[52px] text-[#B88E2F]'>New  Collection</h2>
            <p className='text-[18px] mb-8 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <div className='h-[74px] w-[222px] bg-[#B88E2F] flex justify-center items-center rounded-lg font-semibold text-white'>Buy Now</div>
        </div>
    </div>
    </>
  )
}

export default Hero