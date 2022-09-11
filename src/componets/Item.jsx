import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Category } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



const Item = ({product}) => {
    const {id, title, price, pictureUrl, category } = product;
    const navigate = useNavigate()
    return (
        <>
        <div className='singleCard'>
            <Card sx={{ maxWidth: 345 }}  style={{borderRadius: 10}}>
                <CardActionArea>
                    
                    <CardMedia
                        component="img"
                        height="300"
                        image= {pictureUrl}
                        alt={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Stack direction="center" spacing={2}>
                <Button size="small" color='primary' variant='text' style={{marginLeft:20}} >{category}</Button> 
                <br />
                    <Button size="large" color='success' variant='text' style={{marginLeft:20}} >${price}</Button>
                    </Stack>
                    
                <Button size="medium" variant="outlined" color="inherit" style={{ margin: 20 }} onClick={()  => navigate (`/detail/${id}`)}> Ver Más </Button>
            </Card>
            
        </div>
        </>
    )
}

export default Item


