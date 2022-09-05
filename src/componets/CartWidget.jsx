import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Cart ({cant}) {
    return (
        <>
            <ShoppingCartOutlinedIcon color="inherit"/>
            ({cant})
        </>
        
    )
}