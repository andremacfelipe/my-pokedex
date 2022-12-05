import './style.css'


const PokemonCard = () => {
    return (
        <article className='PokemonCard' >
            <div className="pokemonCardPic">

            </div>
            <section className='pokemonCardInfo'>
                <span className='pokemonName'>Pokemon Name</span>
                <div className='pokemonStats' >
                    <p className='pokemonHeight'>Height:</p>
                    <p className='pokemonWeight'>Weight:</p>
                    <p className='pokemonType'>Type:</p>
                    <p className='PokemonSpecies'>Species:</p>
                    
                </div>
            </section>
        </article>
    )
}

export default PokemonCard