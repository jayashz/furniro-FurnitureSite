import React, { useContext } from "react";
import { CartContext } from "../store/cart-context";
import Navbar from "../components/Navbar";

const Cart = () => {
    const cartCtx=useContext(CartContext);
  return (
    <>
      <Navbar />
      <div className=" bg-shop-bgrnd w-screen bg-center h-[200px] mx-[-3rem] flex flex-col justify-center items-center">
        <h3 className=" text-[48px]">Cart</h3>
        <p className="font-bold">
          Home &gt; <span className=" font-extralight">Cart</span>
        </p>
      </div>
    </>
  );
};

export default Cart;
