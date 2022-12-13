import { useEffect, useState } from "react";


const usePokemonEvolutionsUrl = (pokemonName) => {

    const fetchPokemonEvolutionsUrl = "https://pokeapi.co/api/v2/pokemon-species/"

    const [pokemonEvolutionsUrl,setPokemonEvolutionsUrl] = useState("")



    useEffect(() => {

        fetch(`${fetchPokemonEvolutionsUrl}${pokemonName}`)
        .then(res => res.json())
        .then(({evolution_chain}) => evolution_chain.url )
        .then(url => setPokemonEvolutionsUrl(url))



    },[])


    return {pokemonEvolutionsUrl}

}


export default usePokemonEvolutionsUrl