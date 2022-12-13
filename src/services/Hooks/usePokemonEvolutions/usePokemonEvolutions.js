import { useEffect, useState } from "react";
import usePokemonEvolutionsUrl from "./usePokemonEvolutionsUrl";


const usePokemonEvolutions = (pokemonName) => {


    const {pokemonEvolutionsUrl} = usePokemonEvolutionsUrl(pokemonName)
    const [pokemonEvolutions,setPokemonEvolutions] = useState([])

    useEffect(() => {
        
        fetch(pokemonEvolutionsUrl)
        .then(res => res.json())
        .then(res => {
            setPokemonEvolutions([{
                evolution1:res.chain.evolves_to[0].species.name,
                evolution2:res.chain.evolves_to[0].evolves_to[0].species.name
            }]) 
        }).catch(err => {return })



    },[pokemonEvolutionsUrl])

    return {pokemonEvolutions}
}


export default usePokemonEvolutions