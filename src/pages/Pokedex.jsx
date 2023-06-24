import { useEffect, useRef, useState } from "react"
import useFecht from "../hooks/useFecht"
import { useSelector } from "react-redux"
import PokeContainer from "../componets/pokedex/PokeContainer"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import './pageStyle/Pokedex.css'
import Header from "../componets/Header"



const Pokedex = () => {

    const [selectValue, setSelectValue] = useState('all-pokemons')
    const { trainerName } = useSelector(states => states)


    let url = 'https://pokeapi.co/api/v2/pokemon?limit=700&offset=0'
    const [pokemons, getAllPokemons, hasError, setPokemons] = useFecht(url)

    // este hace la sincronizacion del typo 
    const urlTypes = 'https://pokeapi.co/api/v2/type'
    const [types, getAllTypes] = useFecht(urlTypes)


    if (selectValue !== 'all-pokemons') {
        url = selectValue
    }

    useEffect(() => {
        if (selectValue === 'all-pokemons') {
            getAllPokemons()
        } else {
            axios.get(selectValue)
                .then(res => {
                    const data = {
                        results: res.data.pokemon.map(pokeInfo => pokeInfo.pokemon)
                    }
                    setPokemons(data)
                })
                .catch(err => console.log(err))
        }
    }, [selectValue])




    // se utiliza para la busqueda del pokemon 
    const searchPokemon = useRef()
    // este hace la navegacion 
    const navigate = useNavigate()

    useEffect(() => {

        getAllTypes()
    }, [])


    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = searchPokemon.current.value.trim().toLowerCase()
        navigate(`/pokedex/${inputValue}`)
    }


    // este evento oncha hace que al elegir me cambie 
    const handleChange = e => {
        setSelectValue(e.target.value)
    }

    return (
        < article className="container_input">
            <Header />
            <section className="container_input-form">
                <h1><span className="container_input-title-span">Welcome, {trainerName},</span> </h1>
                <h2 className="container_input-subtitle">What Pokémon are you looking for?</h2>
                <form className="container_form" onSubmit={handleSubmit}>
                    <input placeholder="Search pokemon.." className="input" type="text" ref={searchPokemon} />
                    <button className="button_form"><i className="bx bx-play-circle"></i></button>
                </form>
                <select className="select" onChange={handleChange} >
                    <option className="option" value="all-pokemons">getAllPokemons</option>
                    {
                        types?.results.map(typeInfo => (
                            <option
                                value={typeInfo.url}
                                key={typeInfo.url}
                            >
                                {typeInfo.name}
                            </option>
                        ))
                    }
                </select>
            </section>
            <div className="container_Cards">
                <PokeContainer pokemons={pokemons?.results} />
            </div>
        </article>
    )
}

export default Pokedex