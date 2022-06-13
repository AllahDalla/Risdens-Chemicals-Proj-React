import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function MoreInfo(props){

    const [displayImg, setDisplayImg] = React.useState(false)

    function handleMouseOverEvent(){
        setDisplayImg(true)
    }

    function handleMouseOutEvent(){
        setDisplayImg(false)
    }

    const navigate = useNavigate()
    function handleClickMoreInfo(){
        props.setPath(`/settings`)
        navigate('/settings?id='+props.ID+'&supp='+props.supplier+'&prod='+props.product+'&quantity='+props.quantity+'&price='+props.price+'&tot='+props.total)

    }

    return (
        <tr onMouseOver={handleMouseOverEvent} onMouseOut={handleMouseOutEvent} onClick={handleClickMoreInfo}>
            <td><img src={props.status} alt='status icon' /></td>
                <td>{props.ID}</td>
                <td>{props.supplier}</td>
                <td>{props.product}</td>
                <td>{props.quantity}</td>
                <td>${props.price}</td>
                <td><div id={props.ID} className='more-info-div'>
                ${props.total} 
                {displayImg && <img style={{width:'18px'}} src={props.icon[4].url} alt='more info icon' onClick={handleClickMoreInfo}/>}
                </div>
            </td>
        </tr>
    )
}