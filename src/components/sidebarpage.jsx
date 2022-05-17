import React from 'react'


export default function Pages(props){
    return (
        <div className='sidebar-page'>
            <img className='page-img' src={props.url} alt='page icon' />
            <p className='page-name'>{props.name}</p>
        </div>
    )
}