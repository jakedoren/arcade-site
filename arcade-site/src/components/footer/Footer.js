import React from 'react'
import './Footer.css'
import {ImInstagram, ImTwitter, ImLinkedin2, ImFacebook} from 'react-icons/im'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <p>Keep up with us</p>
                <ul className="media">
                    <li><ImInstagram /></li>
                    <li><ImTwitter /></li>
                    <li><ImLinkedin2 /></li>
                    <li><ImFacebook /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
