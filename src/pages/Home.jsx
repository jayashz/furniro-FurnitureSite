import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Contents from '../components/Contents'
import OurProducts from '../components/OurProducts'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import { CartContext } from '../store/cart-context';
import { useState } from 'react'

const Home = () => {
  
  const [cart,setCart]=useState([]);

  const addToCartHandler = (id)=>{
    console.log('Added');
    setCart((prevCartItems)=>{
      const updatedCart=[...prevCartItems.items];

      const existingCartItemsIndex=updatedCart.findIndex((cartItem)=>cartItem.id===id);
      const existingCartItems= updatedCart[existingCartItemsIndex];
      if(existingCartItemsIndex){
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
        })
      }
    });
  };
  const ctxValue= {
    items: cart.items,
    addItemToCart: addToCartHandler
  }
  return (
    <CartContext.Provider value={{ctxValue}}>
      <Navbar />
      <Hero />
      <Contents />
      <OurProducts  />
      <Gallery />
      <Footer />
    </CartContext.Provider>
  )
}

export default Home