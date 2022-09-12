import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";

export default function Cart ({cant}) {
    const navigate = useNavigate();
    return (
        <> 
            <ShoppingCartOutlinedIcon color="inherit" onClick={() => navigate('/cart')}/>
            ({cant})
        </>
        
    )
}