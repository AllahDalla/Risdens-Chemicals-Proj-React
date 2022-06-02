import React from 'react'
import {header} from './tableheaderdata'
import {icons} from './tableicondata'
import TableData from './tabledatacustomcomponent'

export default function Item(props){
    const data = [
        {
            status: icons[0].url,
            id: 1,
            supplier: 'Jam Pro',
            product: 'Rice',
            quantity: 11111,
            price: 100,
            total: 1000,
        },
        {
            status: icons[0].url,
            id: 2,
            supplier: 'True Juice',
            product: 'Mango',
            quantity: 8,
            price: 100,
            total: 1000
        },
        {
            status: icons[0].url,
            id: 3,
            supplier: 'I said Yes',
            product: 'yes',
            quantity: 1,
            price: 100,
            total: 1000
        },
        {
            status: icons[0].url,
            id: 4,
            supplier: 'True Juice',
            product: 'Orange',
            quantity: 107,
            price: 100,
            total: 1000
        },
        {
            status: icons[0].url,
            id: 5,
            supplier: 'Wray and Nephew',
            product: 'Apple',
            quantity: 10,
            price: 100,
            total: 1000
        },
        {
            status: icons[0].url,
            id: 6,
            supplier: 'Juice Mart',
            product: 'Juice',
            quantity: 99,
            price: 100,
            total: 1000
        },

        {
            status: icons[0].url,
            id: 7,
            supplier: 'Wray and Nephew',
            product: 'Apple',
            quantity: 101,
            price: 100,
            total: 1000
        }
        /*

        {
            status: icons[0].url,
            id: 8,
            supplier: 'Mr.Bleach',
            product: 'Bleach',
            quantity: 10,
            price: 100,
            total: 1000
        },
        {
            status: icons[0].url,
            id: 9,
            supplier: 'Mr.Bleach',
            product: 'Bleach',
            quantity: 10,
            price: 100,
            total: 1000
        },
        {
            status: icons[0].url,
            id: 10,
            supplier: 'Mr.Bleach',
            product: 'Bleach',
            quantity: 10,
            price: 100,
            total: 1000
        },
        */
    ]
    

    const tableheaders = header.map((element) => {
        return (
            element.Header
        )
    })

    const searchRegEx = new RegExp('('+props.input+')+', 'gi')
    const filteredArray = data.filter((element) => searchRegEx.test(element.product)
    || searchRegEx.test(element.supplier) || searchRegEx.test(element.quantity) 
    || element.product.includes(props.input) || element.supplier.includes(props.input))

    
    const itemsFilteredArray = filteredArray.map((data) =>{
        return(
        <TableData 
            key={data.id}
            status={data.status}
            ID = {data.id}
            supplier={data.supplier}
            product={data.product}
            quantity={data.quantity}
            price={data.price}
            total={data.total}
            icon={icons}
            setPath= {props.setPath} 
        />)
    } )

    const noMatchError = <TableData 
                            key='999'
                            status=''
                            ID = 'N/A'
                            supplier='N/A'
                            product='N/A'
                            quantity= 'N/A'
                            price='N/A'
                            total='N/A'
                            icon={icons} 
                            setPath= {props.setPath} 
                        />
    const tableStyle= localStorage.getItem('theme') ? {width:'100%', backgroundColor:'#e5e5e5', transition:'backgroundColor 2s'} :
    {width:'100%', backgroundColor:'#FFFFFF', transition:'backgroundColor 2s'}

    return (
        <table style={{width:'100%'}}>
            <thead>
                <tr>
                    {tableheaders.map((headers) => <th key={headers}>{headers}</th>)}
                </tr>
            </thead>
            <tbody>
                {itemsFilteredArray.length === 0 ? noMatchError : itemsFilteredArray}
            </tbody>
        </table>
    )
}