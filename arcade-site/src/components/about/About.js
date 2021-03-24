import React from 'react'
import './About.css'
import kidgroup from '../../assets/kidgroup.jpg'
import donkeykong from '../../assets/ok.png'


const About = (props) => {

    console.log(props.name)
    return (
        <div id="about" className="about">
            <div className="about-container">
                <div className="flexa1">
                    <div className="copy">
                        <h1>Our Mission</h1>
                        <p>We started as a small group of college students in 1984. As a part of our gaming club program we met on campus to play our favorite games. This is where inspiration struck. Our gaming club's bright minds and entrerenuers decided to start their own arcade, Arcadelux. We are proud of our roots and our service bringing many friends and family together for over 30 years. Our goal is to bring friends and family together through our timeless video games in our arcade.</p>
                    </div>  
                </div>
                <div className="flexa2">
                    <div>
                        <img src={donkeykong} alt="donkey-kong" className="dk-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
