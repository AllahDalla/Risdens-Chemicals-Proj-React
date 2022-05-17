import React from 'react'
import {header} from './tableheaderdata'
import {icons} from './tableicondata'
import TableData from './tabledatacustomcomponent'

export default function Item(){
    const data = [
        {
            status: icons[0].url,
            id: 1,
            supplier: 'Mr.Bleach',
            product: 'Bleach',
            quantity: 10,
            price: 100,
            total: 1000,
        },
        {
            status: icons[0].url,
            id: 2,
            supplier: 'Mr.Bleach',
            product: 'Bleach',
            quantity: 10,
            price: 100,
            total: 1000
        },
        {
            status: icons[0].url,
            id: 3,
            supplier: 'Mr.Bleach',
            product: 'Bleach',
            quantity: 10,
            price: 100,
            total: 1000
        }
        /*
        {
            status: icons[0].url,
            id: 4,
            supplier: 'Mr.Bleach',
            product: 'Bleach',
            quantity: 10,
            price: 100,
            total: 1000
        },
        {
            status: icons[0].url,
            id: 5,
            supplier: 'Mr.Bleach',
            product: 'Bleach',
            quantity: 10,
            price: 100,
            total: 1000
        },
        {
            status: icons[0].url,
            id: 6,
            supplier: 'Mr.Bleach',
            product: 'Bleach',
            quantity: 10,
            price: 100,
            total: 1000
        },
        {
            status: icons[0].url,
            id: 7,
            supplier: 'Mr.Bleach',
            product: 'Bleach',
            quantity: 10,
            price: 100,
            total: 1000
        },
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

    return (
        <table style={{width:'100%'}}>
            <thead>
                <tr>
                    {tableheaders.map((headers) => <th key={headers}>{headers}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((data) =>{
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
                        />
                    )
                } )}
            </tbody>
        </table>
    )
}