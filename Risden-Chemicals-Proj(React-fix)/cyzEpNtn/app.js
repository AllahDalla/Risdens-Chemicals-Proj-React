import React from 'react';
import SignIn from "./components/sign-in"
import Footer from "./components/sign-in-footer"


export default function(){
    const [darkMode, setDarkMode] = React.useState(false)
    
    function switchTheme(){
        setDarkMode((prev) => !prev)
        console.log(darkMode)
    }
    
    const styles = darkMode ? {background:'#093545'} : {background:'#E5E5E5'}
    return(
        <div className="main" style={styles}>
            <SignIn darkMode={darkMode} />
            <Footer  toggle={switchTheme}/>    
        </div>
    )
}