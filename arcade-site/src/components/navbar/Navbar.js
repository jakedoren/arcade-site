import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
import './Navbar.css'
import {animateScroll as scroll, Link} from 'react-scroll'

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
                    <Link to="/" onClick={scrollToTop} className="brand">Arcadelux</Link>
                </div>
                <div>
                    <ul className="links">
                        <li>
                            <Link to="about" smooth={true} duration={1000}>About us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Book Now</Link>
                        </li>
                        <li>
                            <Link to="pricing" smooth={true} duration={1000}>Pricing</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
