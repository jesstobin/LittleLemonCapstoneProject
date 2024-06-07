import React from "react";
import "../assets/css/TestimonialsRating.css";
import fivestars from "../assets/images/5stars.svg";

const TestimonialsRating=({image, name, reviewText}) =>{
    return(
        <div id="testimonialrating">
            <img id="rating5starimage" src={fivestars} alt="5 star rating" />
            <div id="onereviewcontainer">
                <div>
                    <img id="reviewpersonimage" src={image} alt="Reviewer face" />
                </div>
                <div id="reviewnameandtext">
                    <h2>{ name }</h2>
                    <p>{ reviewText }</p>
                </div>
            </div>
        </div>
    )
}
export default TestimonialsRating;