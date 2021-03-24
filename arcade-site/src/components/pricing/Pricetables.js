import { css, cx } from '@emotion/css'
import React from 'react'
import './Pricetables.css'

const Pricetables = (props) => {
    return (
        <div>
            <div className="copy-contain">
                <div className="copypr">
                    <h1>{props.title}</h1>
                </div>
                <div className="list-div">
                    <ul className={css`

                        li {
                            margin: 30px 0px;
                            font-size: 1.3rem;
                            color: black;
                        }

                    `}>
                        <li>{props.sec1}</li>
                        <li>{props.sec2}</li>
                        <li>{props.sec3}
                            <ul className={css`
                                li {
                                    list-style-type: circle;
                                }
                            `}>
                                <li>
                                    {props.sec4}
                                </li>
                            </ul>                        
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pricetables
