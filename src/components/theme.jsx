import React from 'react'
import Landing from './Sign-in-comp/landing'
import Admin from './admin-dashboard/admin'


export default function Theme(){
    const [darkMode, setDarkMode] = React.useState(false)
    setDarkMode((prev) => !prev)
    console.log(darkMode)
    return darkMode
}

