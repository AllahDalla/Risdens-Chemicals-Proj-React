import React from 'react'
import {useNavigate, useParams, useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom';


import PageData from './admin-dashboard/sidebarpagedata'
import Page from './admin-dashboard/sidebarpage'
import Table from './admin-dashboard/stock-table'
import Admin from './admin-dashboard/admin'
import Settings from './settings-dashboard/settings-page'



export default function FrameWork(){
    var url = window.location.pathname
    const [path, setPath] = React.useState(url)
    const [searchInput, setSearchInput] = React.useState('')
    const [revealInput, setRevealInput] = React.useState(false)
    const [darkMode, setDarkMode] = React.useState(false)


    const sidebarPageArray = PageData.map((element) => {
        let path = element.name.replace(" ", "").toLowerCase()
        return(
            <Link key={element.id} to={`/${path}`} style={{textDecoration: 'none'}}>
            <Page 
                key= {element.id}
                name= {element.name}
                url= {element.url}
                setPath= {setPath}
            />
            </Link> 
        )
    })


    const navigate = useNavigate()

    function getQueryString(){
        
    }
    
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
        setPath('/settings')
        navigate('/settings')
    }

    function handleSwitchBetweenPages(){
        switch (path) {
            case '/dashboard': return(<Admin 
                                        darkMode={darkMode}
                                        darkModeDark={darkModeDark}
                                        darkModeWhite={darkModeWhite}
                                        revealInput={revealInput}
                                        revealSearchInput={revealSearchInput}
                                        handleSearchInputEvent={handleSearchInputEvent}
                                        revealSearchInputStyles={revealSearchInputStyles}
                                        concealSearchInputStyles={concealSearchInputStyles}
                                        handleAddItemImg={handleAddItemImg}
                                        handleDarkMode={handleDarkMode}
                                        searchInput={searchInput}
                                        setPath={setPath}
                                    /> )
        
            case '/settings':return(<Settings />)
            
            default:return(<div>This is the default settings</div>)
        }
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

    // console.log(url)
    return (
        <div className='admin-dash'>
            <div className='sidebar'>
                <div className='dash-icon-div-top'>
                    <Link to={`/dashboard`} style={{textDecoration: 'none'}}>
                        <Page key='5' name='Dashboard' url='../images/dashboard-icon.png' setPath={setPath}/>
                    </Link>
                </div>
                {sidebarPageArray}
            </div>
            {handleSwitchBetweenPages()}
        </div>
    )
}