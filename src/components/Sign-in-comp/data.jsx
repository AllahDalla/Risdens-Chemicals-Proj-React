import React from 'react'

export default async function getAuthorized(credentials){
    const url = 'http://localhost:8000/authorize'
    const queryObj = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    }
    let response = await fetch(url,queryObj)
    let data = await response.text()
    console.log(data)
}


