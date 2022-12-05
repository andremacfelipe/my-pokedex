
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

import { getSimplifyedPokemonData } from './services/fetchPokemon/fetchPokemonClient';

import { ShowContextProvider } from './contexts/ShowContext';


function App() {


    // const temp = async () => {
    //     const data = await getSimplifyedPokemonData()
    //     console.log(data)
    // }
    // temp()
    

  return (
    <div className="App">
        
        <Header />
        <ShowContextProvider>
            <main>
                <Content />
            </main>
        </ShowContextProvider>
    </div>
  );
}

export default App;
