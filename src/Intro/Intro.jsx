import React from 'react'
import './Intro.css'
import Logo from '../img/computer.png'

function intro(){
    return(
        <div className='intro'>
            <div className='i-left'>
            <div className='i-name'>
             
            WE HEAR 

            </div>
            <div className='i-naame'> 
              WE MAKE IT HAPPEN
            </div>
            <div className='i-namee'>
                Website Development and Graphic Designing
            </div>
            <div className='i-nameee'>   
                We provide a complete web and app solution by providing you the esential services including branding, graphic design, UX/UI design, web development, content, social media integration, SEO, and online marketing.
            </div>
             <button className='i-buttonn'>Connect Now</button>
            </div>
            <div className='i-right'>
                 <div className='comp'>
                    <img src={require('../img/computer.png')} width={1000}
                     height={600}/>
                 </div> 
            </div>
        </div>
    )
    }

export default intro