import './style.css'


const PokemonCard = ({pokemon}) => {

    const {pokemonName, pokemonHeight,  pokemonWeight, pokemonType,pokemonCardPicSrc, } = pokemon


    return (
        <article className='PokemonCard' >
            <div className="pokemonCardPic">
                <img src={pokemonCardPicSrc} alt="okemonPic" />
            </div>
            <section className='pokemonCardInfo'>
                <span className='pokemonName'>{pokemonName}</span>
                <div className='pokemonStats' >
                    <p className='pokemonHeight'>Height:{pokemonHeight}</p>
                    <p className='pokemonWeight'>Weight:{pokemonWeight}</p>
                    <p className='pokemonType'>Type:{pokemonType}</p>
                    
                    
                </div>
            </section>
        </article>
    )
}

export default PokemonCard