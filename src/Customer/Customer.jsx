import React from 'react'
import './Customer.css'
import Logo from '../img/image.png'
import Logoo from '../img/imagee.png'
import Logooo from '../img/imageee.png'

    function customer(){
    return(
        <div className='customer'>
            <div className='customer1'>
               Our Costumers
            </div>
            <div className='customer2'> 
                Clients Love Our Work
            </div>
            <div className='customer3'>
            But don’t just take our word for it...
            </div>
            <div className='customer4'>
            <img src={require('../img/image.png')} width={150}height={80}/>
            <img src={require('../img/imagee.png')} width={150}height={80}/>
            <img src={require('../img/imageee.png')} width={150}height={80}/>
            </div>
    
        </div>
        
    )
    }

export default customer