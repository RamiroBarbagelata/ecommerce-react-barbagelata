import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';


const CartItem = ({ shopItem }) => {
    const { removeItem } = useContext(CartContext);



    return (
        <div className='containerCart'>
            <table className='itemTable'>
                <thead className='cartDetail'>
                    <th>Producto</th>
                    <th>Detalle</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th></th>
                </thead>
                <tr className='itemsInCart'>
                    <td><img src={shopItem.pictureUrl} alt={shopItem.title} style={{ width: '8rem' }} /></td>
                    <td><h3>{shopItem.title}</h3></td>
                    <td><span>{shopItem.quantity}</span></td>
                    <td><span>${shopItem.price}</span></td>
                    <td><DeleteIcon onClick={() => removeItem(shopItem.id)}>X</DeleteIcon></td>
                </tr>    
            </table>
        </div>
    )
}

export default CartItem