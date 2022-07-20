import React from 'react'
import CartContext from "../CartContext"
import { useContext } from "react"

function Checkout() {
  const {items} = useContext(CartContext)

  return (
    <>
    
    <h2>Checkout</h2>
    <div className="shopping-bag">
      {items.map((item)=> (
        <div>
          <h2>{item.name}</h2>
          <h4>{item.price}</h4>
        </div>
      ))}
    </div>
    </>
  )
}

export default Checkout