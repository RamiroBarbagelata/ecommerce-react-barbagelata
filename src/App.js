import './App.css';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from './MuiTheme';
import ItemDetailContainer from './componets/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const greeting = 'Bienvenido a Nike Running Shoes';

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={greeting}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={greeting}/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/> 
          </Routes> 
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
