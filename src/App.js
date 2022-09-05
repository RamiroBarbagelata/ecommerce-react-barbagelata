import './App.css';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';
import RunPhoto from './assets/RunPhoto.png';
import { ThemeProvider } from '@mui/material';
import theme from './MuiTheme';
import ItemDetailContainer from './componets/ItemDetailContainer';



function App() {
  const greeting = 'Bienvenido a Nike Running Shoes';

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={greeting}/>
        <div>
          {/* <img src={RunPhoto} alt="" /> */}
        </div>
        <ItemDetailContainer/>
      </div>
    </ThemeProvider>
    
    
  );
}

export default App;
