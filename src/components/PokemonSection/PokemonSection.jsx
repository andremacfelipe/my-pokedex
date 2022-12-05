import './style.css'

import PokemonCard from '../PokemonCard/PokemonCard'

const PokemonSection = ({allPokemons}) => {
    
            {allPokemons.map((pokemon) => {
            return (
                <PokemonCard 
                pokemon={pokemon}
                key={pokemon.pokemonId} 
                
                />
            )
        })}

    
}


export default PokemonSection


