import React, { useState } from 'react'
import ItemCount from './ItemCount';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const ItemDetail = ({ productDetail }) => {
    const [count, setCount] = useState(1);
    const [buy, setBuy] = useState(false);
    const { title, description, price, stock, pictureUrl, id } = productDetail;
    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
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



    return (
        <div className='ItemDetail'>
            <img src={pictureUrl} alt={title} style={{ width: '80rem', borderRadius: 10 }} />
            <div className='detail'>
                <h1>{title} </h1>
                <p>{description}</p>
                <h3 className='price'>${price}</h3>
                <p>Stock: {stock}</p>
                {!buy
                    ? <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount} />
                    : <div className='goToCart'>
                        <Button className="buyNow" size="large" color="inherit" variant="outlined" onClick={() => navigate('/cart')}> Ir al Carrito </Button>
                        <Button className="buyNow" size="large" color="inherit" variant="outlined" onClick={() => navigate('/')}> Continuar comprando </Button>
                    </div>
                }
            </div>
        </div>
    )
}

export default ItemDetail