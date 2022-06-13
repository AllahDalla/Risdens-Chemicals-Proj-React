import React from 'react'
import {useSearchParams, useLocation} from 'react-router-dom'


export default function GetQueryString(){
    let location = useLocation()
    const [searchParams] = useSearchParams()
    console.log(location.search)
    const queryStringObj = Object.fromEntries([...searchParams]) 
    console.log(queryStringObj.id)
}