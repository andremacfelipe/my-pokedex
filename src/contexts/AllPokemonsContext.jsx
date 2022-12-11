import { createContext,useState } from "react";

import useSlicePokemonData from "../services/Hooks/PokemonData/useSlicePokemonData";





const AllPokemonsContext = createContext({})


export const AllPokemonsProvider = ({children}) => {

    const {slicedPokemonData} = useSlicePokemonData()
    const [searchPokemonByName,setSearchPokemonByName] = useState('')

    const filteredPokemonsByName = searchPokemonByName.length > 0 
        ? slicedPokemonData.filter((pokemon) => pokemon.pokemonName.includes(searchPokemonByName))
        : []






    return(
        <AllPokemonsContext.Provider value={{
            slicedPokemonData,
            searchPokemonByName,
            setSearchPokemonByName,
            filteredPokemonsByName
        }}>
            {children}
        </AllPokemonsContext.Provider>
    )


}



export default AllPokemonsContext