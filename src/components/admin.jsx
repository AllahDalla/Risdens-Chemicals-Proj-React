import React from 'react'
import PageData from './sidebarpagedata'
import Page from './sidebarpage'
import Item from './stock-item'
import Header from './stock-item-header'


export default function Admin(){
    // console.log(Page)
    const sidebarPageArray = PageData.map((element) => {
        return(
            <Page 
            key= {element.id}
            name= {element.name}
            url= {element.url}
            />
        )
    })
    const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17]
    const testerItems = array.map((element) => {
        return (<Item key={element} />)
    })

    return (
        <div className='admin-dash'>
            <div className='sidebar'>
                <div className='dash-icon-div-top'>
                    <Page key='5' name='Dashboard' url='../images/dashboard-icon.png' />
                </div>
                {sidebarPageArray}
                </div>
            <div className='main-content'>
                <div className='main-heading'>
                    <h2 className='main-heading-title'>Tickets</h2>
                    <h2 className='main-heading-user'>Developer: A.Davis</h2>
                </div>
                <div className='main-info'>
                    <Header />
                    {testerItems}
                </div>
            </div>
        </div>
    )
}