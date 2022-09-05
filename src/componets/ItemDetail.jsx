import React from 'react'
import Counter from './ItemCount';

const ItemDetail = ({ productDetail }) => {
    const { title, description, price, stock, pictureUrl } = productDetail;
    const initial = 1;
    let totalShop = 0;
    const onAdd = (quantity) => totalShop === quantity;

    return (
        <div className='ItemDetail'>
            <img src={pictureUrl} alt={title} style={{ width: '80rem', borderRadius: 10 }} />
            <div className='detail'>
                <h1>{title} </h1>
                <p>{description}</p>
                <h3 className='price'>${price}</h3>
                <p>Stock: {stock}</p>
                <Counter stock={stock} initial={initial} onAdd={onAdd} />
            </div>

        </div>
    )
}

export default ItemDetail