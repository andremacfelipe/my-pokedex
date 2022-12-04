import './style.css'


const PokemonCard = () => {
    return (
        <article className='PokemonCard' >
            <div className="pokemonCardPic">

            </div>
            <section className='pokemonCardInfo'>
                <span className='pokemonName'>Pokemon Name</span>
                <div className='pokemonStats' >
                    <p>damage:</p>
                    <p>life:</p>
                    <p>stats:</p>
                    <p>danger:</p>
                    
                </div>
            </section>
        </article>
    )
}

export default PokemonCard