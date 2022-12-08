import './style.css'

import PokemonCardIconImage from './PokemonCardTypesIcons'
import PokemonCardTypesColors,{PokemonCardTypesBackgroundColor} from './PokemonCardTypesColors'


const PokemonCard = ({pokemon}) => {

    const {pokemonName, pokemonHeight,  pokemonWeight, pokemonType,pokemonCardPicSrc, } = pokemon


    return (
        <article className='PokemonCard' 
        style={{
            boxShadow:`5px 5px 10px ${PokemonCardTypesColors[pokemonType]}, -2px -2px 10px ${PokemonCardTypesColors[pokemonType]} `,
            
        }} >
            <div className="pokemonCardPic" style={{
                outline:`3px solid ${PokemonCardTypesBackgroundColor[pokemonType]}`
            }}>
                <img src={pokemonCardPicSrc} alt="okemonPic" />
            </div>
            <section className='pokemonCardInfo'>
                <span className='pokemonName'>{pokemonName}</span>
                <div className='pokemonStats' >
                    <p className='pokemonHeight'>Height: {pokemonHeight}</p>
                    <p className='pokemonWeight'>Weight: {pokemonWeight}</p>
                    <p className='pokemonType'>Type: <PokemonCardIconImage pokemonType={pokemonType} /></p>
                    
                    
                </div>
            </section>
        </article>
    )
}

export default PokemonCard