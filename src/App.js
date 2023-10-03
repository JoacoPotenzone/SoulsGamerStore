import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting ='¡Bienvenidos a SoulsGamerStore!'></ItemListContainer>
      <ItemCount initial ={1} stock={10} onAdd={(quantity) => console.log('Cantidad Agregada: ', quantity)}></ItemCount>
    </div>
    
  );
}

export default App;
