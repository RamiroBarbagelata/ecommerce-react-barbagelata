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
            <Card className="counter" sx={{ maxWidth: 345 }} style={{ borderRadius: 10 }}>
                <CardActions>
                    <Stack className="btnCounter" direction="row" spacing={5}>

                        <Button variant="outlined" size="small" onClick={() => {
                            counter > initial ? setCounter(counter - 1) : alert('Por lo menos selecciona un producto')
                        }}> - </Button>

                        <Button className="countNumber" size="large" color="secondary">
                            {counter}
                        </Button>

                        <Button variant="outlined" onClick={() => {
                            counter < stock ? setCounter(counter + 1) : alert('No hay stock suficiente')
                        }}> + </Button>

                    </Stack>
                </CardActions>

                <Button className="buyNow" size="large" variant="outlined" href="#outlined-buttons" onClick={() => {
                    onAdd(counter);
                    setCounter(initial);
                }}> Comprar ahora </Button>

            </Card>
        </>

    );
}

export default Counter