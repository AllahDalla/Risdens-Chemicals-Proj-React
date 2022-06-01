import React from 'react'
import {useNavigate} from 'react-router-dom'
import PageData from './admin-dashboard/sidebarpagedata'
import Page from './admin-dashboard/sidebarpage'
import Table from './admin-dashboard/stock-table'



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
    const [revealInput, setRevealInput] = React.useState(false)
    const [darkMode, setDarkMode] = React.useState(false)

    const navigate = useNavigate()
    
    function handleSearchInputEvent(event){
        setSearchInput(()=>{ 
            let {value} = event.target
            return (value)
            
        })
    }


    function handleDarkMode(){
        setDarkMode((prev) => !prev)
    }


    function revealSearchInput(){
        setRevealInput((prev) => !prev)
    }

    function handleAddItemImg(){
        navigate('/settings')
    }

    const darkModeWhite = darkMode ? {backgroundColor:'#363740', borderBottom:'1px solid white'} : {backgroundColor:'#FFFFFF'}
    const darkModeDark = darkMode ? {backgroundColor: '#363740'} : {backgroundColor: '#e5e5e5'}

    const revealSearchInputStyles = {
        width:'130px',
        visibility:'visible',
        transition:'width 2s, visibility 0.5s'
    }
    const concealSearchInputStyles = {
        width:'0px',
        visibility:'hidden',
        transition:'width 1s, visibility 0.8s'
    }



    return (
        <div className='admin-dash'>
            <div className='sidebar'>
                <div className='dash-icon-div-top'>
                    <Page key='5' name='Dashboard' url='../images/dashboard-icon.png' />
                </div>
                {sidebarPageArray}
            </div>
            <div className='main-content' style={darkModeDark}>
                <div className='main-heading' style={darkModeWhite}>
                    <img className='company-logo' src='../images/company-logo-icon.png' alt='company logo' />
                    <h2 className='main-heading-title'>Dashboard</h2>
                    <div className='search' style={revealInput ? {width:'fit-content'} : {widh:'0px'}}>
                        <img className='search-img' src={darkMode ? '../images/search-icon-white.png' : '../images/search-icon-black.png'} alt='search icon'
                        onClick={revealSearchInput}
                        style={
                        revealInput ? {position:'static'}: 
                        {marginRight:'0px', marginTop:'23px'}}
                        />
                        <input name='search-input' className='search-input' type='text' placeholder='search...' 
                        value={searchInput}
                        onChange={handleSearchInputEvent}
                        style={revealInput ? revealSearchInputStyles : concealSearchInputStyles}
                        />
                    </div>
                    <img className='dashboard-add-img' src={darkMode ? '../images/add-icon-green.png' : '../images/add-icon-black.png'} 
                    alt='add icon' 
                    onClick={handleAddItemImg}
                    style={revealInput ? {marginLeft:'15px'} : {marginLeft:'10px'}}/>
                    <img className='admin-dark-mode-img' src='../images/dark-mode.png' alt='darkmode icon'
                    onClick={handleDarkMode}
                    style={{marginLeft:'15px'}}
                    />
                    <h2 className='main-heading-user'>User: A.Davis</h2>
                </div>
                <div className='main-info' style={darkMode ? {backgroundColor:'#e5e5e5'} : {backgroundColor:'#FFFFFF'}}>
                    <Table  
                    input={searchInput}
                    />
                </div>
            </div>
        </div>
    )
}