import React from 'react'
import Paper from './card';
import Data from './data'

function Card(){

    return(
        <>
        <p></p>
        <h1></h1>
        <section>
            <main><img src='' alt=''></img></main>
            <main>
            
        {Data.map(item => (
           <Paper
           {...item}></Paper>
        ))}
            </main>
        </section>
        </>
    )
}

export default Card;