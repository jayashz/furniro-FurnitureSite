import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contents from "../components/Contents";
import Ourproducts from "../components/OurProducts";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { CartContext } from "../store/cart-context";
import { useState } from "react";
import { PRODUCTS } from "../components/dummy-products";


const Home = () => {

  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const data = localStorage.getItem("Thedata");
    setCart(JSON.parse(data));
  },[]);

  const addToCartHandler = (id) => {
    setCart((prevCartItems) => {
      const updatedCart = [...prevCartItems];

      const existingCartItemsIndex = updatedCart.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItems = updatedCart[existingCartItemsIndex];

      if (existingCartItems) {
        const updatedItem = {
          ...existingCartItems,
          quantity: existingCartItems.quantity + 1,
        };
        updatedCart[existingCartItemsIndex] = updatedItem;
      } else {
        const product = PRODUCTS.find((p) => p.id === id);
        updatedCart.push({
          id: product.id,
          name: product.name,
          des: product.des,
          price: product.price,
          img: product.img,
          quantity: 1,
        });
      }
      localStorage.setItem("Thedata",JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  console.log(cart);
  const ctxValue = {
    items: cart.items,
    addItemToCart: addToCartHandler,
  };
  return (
    <CartContext.Provider value={ctxValue}>
      <Navbar />
      <Hero />
      <Contents />
      <Ourproducts />
      <Gallery />
      <Footer />
    </CartContext.Provider>
  );
};

export default Home;
