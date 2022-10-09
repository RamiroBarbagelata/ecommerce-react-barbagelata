import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';


const Cart = () => {
  const { cart, cartTotal, clear } = useContext(CartContext);
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
        neutral: {
            main: '#000000',
            contrastText: '#FFFFFF',
        },
    },
});

let pricePoint = new Intl.NumberFormat('de-DE').format(cartTotal())

  return (
    <>
      <div>
        {
          cart.length === 0
          ?<div className='bodyCart'>
            <h2>Tu carrito está vacío</h2>
            <h4>¿No sabés qué comprar? ¡Miles de productos te esperan!</h4>
            <Stack className='goBuy' direction="row" spacing={2}>
              <Button size="medium" variant="outlined" color="inherit" onClick={() => navigate('/')}>VAMOS DE COMPRAS</Button>
            </Stack>
            
          </div>
          :<div>
            <h2 className='cartTitle'>Detalle de tu compra</h2>
            {cart.map((shopItem) => <CartItem key={shopItem.id} shopItem={shopItem}/>)}
            <span className='totalPay'>Total a pagar: ${pricePoint}</span>
            <div>
            <ThemeProvider theme={theme}>
              <Stack className='buttonsCart' direction="row" spacing={2}>
              <Button size="medium" color="neutral" variant="contained" onClick={clear}>Vaciar Carrito</Button>
              <Button size="medium" color="neutral" variant="contained" onClick={() => navigate('/checkout')}>Finalizar Compra</Button>
            </Stack>
            </ThemeProvider>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Cart