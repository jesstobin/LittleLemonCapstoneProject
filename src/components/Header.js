import React from "react";
import {useNavigate} from 'react-router-dom';
import mainimg from "../assets/images/mainimg.jpg";
import '../assets/css/Header.css'

const Header=()=>{
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/booking');

    return(
    <header>
        <div id="header-left">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
            <button onClick={handleOnClick}>Reserve a Table</button>
        </div>
        <div id="header-right">
            <img src={mainimg} alt="Waiter serving 4 bruschetta"/>
        </div>
    </header>
    )
}

export default Header;