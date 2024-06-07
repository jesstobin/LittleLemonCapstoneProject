import React from "react";
import "../assets/css/About.css";
import Amber from "../assets/images/Amber.jpeg";
import Sarah from "../assets/images/Sarah.jpeg";

const About=()=>{
    return (
    <section id="about">
        <div>
            <h1>Little Lemon</h1>
            <p>
            Little Lemon is owned by two European sisters: Amber and Sarah.  
            Amber moved to the United States to study finance and Sarah moved to the United States to expand her culinary experience. 
            Together they came up with the idea that opening up a restaurant would be a great partership. 
            Amber overseas all business and marketing aspects of the restaurant while Sarah runs the kitchen and is the creative director behind all Little Lemon dishes. 
            </p>
        </div>

        <div id="aboutimages">
            <img id="amber" src={Amber} alt="Amber"/>
            <img id="sarah" src={Sarah} alt="Sarah"/>
        </div>
    </section>
    )
}

export default About;