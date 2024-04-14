import React from 'react'

const Product = ({img, name, des, price }) => {
  return (
    <>
    <div>
        <img src={img} alt="This is the product" />
        <h4>{name}</h4>
        <p>{des}</p>
        <p>{price}</p>
    </div>
    </>
  )
}

export default Product