import React from 'react'

export default function GeneralSettings(){
    return (
        <div className='general-settings-div'>
            <div className='create-user-div'>
                <div className='create-user-header'>
                    <img className='create-user-img' src='../images/create-user-icon-light.png' alt='create user icon'/>
                    <p className='create-user-header-text'>Create User</p>
                </div>
                <div className='create-user-input-div'>
                    <div className='create-user-input-section-div'>
                        <label id='select-roles-label' htmlFor="roles" className='labels'>Choose role :</label>
                        <select name='roles' id='select-role'>
                            <option value='Admin'>Administrator</option>
                            <option value='Cashier'>Cashier</option>
                        </select>
                        <label htmlFor="username" className='labels'>Username :</label>
                        <input type='text' placeholder='username . . . ' name='username' className='create-user-inputs'/>
                        <label htmlFor="pwd" className='labels'>Password :</label>
                        <input type='password' placeholder='password . . . ' name='pwd' className='create-user-inputs'/>
                    </div>
                    <div className='create-user-input-section-div'>
                        <label htmlFor="email" className='labels'>Email :</label>
                        <input type='email' placeholder='xxx@gmail.com' name='email' className='create-user-inputs'/>
                        <label htmlFor="phone" className='labels'>Phone :</label>
                        <input type='number' placeholder='x(xxx)xxx-xxxx' name='phone' className='create-user-inputs'/>
                    </div>
                </div>
                <div className='create-user-button-div'>
                    {/* <button id='create-user-cancel-btn'>Cancel</button> */}
                    <button id='create-user-create-btn'>Create</button>
                </div>
            </div>
        </div>
    )
}