import React from 'react'
import './About.css'
import kidgroup from '../../assets/kidgroup.jpg'
const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <div className="flex1">
                    <div>
                        <h1>Our Mission</h1>
                        <p>We started as a small group of college students in 1984. As a part of our gaming club program we met on campus to play our favorite games. This is where inspiration struck. Our gaming club's bright minds and entrerenuers decided to start their own arcade, Arcadelux. We are proud of our roots and our service bringing many friends and family together for over 30 years. Our goal is to bring friends and family together through our timeless video games in our arcade.</p>
                    </div>  
                </div>
                <div className="flex2">
                    <div>
                        <img src={kidgroup} alt="mission" className="kid-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
