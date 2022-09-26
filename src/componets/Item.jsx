import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const Item = ({product}) => {
    const {id, title, price, pictureUrl, category } = product;
    const navigate = useNavigate()
    const theme = createTheme({
        palette: {
            neutral: {
                main: '#000000',
                contrastText: '#FFFFFF',
            },
        },
    });

    let pricePoint = new Intl.NumberFormat('de-DE').format(price)

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
                {/* <Stack direction="center" spacing={2}> */}
                {/* <Button size="small" color='inherit' variant='text' style={{marginLeft:20}} >{category}</Button>  */}
                <div className='categoryPrice'>
                <h5 className='itemCategory'>{category}</h5>
                <h3 className='itemPrice'>${pricePoint}</h3>
                </div>
                
                {/* <br /> */}
                    {/* <Button size="large" color='success' variant='text' style={{marginLeft:20}} >${price}</Button> */}
                    {/* </Stack> */}
                    
                {/* <Button size="medium" variant="contained" color="inherit" style={{ margin: 20 }} onClick={()  => navigate (`/detail/${id}`)}> Ver Más </Button> */}
                <ThemeProvider theme={theme}>
                <Button color="neutral" variant="contained" style={{ margin: 20 }} onClick={()  => navigate (`/detail/${id}`)}>VER MÁS</Button>
                </ThemeProvider>
                
            </Card>
            
        </div>
        </>
    )
}

export default Item


