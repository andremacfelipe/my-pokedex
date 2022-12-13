
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import PokemonOverview from './Pages/PokemonOverview/PokemonOverview';

//TESTE
// import usePokemonEvolutionsUrl from './services/Hooks/usePokemonEvolutions/usePokemonEvolutionsUrl';
import usePokemonEvolutions from './services/Hooks/usePokemonEvolutions/usePokemonEvolutions';

//


import { AllPokemonsProvider } from './contexts/AllPokemonsContext';
import { useEffect } from 'react';




function App() {    


  const {pokemonEvolutions} = usePokemonEvolutions("bulbasaur")

  useEffect(() => {

    console.log(pokemonEvolutions)

  },[pokemonEvolutions])





  return (
    <div className="App">
      <AllPokemonsProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Header/>}>
              <Route index element={ <Home/> } />
              <Route path='pokemon/:pokemonName' element={<PokemonOverview/>} />
            </Route>

            
          </Routes>
        </Router>
      </AllPokemonsProvider>
        
    </div>
  );
}

export default App;
