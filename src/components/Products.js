import {useState} from 'react'
import Card from './Card.js'

function Products() {
    const products = [
        { name: "vest", price: 50 },
        { name: "jacket", price: 80 },
        { name: "sweater", price: 35 },
        { name: "tshirt", price: 30 },
        { name: "jumper", price: 78 },
        { name: "necklace", price: 7800 },
    ]
  return (
    <div className='product-list'>
        {
            products.map((product)=>(
                <Card name={product.name} price={product.price}/>
            ))
        }
    </div>
  )
}

export default Products