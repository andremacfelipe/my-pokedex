import { useContext } from "react"

import PokemonCard from "../PokemonCard/PokemonCard"
import Loading from "../Loading/Loading"

import ShowContext from "../../contexts/ShowContext"

const Content = () => {

    const {allPokemons,loading,setLoading} = useContext(ShowContext)
    
    // console.log(allPokemons)


    return(
        <>
            {loading && <Loading/>}
            {!loading && allPokemons.map((pokemon) => {
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




