import React from 'react'
import productImg from '../assets/content-img/Ecommerce UI Kit Image 1.png'
import Product from './Product';


const OurProducts = () => {
  const products=[
    {
      img: productImg,
      name: 'Sylterine',
      des:  'Stylish cafe chair',
      price: 'Rs.5000',
      id: Math.random()*100
    },
    {
      img: productImg,
      name: 'Sylterine',
      des:  'Stylish cafe chair',
      price: 'Rs.5000',
      id: Math.random()*100
    },
    {
      img: productImg,
      name: 'Sylterine',
      des:  'Stylish cafe chair',
      price: 'Rs.5000',
      id: Math.random()*100
    },
    {
      img: productImg,
      name: 'Sylterine',
      des:  'Stylish cafe chair',
      price: 'Rs.5000',
      id: Math.random()*100
    },
    {
      img: productImg,
      name: 'Sylterine',
      des:  'Stylish cafe chair',
      price: 'Rs.5000',
      id: Math.random()*100
    },
    {
      img: productImg,
      name: 'Sylterine',
      des:  'Stylish cafe chair',
      price: 'Rs.5000',
      id: Math.random()*100
    },
    {
      img: productImg,
      name: 'Sylterine',
      des:  'Stylish cafe chair',
      price: 'Rs.5000',
      id: Math.random()*100
    },
    {
      img: productImg,
      name: 'Sylterine',
      des:  'Stylish cafe chair',
      price: 'Rs.5000',
      id: Math.random()*100
    },
  ];


  
  return (
    <>
      <div className='flex flex-col items-center mt-12'>

        <h2 className=' font-bold text-[40px] mb-6'>Our Products</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5'>
            {products.map((p)=><Product img={p.img} name={p.name} des={p.des} price={p.price} key={p.id} id={p.id} />)}
        </div>
          <button className='bg-[#B88E2F] rounded-3xl px-5 py-1 mt-5'>Show more</button>
      </div>
    </>

  )
}

export default OurProducts