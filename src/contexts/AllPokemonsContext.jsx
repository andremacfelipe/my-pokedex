import { createContext,useState } from "react";

import useSlicePokemonData from "../services/Hooks/PokemonData/useSlicePokemonData";





const AllPokemonsContext = createContext({})


export const AllPokemonsProvider = ({children}) => {

    const {slicedPokemonData} = useSlicePokemonData()
    const [searchPokemonByName,setSearchPokemonByName] = useState('')
    const [searchPokemonsByType,setSearchPokemonsByType] = useState('')



    const showPokemons = !!searchPokemonsByType
        ? slicedPokemonData.filter((pokemon) => {
            return pokemon.pokemonType1 === searchPokemonsByType || pokemon.pokemonType2 === searchPokemonsByType
        }) 
        : [...slicedPokemonData] 




    const filteredPokemonsByName = searchPokemonByName.length > 0 
        ? showPokemons.filter((pokemon) => pokemon.pokemonName.includes(searchPokemonByName))
        : []
    
    






    return(
        <AllPokemonsContext.Provider value={{
            slicedPokemonData,
            searchPokemonByName,
            setSearchPokemonByName,
            filteredPokemonsByName,
            showPokemons,
            searchPokemonsByType,
            setSearchPokemonsByType
        }}>
            {children}
        </AllPokemonsContext.Provider>
    )


}



export default AllPokemonsContext