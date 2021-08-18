import React from 'react'

function NumberList(props) {
 return (
        <div>
           <ul>
               {props.numbers.map((number, index) =>( 
                    <li key={index}>{number}</li>))}
           </ul>
        </div>
    )
}

export default NumberList

