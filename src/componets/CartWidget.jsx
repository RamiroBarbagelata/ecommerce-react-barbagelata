import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart () {
    const {cartQuantity, cart} = useContext(CartContext)
    const navigate = useNavigate();
    return (
        <> 
            <ShoppingCartOutlinedIcon color="inherit" onClick={() => navigate('/cart')}/>
            <span className="cartNumber">{cart.length ? cartQuantity():'' }</span>
        </>
        
    )
}