import React from 'react'
import {icons} from './tableicondata'

export default function Item(){
    


    return (
        <div className='stock-item'>
            <img className='stock-img' src={icons[0].url} alt='icon of item' />
            <p className='stock-id'>4990087</p>
            <p className='stock-name'>Bleach</p>
            <p className='stock-supplier'>BCJ</p>
            <p className='stock-quantity'>10</p>
            <p className='stock-price'>$200</p>
            <p className='stock-total'>$2000</p>
        </div>
    )
}