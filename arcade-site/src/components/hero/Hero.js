import React from 'react'
import VideoBg from '../../assets/videobg.mp4'
import './Hero.css'
const Hero = () => {
    return (
        <div className="hero">
            <video autoPlay loop muted 
            style={{
                position: "absolute",
                width: "100%",
                // left: "50%",
                // top: "50%",
                height: "100%",
                objectFit: "cover",
                // transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}
            >
                <source src={VideoBg} type="video/mp4" />
            </video>
            <div style={{
                textAlign: "center"
            }}>
                <h1>We're ArcadeLux</h1>
                <p>Come visit us in downtown Orlando to experience all kinds of arace games from every era!</p>
            </div>
        </div>
    )
}

export default Hero
