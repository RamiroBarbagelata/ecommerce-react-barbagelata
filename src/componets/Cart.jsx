import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log('Carrito', cart)
  return (
    <>
      <div>
        <h1>PROXIMAMENTE CARRITO</h1>

      </div>
    </>

  )
}

export default Cart