import React from 'react'
import Item from './Item'


const ItemList = ({ listProducts }) => {
    return (
        <>
            <div className='cardShoes'>
                {listProducts.map((product) => <Item
                    key={product.id}
                    product={product} />)}
            </div>
        </>
    );
};

export default ItemList