import React from 'react';
import SignIn from "./sign-in"
import Footer from "./sign-in-footer"


export default function Landing(props){
    
    const styles = props.darkMode ? {background:'#093545'} : {background:'#E5E5E5', }
    return(
        <div className="main" style={styles}>
            <SignIn darkMode={props.darkMode} />
            <Footer  toggle={props.switchTheme}/>    
        </div>
    )
}