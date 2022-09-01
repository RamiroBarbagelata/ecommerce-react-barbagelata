import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Item = ({product}) => {
    
    return (
        <>
        <div className='cardShoes'>
        <Card sx={{ maxWidth: 345 }}  style={{borderRadius: 10}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image= {product.pictureUrl}
                    alt="Nike Free"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button size="large" variant="outlined" href="#outlined-buttons" style={{ margin: 20 }} onClick={() => {
            }}> ${product.price} </Button>
        </Card>
        </div>
        </>
    )
}

export default Item


