import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';




const Counter = ({ stock, initial, onAdd }) => {
    const [counter, setCounter] = useState(initial);

    return (
        <>
        <Card sx={{ maxWidth: 345 }} style={{borderRadius: 10}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image="https://i.postimg.cc/B635TYDq/nike-Shoe01.png"
                    alt="Nike Free"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Nike Free RN Flyknit 2018
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Diseñado para carreras cortas cuando quieres una sensación de estar descalzo,
                        el Nike Free RN Flyknit 2018 se siente muy ligero y flexible.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Stack direction="row" spacing={8}>

                    <Button variant="outlined" onClick={() => {
                        counter > initial ? setCounter(counter - 1) : alert('Por lo menos selecciona un producto')
                    }}> - </Button>

                    <Button size="large" color="secondary">
                        {counter}
                    </Button>

                    <Button variant="outlined" onClick={() => {
                        counter < stock ? setCounter(counter + 1) : alert('No hay stock suficiente')
                    }}> + </Button>

                </Stack>
            </CardActions>

            <Button size="large" variant="outlined" href="#outlined-buttons" style={{ margin: 20 }} onClick={() => {
                onAdd(counter);
                setCounter(initial);
            }}> Comprar ahora </Button>

        </Card>
        </>
        
    );
}

export default Counter