import React from "react";
import menuimg from "../assets/images/Whole Branzino.jpg";
import "../assets/css/Menu.css";

const Menu=()=>{
    return (
    <main id="menupage">
        <h1>An Authentic Experience Awaits... Full Menu Coming Soon!</h1>
        <div id="menudiv">
            <img id="menuimg" src={menuimg} alt="Whole fish meal on bbq"/>
        </div>
    </main>
    );
}

export default Menu;