import React from 'react';


export default function(props){
    const [formstate, setFormState] = React.useState({
        checked: false
        })
        
    function handleClick(){
        setFormState((prev) => ({...prev, checked:!formstate.checked}))
    }
    
    function login(){
        console.log("User logged in . . .")
    }
    
    const styles = formstate.checked ?  {background:'transparent', borderWidth:'0.5px'} : {background:'#224957'}
    
    const darkModeWhite = props.darkMode ? {color:'#FFFFFF'} : {color:'#224957'}
    const darkModeGreen = props.darkMode ? {color:'#20DF7F'} : {color:'#224957'}
    
    return (
        <div className= "sign-in-div">
            <form>
                <h1 style={darkModeWhite}> Sign in </h1>
                <h3 style={darkModeWhite}> Sign in and start working on xxx's website . . .  </h3>
                <div className="input-div">
                    <input className="login-txt" type="text" placeholder="Login"/>
                    <input className="password-txt" type="password" placeholder="Password"/> 
                </div> 
                <div className="remember-me" >
                        <div className="checkbox-div" onClick={handleClick}  
                        style={styles} > 
                        {formstate.checked && <img className="checkbox-img" src="../images/green-tick-2.png" alt="picture of a tick" 
                        onClick={handleClick}/>}
                        </div>
                    <span className="remember-me-txt" onClick={handleClick} style={darkModeWhite}> Remember me </span>  
                    <span className="forgot-password" style={darkModeGreen}> Forgot password? </span>
                </div>
                <div className="login-btn" onClick={login} style={darkModeWhite}> Login </div> 
            </form>   
        </div>
    )
}