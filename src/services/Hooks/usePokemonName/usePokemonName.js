import { useEffect, useState } from "react"
import useSlicePokemonData from "../PokemonData/useSlicePokemonData"

const usePokemonName = (nameParam) => {

    const {slicedPokemonData} = useSlicePokemonData()

    const [pokemonNameData,setPokemonNameData] = useState([])

    useEffect(() => {
        const temp = slicedPokemonData?.filter((pokemon) => {
            return pokemon.pokemonName === nameParam 
        })
        setPokemonNameData(temp)

    },[slicedPokemonData])

    return {pokemonNameData}
    
}



export default usePokemonName