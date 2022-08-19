import logo from './logo.svg';
import './App.css';
import NavBar from './componets/NavBar';


function App() {



  return (
    
    <div className="App">
      <NavBar />
      <div>
        <h1>Bienvenido a Nike Running Shoes</h1>
        <p>Todo lo que buscas en un solo lugar</p>
        <h4>Explorar</h4>
      </div>
      
      {/* <div className='menu'>
        <li>Home</li>
        <li>Categorias</li>
        <li>Ofertas</li>
        <li>Contacto</li>
      </div> */}
    </div>
    
  );
}

export default App;
