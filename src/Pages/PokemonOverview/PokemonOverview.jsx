import './style.css'

import { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom"
import AllPokemonsContext from '../../contexts/AllPokemonsContext'



import PokemonOverviewCard from '../../components/PokemonOverviewCard/PokemonOverviewCard'






const PokemonOverview = () => {

    const {slicedPokemonData} = useContext(AllPokemonsContext)
    const {pokemonName} = useParams()

    // const {pokemonNameData} = usePokemonName(pokemonName)

    const thisPoke = slicedPokemonData?.filter((pokemon) => pokemon.pokemonName === pokemonName)


    

    

    return (
        <main className="PokemonOverview">
            {
                thisPoke.length > 0 
                ?
                 <PokemonOverviewCard
                    pokemon={thisPoke[0]}
                    />
                :
                <p>Loading...</p>
            }
        </main>
    )
}



export default PokemonOverview