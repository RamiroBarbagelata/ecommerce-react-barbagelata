import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { dataBase } from '../firebase/firebase';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Checkout = () => {
    const[buyer, setBuyer] = useState({});
    const [orderId, setOrderId] = useState('');
    const [message, setMessage] = useState(false)
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const { cart, cartTotal,clear } = useContext(CartContext)

    // const { cart, cartTotal } = useContext(CartContext);

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]:e.target.value
        })
    }

    const finalizePurchase = (e) => {
        e.preventDefault()
        if(Object.values(buyer).length !==3){
            setMessage(true)
        }else{
            setMessage(false)
            setLoader(true)
            const sales = collection(dataBase,"orders")
            addDoc(sales, {
            buyer,
            items:cart,
            total: cartTotal(),
            date: serverTimestamp()
        })
        .then ((res) => {
            setOrderId(res.id)
            clear()
        })
        .catch((error) => console.log(error))
        .finally(() => setLoader(false))
        }
    }

    if (loader) {
        return <p>Cargandooooooo......</p>
    }

    return (
        <div>
            {!orderId
            ?<div>
            <h2>Checkout</h2>
            <h4>Por favor complete todos los campos</h4>
            <form style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} onSubmit={finalizePurchase}>
                <input type="text" placeholder='Nombre y Apellido' name='name' onChange={buyerData}/>
                <input type="number" placeholder='Teléfono' name='phone' onChange={buyerData}/>
                <input type="email" placeholder='Email' name='email' onChange={buyerData}/>
                <button type='submit' >Finalizar Compra</button>
                {message && <p style={{color:'red'}}> Por favor complete todos los campos</p>}
            </form>
            </div>
            :
            <div>
                <h2>Muchas gracias por tu compra</h2>
                <h4>Tu orden de compra es: {orderId}</h4>
                <button onClick={() => navigate('/')}>Volver</button>
            </div>}
            
        </div>

    )
}

export default Checkout