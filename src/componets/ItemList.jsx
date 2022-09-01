import React from 'react'
import Item from './Item'


const ItemList = ({listProducts}) => {
    return (
        <> 
            {listProducts.map((product) => <Item 
            key={product.id} 
            product={product}/>)}
            {/* <div>ItemList</div> */}
        </>

    );
};

export default ItemList