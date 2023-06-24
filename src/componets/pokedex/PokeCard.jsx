import { useEffect } from "react"
import useFecht from "../../hooks/useFecht"
import { useNavigate } from "react-router-dom"
import './styles/Pokecard.css'


const PokeCard = ({ url }) => {

    const [pokemon, getPokemonById] = useFecht(url)

    useEffect(() => {
        getPokemonById()
    }, [])
    console.log(pokemon)

    const navigate = useNavigate()


    const handleNavigate = () => {
        navigate(`/pokedex/${pokemon.name}`)
    }



    return (
        <article className={`pokecard`} onClick={handleNavigate}>
            <header className={`pokecard_header bg-${pokemon?.types[0].type.name}`}>
                <img className="pokecard_img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="POKEMON" />
            </header>
            <section className="pokecard_body">
                <h2 className={`pokecard_name ${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
                <ul className="pokecard_types">
                    {
                        pokemon?.types.map(typeInfo => (
                            <li className="pokecard_type-item" key={typeInfo.type.url}>{typeInfo.type.name}</li>
                        ))
                    }
                </ul>
            </section>
            <footer className="pokecard_footer">
                <ul className="pokecard_stats">
                    {
                        pokemon?.stats.map(statInfo => (
                            <li className="pokecard_stats-items" key={statInfo.stat.url}>
                                <span className="pokecard_stats-label">{statInfo.stat.name}:</span>
                                <span className={`pokecard_stats-value ${pokemon?.types[0].type.name}`}>{statInfo.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>
            </footer>
        </article>

    )
}

export default PokeCard