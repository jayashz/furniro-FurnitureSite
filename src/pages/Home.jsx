import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Contents from '../components/Contents'
import OurProducts from '../components/OurProducts'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import { CartContext } from '../store/cart-context';
import { useState } from 'react';
import productImg from '../assets/content-img/Ecommerce UI Kit Image 1.png'

const Home = () => {
  const products=[
    {
      img: productImg,
      name: 'Sylterine',
      des:  'Stylish cafe chair',
      price: 'Rs.5000',
      id: '1',
    },
    {
      img: productImg,
      name: 'Sylterine',
      des:  'Stylish cafe chair',
      price: 'Rs.5000',
      id: '2',
    },
    {
      img: productImg,
      name: 'Sylterine',
      des:  'Stylish cafe chair',
      price: 'Rs.5000',
      id: '3,'
    },
    {
      img: productImg,
      name: 'Sylterine',
      des:  'Stylish cafe chair',
      price: 'Rs.5000',
      id: '4',
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
  
  const [cart,setCart]=useState([]);

  const addToCartHandler = (id)=>{
    setCart((prevCartItems)=>{

      const updatedCart=[...prevCartItems];

      const existingCartItemsIndex=updatedCart.findIndex((cartItem)=>cartItem.id===id);
      const existingCartItems= updatedCart[existingCartItemsIndex];

      if(existingCartItems){
        const updatedItem={
          ...existingCartItems,
          quantity: existingCartItems.quantity+1,
        };
        updatedCart[existingCartItemsIndex] =updatedItem;
      }
      else{
        const product = products.find((p)=> p.id===id);
        updatedCart.push({
          id: product.id,
          name: product.name,
          des: product.des,
          price: product.price,
          img: product.img,
          quantity: 1,
        })
      }
      return updatedCart;
    });
  };
  const ctxValue= {
    items: cart.items,
    addItemToCart: addToCartHandler
  };
  console.log(cart);
  return (
    <CartContext.Provider value={ctxValue}>
      <Navbar />
      <Hero />
      <Contents />
      <OurProducts data={products} />
      <Gallery />
      <Footer />
    </CartContext.Provider>
  )
}

export default Home