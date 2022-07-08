import React from 'react'
import './Recent.css'
import Logo from '../img/Recent.png'

function Recent(){
    return(
        <div className='Recent'>
            <div className='i-left'>
            <div className='recent'>
                    <img src={require('../img/Recent.png')} width={774}
                     height={559}/>
                 </div> 
            </div>
            <div className='i-right'>
            <div className='i-recent'>
                Our Recent Project
                </div>
            <div className='project'>
                <div className='i-recents'> 
                Danira's Dalmoth
                </div>
                <div className='i-recentss'> 
                    Company
                </div>
             </div>
            <div className='i-recentsss'>
             Danira’s is a brand of “Pushpanjali Spices and Food Products”is a premium manufacturer and supplier of innovative quality food products at competitive rate. Danira’s is a product which has been launched in most of the places in Nepal. It a product with perfect mixture of spices and namkeens. 
            </div>
              <button className='i-buton'>View More Portfolio</button>
            </div>
        </div>
    )
    }

export default Recent