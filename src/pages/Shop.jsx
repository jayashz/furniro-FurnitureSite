import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { GrSort } from "react-icons/gr";
import Footer from '../components/Footer'
import Product from "../components/Product";
import {PRODUCTS} from '../components/dummy-products';


const Shop = () => {

  return (
    <>
      <div className="flex flex-col items-center">
        <Navbar />
        <div className=" bg-shop-bgrnd w-screen bg-center h-[316px] mx-[-3rem] flex flex-col justify-center items-center">
          <h3 className=" text-[48px]">Shop</h3>
          <p className="font-bold">
            Home &gt; <span className=" font-extralight">Shop</span>
          </p>
        </div>
        <div className="h-[100px] w-screen bg-[#F9F1E7] mx-[-3rem] p-[3rem] flex items-center">
          <div className="flex items-center gap-3">
            <GrSort />
            <p>Filter</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10 grid-cols-2">
          {PRODUCTS.map((p) => (
            <Product
              {...p}
              key={p.id}
            />
          ))}
        </div>
        <div>
          <button className="bg-[#B88E2F] mt-7 rounded-xl px-6 py-1">
            Show more
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Shop;
