import { useContext } from "react"

import PokemonCard from "../PokemonCard/PokemonCard"
import Loading from "../Loading/Loading"

import AllPokemonsContext from "../../contexts/AllPokemonsContext"



const Content = () => {

    const {slicedPokemonData} = useContext(AllPokemonsContext)


    return(
        <>
            {slicedPokemonData?.map((pokemon) => {
            return (
                <PokemonCard 
                pokemon={pokemon}
                key={pokemon.pokemonId} 
                
                />
            )
        })}
        </>
    )
}


export default Content




