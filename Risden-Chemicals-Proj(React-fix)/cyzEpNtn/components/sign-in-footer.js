import React from "react"


export default function(props){
    return (
        <div className="sign-in-footer" >
            <img className="dark-mode-img" src="./images/dark-mode.png" alt="picture icon of dark mode"
            onClick={props.toggle}/>
        </div> 
    )
}