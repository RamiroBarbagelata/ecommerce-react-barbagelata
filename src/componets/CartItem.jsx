import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ shopItem }) => {
const { removeItem } = useContext(CartContext);

let pricePoint = new Intl.NumberFormat('de-DE').format(shopItem.price)

    return (
        <div className='containerCart'>
            <table className='itemTable'>
                <thead className='cartDetail'>
                    <th className='producTitle'>Producto</th>
                    <th className='producDetail'>Detalle</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th></th>
                </thead>
                <tr className='itemsInCart'>
                    <td><img className='pictureInCart' src={shopItem.pictureUrl} alt={shopItem.title} /></td> 
                    <td><h3 className='titleInCart'>{shopItem.title}</h3></td>
                    <td><span>{shopItem.quantity} Un.</span></td>
                    <td><span>${pricePoint}</span></td>
                    
                    <td><DeleteIcon onClick={() => removeItem(shopItem.id)}>X</DeleteIcon></td>
                </tr>    
            </table>
        </div>
    )
}

export default CartItem