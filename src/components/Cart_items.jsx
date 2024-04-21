import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";

const Cart_items = ({img, name, price,quantity, id, onDel,onEditQuantity}) => {


   
  return (
    <div className="flex p-1 items-center">
            <img className=" h-20 w-20" src={img} alt="This is the item" />
            <div className='flex justify-between w-[100%] ml-6'>
              <p>{name}</p>
              <p>{price}</p>
              <p><button onClick={()=>{onEditQuantity(id,-1)}} >-</button>  <span className='p-2'>{quantity}</span>  <button onClick={()=>{onEditQuantity(id,+1)}}>+</button></p>
              <p>{price}</p>
              <button className='mr-3' onClick={()=>{onDel(id)}}><MdDelete /></button>
            </div>
    </div>
  )
}

export default Cart_items