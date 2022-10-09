import { useEffect, useState } from "react";
import { createContext } from "react";


export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    let cartFromLocal = JSON.parse(window.localStorage.getItem("cart"));
    if (cartFromLocal === null) {
        cartFromLocal = [];
    }

    const [cart, setCart] = useState(cartFromLocal)

    const evitarRepetidos = (prod) => {
        return cart.find(e => {
            return e.id === prod.id;
        })
    }

    const addItem = (item) => {
        const itsInTheCart = cart.find((prod) => prod.id === item.id) 
        if(itsInTheCart) {
            const updatedCart = cart.map((prod) => {
                if(prod.id === item.id) {
                    return{...prod, quantity:prod.quantity + item.quantity}
                } else {
                    return prod
                }
            })
            setCart(updatedCart)
        }else {
            setCart([...cart, item])
        }
        
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)

    }

    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc += prod.price * prod.quantity, 0)
    }

    const endShop = () => {
        setCart([])
    }

    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, clear, removeItem, isInCart, addItem, cartQuantity, cartTotal, evitarRepetidos, endShop }}>
            {children}
        </CartContext.Provider>
    )
}