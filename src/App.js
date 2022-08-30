import './App.css';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';
import RunPhoto from './assets/RunPhoto.png';
import { ThemeProvider } from '@mui/material';
import theme from './MuiTheme';
import Counter from './componets/ItemCount'





function App() {
  const greeting = 'Bienvenido a Nike Running Shoes';

  const stock = 7;
  const initial = 1;
  let totalShop = 0;
  const onAdd = (quantity) => totalShop === quantity;
  

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={greeting}/>
        <div>
          {/* <img src={RunPhoto} alt="" /> */}
        </div>
        <Counter stock={stock} initial={initial} onAdd={onAdd}/>
      </div>
    </ThemeProvider>
    
    
  );
}

export default App;
