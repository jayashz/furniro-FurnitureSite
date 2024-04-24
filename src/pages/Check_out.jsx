import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'

const Check_out = () => {
  let totalAmt=0;
  const [cart,setCart] =useState([]);
  useEffect(()=>{
      const res=localStorage.getItem("Thedata");
      setCart(JSON.parse(res));
  },[])

  for(let i in cart){
    totalAmt += Number(cart[i].price)* Number(cart[i].quantity);
  }
  return (
    <>
      <Navbar />

      <div className="mt-12 flex px-16 w-[100%] justify-between gap-10">
        <div className="basis-1/2">
          <form className="">
            <div className="grid gap-6 mb-6">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Flowbite"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="street"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Street
                </label>
                <input
                  type="text"
                  id="street"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your street"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  City
                </label>
                <input
                  type="text"
                  id="street"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your city"
                  required
                />
              </div>
              
            <div className="">
              <label
                htmlFor="zip_code"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                ZIP code
              </label>
              <input
                type="text"
                id="zipcode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ZIP code (ie.44203)"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            
            
            </div>
          </form>
        </div>
        <div className="basis-1/2 px-10  ">
          {cart.length!==0 && <div>
                <div className="flex justify-between w-full text-[24px] font-semibold mb-2">
                    <h4>Product</h4>
                    <h4>Subtotal</h4>
                </div>
                <div className="text-[#9F9F9F] mb-2 ">
                  {cart.map((i)=><p className="my-2" key={i.id}>{i.name}*{i.quantity}</p>)}

                </div>
                <div className="flex w-full justify-between items-center mb-2">
                    <p>Total</p>
                    <p className="text-3xl">Rs.{totalAmt}</p>
                </div>
                <hr />

            </div>}
            
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Check_out;
