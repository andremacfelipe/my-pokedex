
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

import { getSimplifyedPokemonData } from './services/fetchPokemon/fetchPokemonClient';

import { ShowContextProvider } from './contexts/ShowContext';
import { AllPokemonsProvider } from './contexts/AllPokemonsContext';

// import useAllPokemonsUrl from './services/Hooks/PokemonData/useAllPokemonsUrl';

import useSlicePokemonData from './services/Hooks/PokemonData/useSlicePokemonData';

import { useEffect } from 'react';

function App() {


    // const temp = async () => {
    //     const data = await getSimplifyedPokemonData()
    //     console.log(data)
    // }
    // temp()

    // const {allPokemonsUrl} = useAllPokemonsUrl()

    // useEffect(() => {
    //     console.log(allPokemonsUrl)
    // },[allPokemonsUrl])

    // const {slicedPokemonData} = useSlicePokemonData()

    // useEffect(() => {
    //     console.log(slicedPokemonData)
    // },[slicedPokemonData])
    

  return (
    <div className="App">
        
        <Header />
        <AllPokemonsProvider>
            <main>
                <Content />
            </main>
        </AllPokemonsProvider>
    </div>
  );
}

export default App;
