import React from 'react'

export default function GeneralSettings(){
    const [createUser, setCreateUser] = React.useState({
        roles: 'admin',
        username: '',
        pwd: '',
        email: '',
        phone: ''
    })

    function handleOnChangeEvent(event){
        const {name,value} = event.target
        setCreateUser((prev)=> ({
            ...prev, [name]:value
        }))

    }

    async function handleCreateUserBtnEvent(){
        let url = 'http://localhost:8000/create_user'
        let postObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(createUser)
        }
        let response = await fetch(url, postObj)
        console.log(await response.text())
            
    }


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
                        <select name='roles' id='select-role' onChange={handleOnChangeEvent}>
                            <option name='roles' value='Admin'>Administrator</option>
                            <option name='roles' value='Cashier'>Cashier</option>
                        </select>
                        <label htmlFor="username" className='labels'>Username :</label>
                        <input type='text' placeholder='username . . . ' name='username' className='create-user-inputs' onChange={handleOnChangeEvent} value={createUser.username}/>
                        <label htmlFor="pwd" className='labels'>Password :</label>
                        <input type='password' placeholder='password . . . ' name='pwd' className='create-user-inputs' onChange={handleOnChangeEvent} value={createUser.pwd}/>
                    </div>
                    <div className='create-user-input-section-div'>
                        <label htmlFor="email" className='labels'>Email :</label>
                        <input type='email' placeholder='xxx@gmail.com' name='email' className='create-user-inputs' onChange={handleOnChangeEvent} value={createUser.email}/>
                        <label htmlFor="phone" className='labels'>Phone :</label>
                        <input type='number' placeholder='x(xxx)xxx-xxxx' name='phone' className='create-user-inputs' onChange={handleOnChangeEvent} value={createUser.phone}/>
                    </div>
                </div>
                <div className='create-user-button-div'>
                    <button id='create-user-create-btn' onClick={handleCreateUserBtnEvent}>Create</button>
                </div>
            </div>
        </div>
    )
}