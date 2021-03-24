import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
import './Navbar.css'
import {animateScroll as scroll, Link as LinkS} from 'react-scroll'

const Navbar = () => {

    const [Navbar, setNavbar] = useState(false)

    const changeNavBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", changeNavBackground)

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
 
        
    
    return (
        <div className={Navbar ? "nav sticky active" : "nav sticky"}>
            <div className="nav-container">
                <div>
                    <LinkS to="/" onClick={scrollToTop} className="brand">Arcadelux</LinkS>
                </div>
                <div>
                    <ul className="links">
                        <li>
                            <LinkS className="nav-links" offset={-80} to="pricing" exact={true} spy={true} activeClass="actives" smooth={true} duration={500}>Pricing</LinkS>
                        </li>
                        <li>
                            <LinkS className="nav-links" offset={-80} to="/contact" activeClass="actives">Book Now</LinkS>
                        </li>
                        <li>
                            <LinkS className="nav-links" offset={-80} to="about" exact={true} spy={true} activeClass="actives" smooth={true} duration={500}>About us</LinkS>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
