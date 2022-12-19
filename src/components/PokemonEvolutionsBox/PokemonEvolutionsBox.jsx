import './style.css'
import usePokemonEvolutions from '../../services/Hooks/usePokemonEvolutions/usePokemonEvolutions'
import { useContext, } from 'react'
import AllPokemonsContext from '../../contexts/AllPokemonsContext'
import { Link } from 'react-router-dom'
import PokemonCardPic from '../PokemonCardPic/PokemonCardPic'
import { PokemonCardTypesBackgroundColor } from '../PokemonCard/PokemonCardTypesColors'


import Loading from '../Loading/Loading'

const PokemonEvolutionsBox = ({pokemonName}) => {

    const {pokemonEvolutions} = usePokemonEvolutions(pokemonName)
    const {slicedPokemonData} = useContext(AllPokemonsContext)
    const evolutionPokes = pokemonEvolutions.length > 0 && slicedPokemonData.length > 0 
        ? slicedPokemonData.filter((pokemon) => pokemon.pokemonName === pokemonEvolutions[0] || 
        pokemon.pokemonName ===pokemonEvolutions[1] || pokemon.pokemonName ===pokemonEvolutions[2])
        
        :[]


    return (
        <div className='PokemonEvolutionsBox'>
            <h2>Evolutions</h2>
            <div className="pokemonEvolutionsBoxCardPicContainer">
                {   
                    evolutionPokes.length > 0 
                    ? evolutionPokes.map((pokemon) => (<Link key={pokemon.pokemonId}
                    to={`/pokemon/${pokemon.pokemonName}`}>
                        <PokemonCardPic 
                            pokemonCardPicSrc={pokemon.pokemonCardPicSrc}
                            pokemonType1={pokemon.pokemonType1}
                            PokemonCardTypesBackgroundColor={PokemonCardTypesBackgroundColor}
                        
                        />
                    </Link>))
                    : <Loading /> 
                
                }
            </div>
        </div>
    )

}
////////////////

export default PokemonEvolutionsBox