import React from 'react'
import {useSearchParams, useLocation} from 'react-router-dom'


export default function GetQueryString(){
    let location = useLocation()
    const [searchParams] = useSearchParams()
    // console.log(location.search)
    const queryStringObj = Object.fromEntries([...searchParams]) 
    // console.log(queryStringObj.id)

    React.useEffect(()=>{
        async function getData(){
            let url = 'http://localhost:8000/'
            await fetch(url)
                .then(async response => {
                    if(response.status === 200){
                        let res = await response.text()
                        console.log(res)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
        getData()
    }, [location])
}