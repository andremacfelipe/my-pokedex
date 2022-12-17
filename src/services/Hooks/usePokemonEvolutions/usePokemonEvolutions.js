import { useEffect, useState } from "react";
import usePokemonEvolutionsUrl from "./usePokemonEvolutionsUrl";


const usePokemonEvolutions = (pokemonName) => {


    const {pokemonEvolutionsUrl} = usePokemonEvolutionsUrl(pokemonName)
    const [pokemonEvolutions,setPokemonEvolutions] = useState([])

    useEffect(() => {
        
        fetch(pokemonEvolutionsUrl)
        .then(res => res.json())
        .then(res => {
            setPokemonEvolutions([
                res?.chain?.species?.name,
                res?.chain?.evolves_to[0]?.species.name,
                res?.chain.evolves_to[0]?.evolves_to[0]?.species.name
            ]) 
        }).catch(err => {console.error(err) })



    },[pokemonEvolutionsUrl])

    return {pokemonEvolutions}
}


export default usePokemonEvolutions