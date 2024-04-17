import React, { useContext } from 'react'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CartContext } from '../store/cart-context';

const Product = ({img, name, des, price, id}) => {
 
  const {addItemToCart} = useContext(CartContext);
  return (
    <>
    <div className='relative hover:shadow-md hover:scale-105 duration-100'>
        <img src={img} alt="This is the product" />
        <h4>{name}</h4>
        <p>{des}</p>
        <p>{price}</p>
        <button className='absolute right-6 bottom-5 bg-[#FF204E] hover:bg-[#d21339] p-2 rounded-full' onClick={()=>addItemToCart(id)}><MdOutlineAddShoppingCart /></button>
    </div>
    </>
  )
}

export default Product