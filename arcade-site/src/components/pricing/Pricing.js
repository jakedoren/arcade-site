import React from 'react'
import './Pricing.css'
import racing from '../../assets/racing.jpg'

const Pricing = () => {
    return (
        <div className="pricing" id="pricing">
            <div className="pricing-container">
                <div className="flex1">
                    <div className="copy">
                        <h1>Kids</h1>
                        <p> $20 Unlimited Games All day</p>
                        <h1>Adults</h1>
                        <p>$25 Unimited games All day</p>
                    </div>
                </div>
                <div className="flex2">
                    <img src={racing} alt="our arcade" className="kidgaming-img"/>
                </div>
            </div>
        </div>
    )
}

export default Pricing
