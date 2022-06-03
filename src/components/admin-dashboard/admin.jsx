import React from 'react'

import Table from './stock-table'




export default function Admin(props){
    let username = sessionStorage.getItem("username")
    return(
        <div className='main-content' style={props.darkModeDark}>
            <div className='main-heading' style={props.darkModeWhite}>
                <img className='company-logo' src='../images/company-logo-icon.png' alt='company logo' />
                <h2 className='main-heading-title'>Dashboard</h2>
                <div className='search' style={props.revealInput ? {width:'fit-content'} : {widh:'0px'}}>
                    <img className='search-img' src={props.darkMode ? '../images/search-icon-white.png' : '../images/search-icon-black.png'} alt='search icon'
                    onClick={props.revealSearchInput}
                    style={
                    props.revealInput ? {position:'static'}: 
                    {marginRight:'0px', marginTop:'23px'}}
                    />
                    <input name='search-input' className='search-input' type='text' placeholder='search...' 
                    value={props.searchInput}
                    onChange={props.handleSearchInputEvent}
                    style={props.revealInput ? props.revealSearchInputStyles : props.concealSearchInputStyles}
                    />
                </div>
                <img className='dashboard-add-img' src={props.darkMode ? '../images/add-icon-green.png' : '../images/add-icon-black.png'} 
                alt='add icon' 
                onClick={props.handleAddItemImg}
                style={props.revealInput ? {marginLeft:'15px'} : {marginLeft:'10px'}}/>
                <img className='admin-dark-mode-img' src='../images/dark-mode.png' alt='darkmode icon'
                onClick={props.handleDarkMode}
                style={{marginLeft:'15px'}}
                />
                <h2 className='main-heading-user'>User: {username}</h2>
            </div>
            <div className='main-info' style={props.darkMode ? {backgroundColor:'#e5e5e5'} : {backgroundColor:'#FFFFFF'}}>
                <Table  
                    input={props.searchInput}
                    setPath={props.setPath}
                />
            </div>
        </div>
    )
}