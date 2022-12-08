import { useState,useEffect } from "react"
import useAllPokemonsUrl from "./useAllPokemonsUrl"

const useSlicePokemonData = () => {

    const {allPokemonsUrl} = useAllPokemonsUrl()
    const [slicedPokemonData,setSlicedPokemonData] = useState([])
    

    useEffect(() => {

        (
            async () => {

                allPokemonsUrl?.forEach(({url}) => {
                    fetch(url)
                    .then(res => res.json())
                    .then(thisPokemonData => {
                        setSlicedPokemonData(prev => [...prev,{

                            pokemonName:thisPokemonData.name,
                            pokemonId:thisPokemonData.id,
                            pokemonHeight:thisPokemonData.height,
                            pokemonWeight:thisPokemonData.weight,
                            pokemonCardPicSrc:thisPokemonData.sprites.front_default,
                            pokemonType1:thisPokemonData.types[0].type.name,
                            pokemonType2:thisPokemonData.types[1]?.type.name,
                            pokemonBaseHp:thisPokemonData.stats[0].base_stat,
                            pokemonBaseAttack:thisPokemonData.stats[1].base_stat,
                            pokemonBaseDefense:thisPokemonData.stats[2].base_stat,
                            pokemonBaseSpeed:thisPokemonData.stats[5].base_stat         


                        }])
                    })
                })

            }
        )()


    },[allPokemonsUrl])

    return {slicedPokemonData}

}


export default useSlicePokemonData