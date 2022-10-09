import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { dataBase } from '../firebase/firebase';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const Checkout = () => {
    const[buyer, setBuyer] = useState({});
    const [orderId, setOrderId] = useState('');
    const [message, setMessage] = useState(false)
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const { cart, cartTotal,clear } = useContext(CartContext)

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
        return <ClipLoader color={"#4A4A4A"} loading={loader} size={50} /> 
    }

    return (
        <div className='checkOutBox'>
            {!orderId
            ?<div>
                <div className='checkOutTitle'>
                <h2>Checkout</h2>
                <h4>Por favor complete todos los campos</h4>
            </div>
            <form className='formStyle' onSubmit={finalizePurchase}>
                <div className='inputBox'>
                    <input type="text"  name='name' onChange={buyerData}/>
                    <span>Nombre</span>
                </div>
                <div className='inputBox'>
                    <input type="text"  name='name' onChange={buyerData}/>
                    <span>Apellido</span>
                </div>
                <div className='inputBox'>
                <input type="number"  name='phone' onChange={buyerData}/>
                <span>Teléfono</span>
                </div>
                <div className='inputBox'>
                <input type="email"  name='email' onChange={buyerData}/>
                <span>Correo Electrónico</span>
                </div>

                <button className='finishBuy' type='submit' >Finalizar Compra</button>
                {message && <p style={{color:'red'}}> Por favor complete todos los campos</p>}
            </form>
            </div>
            :
            <div>
                <h2>Muchas gracias por tu compra</h2>
                <h4>Tu orden de compra es: {orderId}</h4>
                <button className='backToHome' onClick={() => navigate('/')}>Volver</button>
            </div>}
            
        </div>
    )
}

export default Checkout