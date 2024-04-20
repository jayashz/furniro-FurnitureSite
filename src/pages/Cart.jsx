import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../store/cart-context";
import Navbar from "../components/Navbar";
import Cart_items from "../components/Cart_items";

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
            <div className="flex bg-[#F9F1E7] h-14 items-center p-6 gap-10 justify-between">
              <h4 className="ml-20">Product</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Subtotal</h4>
            </div>
            <div>
                {cart.map((i)=> <Cart_items key={i.id} {...i}/> )}

            </div>
          </div>
          <div className="basis-1/4 bg-[#F9F1E7] h-[20rem] p-12 flex items-center flex-col">
            <h3>Cart totals</h3>
            <div className="flex">
              <p>Subtotal</p>
              <p>{totalAmt}</p>
            </div>
            <div className="flex">
              <p>Total</p>
              <p>{totalAmt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
