import React from 'react'
import './pokedex/styles/HasError.css'
import { Link } from 'react-router-dom'

const HasError = ({ name }) => {
    return (
        <>
            <header className="container_input-logos">
                <div className='container_reds'></div>
                <Link to={'/'}> <img src="../logopokedex.png" alt="pokeball" className='pokedex' /></Link>
                <img className='pokebal_fondo' src="../estasi.png" alt="" />
                <div className='container_black'>hola</div>
                <Link to={'/pokedex'}><button className="container_input-buttos"><i className="bx bx-arrow-back"></i></button></Link>
            </header>
            <div className='hasError'>
                <h1 className='hasError_title'>This pokemon <span className='hasError_title-name'>{name}</span> does not exist.</h1>
                <div className="card">
                    <div className="bg">
                        <img src="../team.png" alt="" />
                    </div>
                    <div className="blob"></div>
                </div>
            </div>

        </>
    )
}

export default HasError