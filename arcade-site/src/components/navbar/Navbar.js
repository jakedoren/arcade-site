import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav sticky">
            <div className="nav-container">
                <div>
                    <Link to="/" className="brand">Arcadelux</Link>
                </div>
                <div>
                    <ul className="links">
                        <li>
                            <Link to ="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Book Now</Link>
                        </li>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
