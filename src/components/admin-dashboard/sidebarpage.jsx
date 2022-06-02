import React from 'react'


export default function Pages(props){
    function handleOnClickPages(){
        let name = props.name
        var url = name.replace(" ", "").toLowerCase()
        props.setPath(`/${url}`)
    }
    return (
        <div className='sidebar-page' onClick={handleOnClickPages}>
            <img className='page-img' src={props.url} alt='page icon' />
            <p className='page-name'>{props.name}</p>
        </div>
    )
}