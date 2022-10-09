import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Badge } from "@mui/material";


export default function Cart () {
    const {cartQuantity, cart} = useContext(CartContext)
    const navigate = useNavigate();
    return (
        <>
            <Badge className="notificationCart" badgeContent={cart.length ? cartQuantity(): null } color="error"></Badge>
            <ShoppingCartOutlinedIcon color="inherit" onClick={() => navigate('/cart')}/>
        </>
        
    )
}