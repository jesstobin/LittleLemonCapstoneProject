import React from "react";
import specialone from "../assets/images/greeksalad.jpg";
import specialtwo from "../assets/images/bruschetta.jpg";
import specialthree from "../assets/images/lemon dessert.jpg";
import "../assets/css/Specials.css";
import MopedSVG from "../assets/images/moped.svg";
import {useNavigate } from "react-router-dom";
const Specials=() => {
    const navigate=useNavigate()
    const onSpecialsClick=(event)=> {
        event.preventDefault();
        navigate("/menu")
    }
    return(
        <section id="specials">
            <h1>Current Specials!</h1>
            <div className="specialsall">
                <div className="specialsallcard">
                    <img src={specialone} alt="greek salad" />
                    <div className="dishNameandPrice">
                        <h4>Greek Salad</h4>
                        <div>$ 12.99</div>
                    </div>
                    <p>
                        The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                    </p>
                    <p className="bottom-text" role="button" tabIndex="0" onClick={onSpecialsClick}>
                        Order a Delivery<i><img className="MopedSVG" src={MopedSVG} alt="Moped" /></i>
                    </p>
                </div>
                <div className="specialsallcard">
                    <img src={specialtwo} alt="bruschetta" />
                    <div className="dishNameandPrice">
                        <h4>Bruschetta</h4>
                        <div>$ 5.99</div>
                    </div>
                    <p>
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
                    </p>
                    <p className="bottom-text" role="button" tabIndex="0" onClick={onSpecialsClick}>
                        Order a Delivery<i><img className="MopedSVG" src={MopedSVG} alt="Moped" /></i>
                    </p>
                </div>
                <div className="specialsallcard">
                    <img src={specialthree} alt="lemon desert" />
                    <div className="dishNameandPrice">
                        <h4>Lemon Dessert</h4>
                        <div>$ 5.00</div>
                    </div>
                    <p>
                        This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.  
                    </p>
                    <p className="bottom-text" role="button" tabIndex="0" onClick={onSpecialsClick}>
                        Order a Delivery<i><img className="MopedSVG" src={MopedSVG} alt="Moped" /></i>
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Specials;