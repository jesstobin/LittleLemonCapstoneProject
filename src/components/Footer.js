import React from "react"
import footer_logo from "../assets/images/footer_logo.png";
import facebook from "../assets/images/facebook-round-color-icon.svg";
import instagram from "../assets/images/ig-instagram-icon.svg";
import x from "../assets/images/x-social-media-round-icon.svg";
import {useNavigate } from "react-router-dom";
import "../assets/css/Footer.css";
import {
    faEnvelope,
    faLocationDot,
    faPhone,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    const navigate=useNavigate()

    function onHomeClick(event) {
        event.preventDefault();
        navigate("/")
    }
    const onAboutClick=(event)=> {
        event.preventDefault();
        navigate("/",{state:{scrollToSpecified:"about"}})
    }
    const onSpecialsClick=(event)=> {
        event.preventDefault();
        navigate("/",{state:{scrollToSpecified:"specials"}})
    }
    const onMenuClick=(event)=> {
        event.preventDefault();
        navigate("/menu")
    }
    const onBookingsClick=(event)=> {
        event.preventDefault();
        navigate("/booking")
    }
    return(
        <footer>
            <div id="footertop">
                <div>
                    <img id="footerlogo" src={footer_logo} alt="Little Lemon logo" />
                </div>
                <div>
                    <h3>Little Lemon</h3>
                    <div className="footermenulinksdiv">
                        <button className="menubuttons" onClick={onHomeClick}>Home</button>
                        <button className="menubuttons" onClick={onAboutClick}>About</button>
                        <button className="menubuttons" onClick={onSpecialsClick}> Specials</button>
                        <button className="menubuttons" onClick={onMenuClick}> Menu</button>
                        <button className="menubuttons" onClick={onBookingsClick}> Reservations</button>
                    </div>
                </div>
                <div>
                    <h3>Contact</h3>
                    <i><FontAwesomeIcon icon={faLocationDot} /></i>&nbsp;&nbsp;123 Main Street, Chicago, IL<br />
                    <i><FontAwesomeIcon icon={faPhone} /></i>&nbsp;&nbsp;+1 123 456 7890<br />
                    <i><FontAwesomeIcon icon={faEnvelope} /></i>&nbsp;&nbsp;Little@Lemon.com
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
                        <img className="sociallogos" src={facebook} alt="facebook logo" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
                    <img className="sociallogos" src={instagram} alt="instagram logo" />
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noreferrer noopener">
                    <img className="sociallogos" src={x} alt="x logo" />
                    </a>
                </div>
            </div>
            <div id="footerbottom">
                <p>&copy; Copyright. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;