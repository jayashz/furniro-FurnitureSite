import React from 'react'

const Cart_items = ({img, name, price,quantity}) => {
  return (
    <div className="flex justify-between p-1">
            <img className=" h-20 w-20" src={img} alt="This is the item" />
              <p className="ml-[-10rem]">{name}</p>
              <p>{price}</p>
              <p>{quantity}</p>
              <p>{price}</p>
    </div>
  )
}

export default Cart_items