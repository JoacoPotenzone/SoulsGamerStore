import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting ='¡Bienvenidos a SoulsGamerStore!'></ItemListContainer>
      <ItemDetailContainer />
    </div>
    
  );
}

export default App;
