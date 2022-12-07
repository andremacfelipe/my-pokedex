import { useEffect,useState } from "react"


const useAllPokemonsUrl = () => {

    const FETCH_POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0"
    const [allPokemonsUrl,setAllPokemonsUrl] = useState([])

    useEffect(() => {
        (
            async () => {
                fetch(FETCH_POKEMON_URL)
                .then(res => res.json())
                .then(res => res.results)
                .then(results => {
                    setAllPokemonsUrl(results)
                })
            }
        )()
    },[])
    

    return {allPokemonsUrl}



}

export default useAllPokemonsUrl