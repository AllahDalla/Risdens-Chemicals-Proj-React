import React from 'react'


export default function Header(){
    return(
        <div className='stock-item-header'>
            <h3 className='header-status'>Status</h3>
            <h3 className='header-id'>ID</h3>
            <h3 className='header-name'>Product</h3>
            <h3 className='header-supplier'>Supplier</h3>
            <h3 className='header-quantity'>Quantity</h3>
            <h3 className='header-price'>Price</h3>
            <h3 className='header-total'>Total</h3>
        </div>
    )
}