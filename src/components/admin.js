import React from 'react'
import PageData from './sidebarpagedata'
import Page from './sidebarpage'



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
    return (
        <div className='admin-dash'>
            <div className='sidebar'>
                <div className='dash-icon-div-top'>
                    <Page key='5' name='Dashboard' url='http://localhost:8080/dashboard-icon.png' />
                </div>
                {sidebarPageArray}
                </div>
            <div className='main-content'>
                <div className='main-heading'>
                    <h2 className='main-heading-title'>Tickets</h2>
                    <h2 className='main-heading-user'>Developer: A.Davis</h2>
                </div>
                <div className='main-info'><h1>New Page Here</h1></div>
            </div>
        </div>
    )
}