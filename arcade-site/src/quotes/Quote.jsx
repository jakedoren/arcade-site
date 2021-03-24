import React, {useState} from 'react'
import './Quote.css'
import {css, cx} from '@emotion/css'

const Quote = () => {
    const quotes = {
        0: {
            client: "Meagan Yannacone",
            quote: "Amazing arcade. My favorite spot in orlando to hangout on the weekends"
        },
        1: {
            client: "Mark Allen",
            quote: "I had a great experience at arcadelux, the games were amazing and the staff treated my family and I in a great manner"
        },
        2: {
            client: "Eric Johnson",
            quote: "Lovely place. Got my game on with some friends after work"
        },
        3: {
            client: "Alexa Springfield",
            quote: "My Husband and I had a great time at Arcadelux. The food, the drinks and the people were all fantastic. Made it feel like home"
        },
    }
    const [current, setCurrent] = useState(quotes[0])
    const [active, setActive] = useState(0)

    const handleSetClick = (event) => {
        setCurrent(quotes[event.target.getAttribute("data-quote")])
        setActive(event.target.getAttribute("data-quote"))
    }

    return (
        <div className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            max-width: 700px;
            padding: 100px ;

            p {
                text-align: center;
                margin-bottom: 20px;

            }
        `}>
            <p>"{current.quote}"</p>
            <p>{current.client}</p>
            <div className={css`
                display: flex;

                span {
                    height: 20px;
                    width: 20px;
                    margin: 0 3px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }
                
                span::before {
                    content: "";
                    height: 6px;
                    width: 6px;
                    background-color: #ffffff;
                    border-radius: 50%;
                    transition: background-color 0.3s ease;
                }

                span:hover::before {
                    background-color: #ffff00;
                }

                span[data-quote = "${active}"]::before {
                    background-color: #ffff00;
                }
            `}>
                {Object.keys(quotes).map(index => (
                    <span onClick={event => handleSetClick(event)} data-quote={index} key={index}></span>
                ))}
            </div>
        </div>
    )
}

export default Quote
