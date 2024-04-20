import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { CartContext } from '../store/cart-context';

const Cart_items = ({img, name, price,quantity,id}) => {
   const {deleteItemCart} = useContext(CartContext);
  return (
    <div className="flex p-1 items-center">
            <img className=" h-20 w-20" src={img} alt="This is the item" />
            <div className='flex justify-between w-[100%] ml-6'>
              <p>{name}</p>
              <p>{price}</p>
              <p>{quantity}</p>
              <p>{price}</p>
              <button className='mr-3' onClick={()=>{deleteItemCart(id) }}><MdDelete /></button>
            </div>
    </div>
  )
}

export default Cart_items