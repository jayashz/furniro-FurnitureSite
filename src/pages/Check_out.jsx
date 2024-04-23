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

      <div className="mt-12 flex px-12 w-[100%] justify-between gap-10">
        <div className="basis-1/2">
          <form className="">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
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
                  htmlFor="website"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="visitors"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Unique visitors (per month)
                </label>
                <input
                  type="number"
                  id="visitors"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
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
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirm_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
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
