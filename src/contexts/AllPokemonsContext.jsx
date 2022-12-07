import { createContext } from "react";

import useSlicePokemonData from "../services/Hooks/PokemonData/useSlicePokemonData";



const AllPokemonsContext = createContext({})


export const AllPokemonsProvider = ({children}) => {

    const {slicedPokemonData} = useSlicePokemonData()






    return(
        <AllPokemonsContext.Provider value={{
            slicedPokemonData
        }}>
            {children}
        </AllPokemonsContext.Provider>
    )


}



export default AllPokemonsContext