import './App.css';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from './MuiTheme';
import ItemDetailContainer from './componets/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './componets/Cart';
import { CartProvider } from './context/CartContext'


function App() {
  const greeting = 'Bienvenido a Nike Running Shoes';

  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={greeting} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={greeting} />} />
              <Route path='/detail/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
