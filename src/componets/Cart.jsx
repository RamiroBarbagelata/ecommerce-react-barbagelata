import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Cart = () => {
  const { cart, cartTotal,clear } = useContext(CartContext);
  const goHome = useNavigate();
  return (
    <>
      <div>
        {
          cart.length === 0
          ?<div>
            <h2>Tu carrito está vacío</h2>
            <h4>¿No sabés qué comprar? ¡Miles de productos te esperan!</h4>
            <Stack className='goBuy' direction="row" spacing={2}>
              <Button size="medium" variant="outlined" color="inherit" onClick={() => goHome('/')}>VAMOS DE COMPRAS</Button>
            </Stack>
            
          </div>
          :<div>
            <h2>Detalle de tu compra</h2>
            {cart.map((shopItem) => <CartItem key={shopItem.id} shopItem={shopItem}/>)}
            <span className='totalPay'>Total a pagar: ${cartTotal()}</span>
            <div>
            <Stack className='buttonsCart' direction="row" spacing={2}>
              <Button size="medium" variant="outlined" color="inherit" onClick={clear}>Vaciar Carrito</Button>
              <Button size="medium" variant="outlined" color="inherit">Finalizar Compra</Button>
            </Stack>
            </div>
          </div>
        }

      </div>
    </>

  )
}

export default Cart