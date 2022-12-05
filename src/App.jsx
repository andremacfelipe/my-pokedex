
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

import { getDataFromPokemons,getSimplifyedPokemonData } from './services/fetchPokemon/fetchPokemonClient';


function App() {


    const temp = async () => {
        const data = await getSimplifyedPokemonData()
        console.log(data)
    }
    temp()


  return (
    <div className="App">
        <Header />
    
        <main>
            <Content />
        </main>
    </div>
  );
}

export default App;
