import React from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom'
import Data from './data'


export default function SignIn(props){
    const [formstate, setFormState] = React.useState({
        username: "",
        password: "",
        checked: false,
        incorrectPassword: true,
        })

    

    const navigate = useNavigate()
    
    function authorize(){
        for(let x=0; x < Data.length; x++){
            if(formstate.username === Data[x].username && formstate.password === Data[x].password){
                setFormState((prev) => ({
                    ...prev, incorrectPassword:true
                }))
                navigate('/dashboard')
                return
            }
        }
        setFormState((prev) => ({
            ...prev, incorrectPassword: false
        }))
    }
    function handleClick(){
        setFormState((prev) => ({...prev, checked:!formstate.checked}))
    }

    

    
    const styles = formstate.checked ?  {background:'transparent', borderWidth:'0.5px'} : {background:'#224957'}
    
    const darkModeWhite = props.darkMode ? {color:'#FFFFFF'} : {color:'#224957'}
    const darkModeGreen = props.darkMode ? {color:'#20DF7F'} : {color:'#224957'}
    
    function handleChange(event){
        const {name,type,value} = event.target
        setFormState((prev) => ({
            ...prev, [name]:value
        }))
    }

    

    return (
        <div className= "sign-in-div">
            <form>
                <h1 style={darkModeWhite}> Sign in </h1>
                <h3 style={darkModeWhite}> Sign in and start working on xxx's website . . .  </h3>
                <div className="input-div">
                    <input name="username" value={formstate.username} onChange={handleChange} className="login-txt" type="text" placeholder="Username"/>
                    <input name="password" value={formstate.password} onChange={handleChange} className="password-txt" type="password" placeholder="Password"/> 
                </div> 
                {formstate.incorrectPassword ? <span></span> : <h4 className='error-msg'><span>Your username or password is incorrect.</span><span>Please try again.</span></h4>} 
                <div className="remember-me" >
                        <div className="checkbox-div" onClick={handleClick}  
                        style={styles} > 
                        {formstate.checked && <img className="checkbox-img" src="../images/green-tick-2.png" alt="green tick icon" 
                        onClick={handleClick}/>}
                        </div>
                    <span className="remember-me-txt" onClick={handleClick} style={darkModeWhite}> Remember me </span>  
                    <span className="forgot-password" style={darkModeGreen}> Forgot password? </span>
                </div>
                <div className="login-btn" onClick={authorize} style={darkModeWhite}>
                    Login
                </div> 
            </form>   
        </div>
    )
}