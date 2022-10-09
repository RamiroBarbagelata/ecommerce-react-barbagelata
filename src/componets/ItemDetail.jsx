import React, { useState } from 'react'
import ItemCount from './ItemCount';
import { Button, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ThemeProvider } from '@emotion/react';


const ItemDetail = ({ productDetail }) => {
    const [count, setCount] = useState(1);
    const [buy, setBuy] = useState(false);
    const { title, description, price, stock, pictureUrl, id } = productDetail;
    const { addItem } = useContext(CartContext);
    const theme = createTheme({
        palette: {
            neutral: {
                main: '#000000',
                contrastText: '#FFFFFF',
            },
        },
    });

    const onAdd = () => {
        let purchase = {
            id,
            title,
            price,
            stock,
            pictureUrl,
            quantity: count

        }
        setBuy(true)
        addItem(purchase)
    }
    const navigate = useNavigate();

    let pricePoint = new Intl.NumberFormat('de-DE').format(price)



    return (
        <div className='ItemDetail'>
            <img className='itemDetailPicture' src={pictureUrl} alt={title} />
            <div className='detail'>
                <h1>{title} </h1>
                <p>{description}</p>
                <h3 className='price'>${pricePoint}</h3>
                <p>Stock: {stock} disponibles</p>

                {!buy
                    ? <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount}/>
                    : 
                        <ThemeProvider theme={theme}>
                        <div className='goToCart'>

                        <div className='buttonsItemDetail'>
                        <Button className="goToCart" size="large" color="neutral" variant="contained" onClick={() => navigate('/cart')}> Ir al Carrito </Button>
                        <Button className="contShopping" size="large" color="neutral" variant="contained" onClick={() => navigate('/')}> Continuar comprando </Button>
                        </div>
                    </div>
                    </ThemeProvider>
                }
            </div>
        </div>
    )
}

export default ItemDetail