import React from 'react'

function LogoutButton(props) {
    return (
        <div>
             <button onClick={props.onClick}>Log-Out</button>
        </div>
    )
}

export default LogoutButton
