import React from 'react'
import PageData from './sidebarpagedata'
import Page from './sidebarpage'
import Table from './stock-table'


export default function Admin(){
    const sidebarPageArray = PageData.map((element) => {
        return(
            <Page 
            key= {element.id}
            name= {element.name}
            url= {element.url}
            />
        )
    })

    const [searchInput, setSearchInput] = React.useState('')
    
    function handleSearchInputEvent(event){
        setSearchInput(()=>{ 
            let {value} = event.target
            return (value)
            
        })
    }

    function handleClickCancel(){
        setSearchInput('')
    }


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
                    <h2 className='main-heading-title'>Dashboard</h2>
                    <div className='search'>
                        <img className='search-img' src='../images/search-icon.png' alt='search icon'/>
                        <input name='search-input' className='search-input' type='text' placeholder='search...' 
                        value={searchInput}
                        onChange={handleSearchInputEvent}
                        />
                        <div className='search-cancel' onClick={handleClickCancel}>cancel</div>
                    </div>
                    <h2 className='main-heading-user'>User: A.Davis</h2>
                </div>
                <div className='main-info'>
                    <Table  
                    input={searchInput}
                    />
                </div>
            </div>
        </div>
    )
}