import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="container_input-logos">
            <div className='container_reds'></div>
            <Link to={'/'}> <img src="../logopokedex.png" alt="pokeball" className='pokedex' /></Link>
            <img className='pokebal_fondo' src="../estasi.png" alt="" />
            <div className='container_black'>hola</div>
        </nav>
    )
}

export default Header