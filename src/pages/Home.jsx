import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerNameG } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";
import './pageStyle/Home.css'


const Home = () => {

    const { trainerName } = useSelector(states => states)
    const dispatch = useDispatch()

    const trainerNameRef = useRef()

    const navigate = useNavigate()

    const handleSubmid = e => {
        e.preventDefault();
        dispatch(setTrainerNameG(trainerNameRef.current.value.trim()))
        navigate('/pokedex')
    }


    return (
        <div className=" container_home">
            <img src="../ash.png" alt="" className="container_ash" />
            <img src="../logo.png" alt="" className="container_logo" />
            <h2 className="container_title">¡Hi, Trainer!</h2>
            <p className="container_parafo">To start in this application please, give me your trainer name. </p>
            <form className="container" onSubmit={handleSubmid}>
                <div className="title">¡Please! write more than 4 characters </div>
                <div className="container_input-button">
                    <input className="input" ref={trainerNameRef} type="text" placeholder="Write your name..." />
                    <button className=" button"><i className="bx bx-play-circle"></i></button>
                </div>
            </form>
        </div>
    )
}

export default Home