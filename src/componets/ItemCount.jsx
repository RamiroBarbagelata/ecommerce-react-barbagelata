import Card from '@mui/material/Card';
import { Button, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';




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

    const theme = createTheme({
        palette: {
            neutral: {
                main: '#000000',
                contrastText: '#FFFFFF',
            },
        },
    });

   

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

                {/* <Button className="buyNow" size="large" variant="outlined" color="inherit" onClick={() => {
                    onAdd(count);
                    setCount(initial);
                }}> Comprar ahora </Button> */}

                <ThemeProvider theme={theme}>
                <Button className="buyNow" size="large"  color="neutral" variant="contained" style={{ margin: 20 }} onClick={() => {
                    onAdd(count);
                    setCount(initial);
                }}>COMPRAR AHORA</Button>
                
                </ThemeProvider>

            </Card>
        </>

    );
}

export default ItemCount