import { Link, useParams } from "react-router-dom"
import useFecht from "../hooks/useFecht"
import { useEffect } from "react"
import './pageStyle/PokedexName.css'
import HasError from "../componets/HasError"

const PokedexName = () => {

    const { name } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const [pokemon, getPokemonByName, hasError] = useFecht(url)

    useEffect(() => {
        getPokemonByName()
    }, [])

    console.log(pokemon)

    return (
        <section className="container_input">
            {hasError ? (
                <HasError name={name} />
            ) : (
                pokemon && (
                    <>
                        <header className="container_input-logos">
                            <div className='container_reds'></div>
                            <Link to={'/'}> <img src="../logopokedex.png" alt="pokeball" className='pokedex' /></Link>
                            <img className='pokebal_fondo' src="../estasi.png" alt="" />
                            <div className='container_black'>hola</div>
                            <Link to={'/pokedex'}><button className="container_input-buttos"><i className="bx bx-arrow-back"></i></button></Link>
                        </header>
                        <article className="car_grande">
                            <div className={`car_grande-container-img bg-${pokemon?.types[0].type.name}`}>
                                <img
                                    className="car_grande-img"
                                    src={pokemon?.sprites.other['official-artwork'].front_default}
                                    alt="pokemon" />
                            </div>
                            <div className="car_grande-header">
                                <p className={`car_grande-id   ${pokemon?.types[0].type.name}`}>
                                    <span>#</span>
                                    {pokemon?.id}
                                </p>
                                <h2 className={`car_grande-name ${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
                                {/* <ul className="car_grande-datos">
                                        <li><span>weight</span><span className="car_grande-datos-number">{pokemon?.weight}</span></li>
                                        <li><span>height</span><span className="car_grande-datos-number">{pokemon?.height}</span></li>
                                    </ul> */}
                            </div>
                            <div className="car_grande-types">
                                <div className="car_grande-type">
                                    <h2 className="car_grande-type-name">Tipo</h2>
                                    <ul className="car_grande-type-ul">
                                        {
                                            pokemon?.types.map(typeInfo => (
                                                <li className={`car_grande-type-li bg-${typeInfo.type.name}`} key={typeInfo.type.url}>{typeInfo.type.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                {/* <div className="car_grande-type" >
                                        <h2 className="car_grande-type-name">Habilities</h2>
                                        <ul className="car_grande-type-ul">
                                            {
                                                pokemon?.abilities.map(abilityInfo => (
                                                    <li className="car_grande-type-li  car_grande-habilities" key={abilityInfo.ability.url}>{abilityInfo.ability.name}</li>
                                                ))
                                            }
                                        </ul>
                                    </div> */}
                            </div>
                            <div className="barras-container">
                                <div className="barras-container-nameimg">
                                    <h4 className="barras-container-name">Stats</h4>
                                    <img className="barra-container-img" src="./Group.svg" alt="" />
                                </div>
                                <ul className="barras-container-stats">
                                    {pokemon?.stats.map(statInfo => {
                                        const maxStatValue = 150;
                                        const statPercentage = (statInfo.base_stat / maxStatValue) * 100
                                        return (
                                            <li className="barras_container-stats-date" key={statInfo.stat.url}>
                                                <span className="barras_container-stats-name">{statInfo.stat.name}</span>
                                                <span className="barras_container-stats-power">{statInfo.base_stat}/150</span>
                                                <div className="barra">
                                                    <div
                                                        className={`barra-fill `}
                                                        style={{ width: `${statPercentage}%` }}
                                                    ></div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </article>
                    </>
                )
            )}
        </section>
    )
}

export default PokedexName