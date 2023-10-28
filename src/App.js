import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar></NavBar>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting ='¡Bienvenidos a SoulsGamerStore!'></ItemListContainer>} />
                <Route path='/category/:categoryId' element={<ItemListContainer></ItemListContainer>} />
                <Route path='/item/:itemId' element={  <ItemDetailContainer />} />
                <Route path='*' element ={<h1>404 NOT FOUND</h1>} />
              </Routes> 
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
