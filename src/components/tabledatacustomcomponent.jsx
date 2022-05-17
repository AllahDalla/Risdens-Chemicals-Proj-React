import React from 'react'


export default function MoreInfo(props){

    const [displayImg, setDisplayImg] = React.useState(false)

    function handleMouseOverEvent(){
        setDisplayImg(true)
    }

    function handleMouseOutEvent(){
        setDisplayImg(false)
    }


    return (
        <tr onMouseOver={handleMouseOverEvent} onMouseOut={handleMouseOutEvent}>
            <td><img src={props.status} alt='status icon' /></td>
                <td>{props.ID}</td>
                <td>{props.supplier}</td>
                <td>{props.product}</td>
                <td>{props.quantity}</td>
                <td>${props.price}</td>
                <td><div id={props.ID} className='more-info-div'>
                ${props.total} 
                {displayImg && <img style={{width:'18px'}} src={props.icon[4].url} alt='more info icon'/>}
                </div>
            </td>
        </tr>
    )
}