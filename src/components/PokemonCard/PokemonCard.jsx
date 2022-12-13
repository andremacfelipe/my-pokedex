import './style.css'

import PokemonCardIconImage from './PokemonCardTypesIcons'
import PokemonCardTypesColors,{PokemonCardTypesBackgroundColor} from './PokemonCardTypesColors'

import PokemonCardPic from '../PokemonCardPic/PokemonCardPic'



const PokemonCard = ({pokemon}) => {

    const {pokemonName, pokemonHeight,  pokemonWeight, pokemonType1,pokemonType2,pokemonCardPicSrc, } = pokemon


    return (
        <article className='PokemonCard' 
        style={{
            boxShadow:`5px 5px 10px ${PokemonCardTypesColors[pokemonType1]}, -2px -2px 10px ${PokemonCardTypesColors[pokemonType1]} `,
            
        }} >
            <PokemonCardPic pokemonCardPicSrc={pokemonCardPicSrc}
             PokemonCardTypesBackgroundColor={PokemonCardTypesBackgroundColor}
             pokemonType1={pokemonType1}
             
             />
            <section className='pokemonCardInfo'>
                <span className='pokemonName'>{pokemonName}</span>
                <div className='pokemonStats' >
                    <p className='pokemonHeight'>Height: {pokemonHeight}</p>
                    <p className='pokemonWeight'>Weight: {pokemonWeight}</p>
                    <p className='pokemonType'>Types: {pokemonType2 ? <>
                        <PokemonCardIconImage pokemonType={pokemonType1}/>
                        <PokemonCardIconImage pokemonType={pokemonType2}/>
                    </> : <>
                    <PokemonCardIconImage pokemonType={pokemonType1}/>
                    </>}
                    </p>
                    
                    
                </div>
            </section>
        </article>
    )
}

export default PokemonCard