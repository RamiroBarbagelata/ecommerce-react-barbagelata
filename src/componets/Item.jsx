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
                <div className='categoryPrice'>
                <h5 className='itemCategory'>{category}</h5>
                <h3 className='itemPrice'>${pricePoint}</h3>
                </div>
                <ThemeProvider theme={theme}>
                <Button color="neutral" variant="contained" style={{ margin: 20 }} onClick={()  => navigate (`/detail/${id}`)}>VER MÁS</Button>
                </ThemeProvider>
            </Card>
        </div>
        </>
    )
}

export default Item


