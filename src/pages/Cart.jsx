import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Cart_items from "../components/Cart_items";
import Footer from "../components/Footer"

const Cart = () => {
  const [cart, setCart] = useState([]);
  let totalAmt=0;
  for(let i in cart){
    totalAmt += Number(cart[i].price)*Number(cart[i].quantity);
  }
  useEffect(() => {
    const data = localStorage.getItem("Thedata");
    setCart(JSON.parse(data));
  }, []);

  const deleteCartHandler=(id)=>{
    setCart((prevCartItems)=>{
      const updatedCart = prevCartItems.filter(item =>item.id!= id);

      localStorage.setItem("Thedata",JSON.stringify(updatedCart));
      return updatedCart;
  
    });
    
  };
  const editQuantity=(id,q)=>{
    setCart((prevCartItems)=>{
      const updatedItems=[...prevCartItems];


      const updatedItemIndex=updatedItems.findIndex((i)=>i.id===id);
      const updatedItem={
        ...updatedItems[updatedItemIndex],
      }
      updatedItem.quantity+= q;
      if(updatedItem.quantity<=0){
        updatedItems.splice(updatedItemIndex,1);
      }
      else{
        updatedItems[updatedItemIndex]= updatedItem;
      }

      return updatedItems;
    });
  };

  return (
    <>
      <Navbar />
      <div className=" bg-shop-bgrnd w-screen bg-center h-[200px] mx-[-3rem] flex flex-col justify-center items-center">
        <h3 className=" text-[48px]">Cart</h3>
        <p className="font-bold">
          Home &gt; <span className=" font-extralight">Cart</span>
        </p>
      </div>
      {cart.length === 0 ? (
        <p>There are no items in the cart</p>
      ) : (
        <div className=" flex p-6 mt-12 gap-3 ">
          <div className=" basis-[70%]">
            <div className="flex bg-[#F9F1E7] h-14 items-center gap-10 justify-between px-[7rem]">
              <h4>Product</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Subtotal</h4>
            </div>
            <div>
                {cart.map((i)=> <Cart_items onEditQuantity={editQuantity} onDel={deleteCartHandler} key={i.id} {...i}/> )}
            </div>
          </div>
          <div className="basis-1/4 bg-[#F9F1E7] h-[20rem] p-10 flex items-center flex-col">
            <h3 className=" text-[32px] font-semibold">Cart totals</h3>
            <div className="flex w-full gap-2 justify-between mt-7">
              <p className=" font-bold">Subtotal</p>
              <p>Rs.{totalAmt}</p>
            </div>
            <div className="flex gap-2 justify-between w-full mt-5 items-center">
              <p className="font-bold">Total</p>
              <p className=" text-2xl">Rs.{totalAmt}</p>
            </div>
            <button className="border-2 border-black rounded-lg px-5 py-1 mt-8">Check Out</button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Cart;
