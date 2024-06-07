import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo1.jpg";
import { Link } from "react-router-dom";
import "../assets/css/Nav.css"
import hamberger from "../assets/images/hamberger_menu_icon.svg"
import cross from "../assets/images/cross.svg"

const Nav=()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileWidth, setIsMobileWidth] = useState(window.innerWidth > 600 ? false : true);
    const [menuItemContainerStyles, setMenuItemContainerStyles] = useState({display: 'flex'})

    const onMenuClicked = (event) => {
        event.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=> {
        if (!isMobileWidth) {
            setMenuItemContainerStyles({display: 'flex'});
        }
        else if (isMobileWidth && isMenuOpen) {
            setMenuItemContainerStyles({display: 'grid'});
        } else {
            setMenuItemContainerStyles({display: 'none'});
        }
    }, [isMobileWidth, isMenuOpen])

    useEffect(() => {
        function handleResize() {
          setIsMobileWidth(window.innerWidth > 600 ? false : true)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
    <nav>
        <Link to="/">
            <img src={logo} alt="Little Lemon Logo" />
        </Link>
        <div style={menuItemContainerStyles}>
            <Link className="menuTextItems" to="/">Home</Link>
            <Link className="menuTextItems" to="/" state={{scrollToSpecified: "about"}}>About</Link>
            <Link className="menuTextItems" to="/" state={{scrollToSpecified: "specials"}}>Specials</Link>
            <Link className="menuTextItems" to="/menu">Menu</Link>
            <Link className="menuTextItems" to="/booking">Reservations</Link>
        </div>
        { isMenuOpen
            ? <button id="crossMenuButton" onClick={onMenuClicked}><img src={cross} alt="Click to close menu" /></button>
            : <button id="hambergerMenuButton" onClick={onMenuClicked}><img src={hamberger} alt="Click to open menu" /></button>
        }
    </nav>
    )
}

export default Nav;