import React, { ReactNode } from 'react'


function Card(props: {number: ReactNode, paragraph: ReactNode, header: ReactNode}){

    return(
        <div>
            <text>{props.number}</text>
            <header>{props.header}</header>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default Card;