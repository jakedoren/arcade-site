import React from 'react'
import './Pricing.css'
import Pricetables from './Pricetables'

const Pricing = () => {
    return (
        <div className="pricing" id="pricing">
           
            <div className="pricing-container">
                <div className="flexp1">
                    <Pricetables title="Kids" sec1="$20 entry unlimited games all day" sec2="+$5 full access to all day buffet" sec3="Kids only" sec4="Kids club 13 and under" sec5=" " />
                </div>
                <div className="flexp2">
                    <Pricetables title="Adults" sec1="$29 entry unlimited games all day" sec2="+$5 full access to all day buffet" sec3="Adults only" sec4=" 21+ Drinks starting 6pm" sec5=""/>
                </div>
            </div>
        </div>
    )
}

export default Pricing
