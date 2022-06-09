import React from 'react'

import GeneralSettings from './general-settings-page'
import GenerateProduct from './generate-product-page'





export default function Settings(){

    const [click1, setClick1] = React.useState(false)
    const [click2, setClick2] = React.useState(true)
    const [click3, setClick3] = React.useState(false)

    function handleOnClickHeader(event){
        let element = event.target

        if(element.id === 'General'){
            setClick1(true)
            setClick2(false)    
            setClick3(false) 
        }else if(element.id === 'Generate Product'){
            setClick1(false)
            setClick2(true)
            setClick3(false) 
        }else{
            setClick1(false)
            setClick2(false)    
            setClick3(true) 
        }
           
       
    }


    function renderSettingsPage(){
        let pageHeader = ''
        if(click1){
            pageHeader = 'General'
        }else if(click2){
            pageHeader = 'Generate Product'
        }else if(click3){
            pageHeader = 'Product Details'
        }

        switch (pageHeader) {

            case 'General': return(<GeneralSettings />)
                
            case 'Generate Product': return(<GenerateProduct />)

            case 'Product Details': return(<div>I am the product details settings page</div>)
        
            default: return(<div>I am the default settings page</div>)
        }
    }

    document.addEventListener('keydown', (event) => {
        if(event.key === 'ArrowRight'){
            if(click1){
                // go to header 2
                setClick1(false)
                setClick2(true)
                setClick3(false) 
            }else if(click2){
                // go to header 3 
                setClick1(false)
                setClick2(false)    
                setClick3(true)
            }
        }else if(event.key === 'ArrowLeft'){
            if(click2){
                // go to header 1
                setClick1(true)
                setClick2(false)    
                setClick3(false)
            }else if(click3){
                // go to header 2
                setClick1(false)
                setClick2(true)
                setClick3(false)
            }
        }
    })
    

    let styles = {transform: 'translateY(5px)', 
                    background: 'linear-gradient(45deg, rgba(34,73,87,1) 0%, rgba(32,158,223,1) 50%, rgba(34,73,87,1) 100%)'}


    
    return (
        <div className='main-content'>
            <div className='settings-header-div'>
                <div className='settings-header' id='General'  onClick={handleOnClickHeader} style={click1 ? styles : {transition: 'transform 0.5s ease-in-out, background 0.5s ease-in-out'}}>General</div>
                <div className='settings-header' id='Generate Product' onClick={handleOnClickHeader} style={click2 ? styles : {transition: 'transform 0.5s ease-in-out, background 0.5s ease-in-out'}}>Generate Product</div>
                <div className='settings-header' id='Product Details' onClick={handleOnClickHeader} style={click3 ? styles : {transition: 'transform 0.5s ease-in-out, background 0.5s ease-in-out'}}>Product Details</div>
            </div>
            <div className='settings-main-info-div'>
                {renderSettingsPage()}
            </div>

        </div>
    )
}