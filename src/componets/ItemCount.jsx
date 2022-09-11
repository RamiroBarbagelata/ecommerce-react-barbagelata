import Card from '@mui/material/Card';
import { Button, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';


const ItemCount = ({ stock, initial, onAdd, count, setCount }) => {
    
    const addQuantity = () => {
        if (count > initial) {
            setCount(count - 1) 
        }
    }
    

    const subtractQuantity = () => {
        if (count < stock) {
            setCount(count + 1) 
        } 
    }



    return (
        <>
            <Card className="counter" sx={{ maxWidth: 345 }} style={{ borderRadius: 10 }}>
                <CardActions>
                    <Stack className="btnCounter" direction="row" spacing={2}>

                        <Button variant="outlined" color="inherit" size="small" onClick={addQuantity}> - </Button>

                        <Button className="countNumber" size="large" color="inherit">
                            {count}
                        </Button>

                        <Button  variant="outlined" color="inherit" onClick={subtractQuantity}> + </Button>

                    </Stack>
                </CardActions>

                <Button className="buyNow" size="large" variant="outlined" color="inherit" onClick={() => {
                    onAdd(count);
                    setCount(initial);
                }}> Comprar ahora </Button>

            </Card>
        </>

    );
}

export default ItemCount