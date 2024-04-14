import React from 'react'
import dinning from '../assets/content-img/Ecommerce UI Kit Image 100.png';
import living from '../assets/content-img/Ecommerce UI Kit Image 101.png';
import bedroom from '../assets/content-img/Ecommerce UI Kit Image 106.jpg';


const Contents = () => {
  return (
    <>
    <div>
        <div className='flex flex-col items-center mt-14'>
        <h3 className=' font-bold text-[32px]'>Browse The Range</h3>
        <p className='text-[20px] font-extralight text-[#666666] mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex gap-3'>
            <div className='flex flex-col items-center'>
                <img src={dinning} alt="Dinning room related" className='rounded-2xl ' />
                <h3 className=' font-bold text-[24px] mt-6'>Dinning</h3>
            </div>
            <div className='flex flex-col items-center'>
                <img src={living} alt="Dinning room related" className='rounded-2xl ' />
                <h3 className=' font-bold text-[24px] mt-6'>Living</h3>
            </div>
            <div className='flex flex-col items-center'>
                <img src={bedroom} alt="Dinning room related" className='rounded-2xl ' />
                <h3 className=' font-bold text-[24px] mt-6'>Bedroom</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contents