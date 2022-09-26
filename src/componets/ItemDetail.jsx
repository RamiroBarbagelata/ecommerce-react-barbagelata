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

    // const resultados = useContext(CartContext);
    // const isInCart = resultados.isInCart;





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