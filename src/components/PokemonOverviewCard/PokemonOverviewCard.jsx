import './style.css'
import PokemonCard from '../PokemonCard/PokemonCard'

const PokemonOverviewCard = ({pokemon}) => {
    

    const {
            pokemonName, pokemonHeight, 
            pokemonWeight, pokemonType1,
            pokemonType2,pokemonCardPicSrc,
            pokemonBaseHp,
            pokemonBaseAttack,
            pokemonBaseDefense,
            pokemonBaseSpeed,
        } = pokemon



    return (
        
        <PokemonCard pokemon={pokemon}/>
    )

}



export default PokemonOverviewCard