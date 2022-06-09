import React from 'react'


export default function GenerateProduct(){

    const [genProd, setGenProd] = React.useState({
        pname: '',
        supp: '',
        quant: '',
        price: '',
        thresh: ''
    })


    function handleOnChangeEvent(event){
        const {name,value} = event.target
        setGenProd((prev)=> ({
            ...prev, [name]:value
        }))
    }


    return(
        <div className='general-settings-div'>
            <div className='create-user-div'>
                <div className='create-user-header'>
                    <img className='create-user-img' src='../images/create-product-light.png' alt='create user icon'/>
                    <p className='create-user-header-text'>Generate Product</p>
                </div>
                <div className='create-user-input-div'>
                    <div className='create-user-input-section-div'>
                        <label htmlFor="pname" className='labels'>Name :</label>
                        <input type='text' placeholder='name . . . ' name='pname' className='create-user-inputs' onChange={handleOnChangeEvent}/>
                        <label htmlFor="supp" className='labels'>Supplier :</label>
                        <input type='text' placeholder='supplier . . . ' name='supp' className='create-user-inputs' onChange={handleOnChangeEvent}/>
                        <label htmlFor="quant" className='labels'>Quantity :</label>
                        <input type='number' name='quant' className='create-user-inputs' onChange={handleOnChangeEvent}/>
                    </div>
                    <div className='create-user-input-section-div'>
                        <label htmlFor="price" className='labels'>Price :</label>
                        <input type='number' name='price' className='create-user-inputs' onChange={handleOnChangeEvent}/>
                        <label htmlFor="thresh" className='labels'>Threshold :</label>
                        <input type='number' name='thresh' className='create-user-inputs' onChange={handleOnChangeEvent}/>
                    
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