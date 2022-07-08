import React from 'react'
import Card from "../Card2/Card2";
import Webb from '../img/37.png'
import './Company.css'

    function company(){
    return(
        <div className='company'>
           <div style={{marginTop: '-310px',  marginLeft: '100px'}}>
                <Card
                image = {Webb}
                heading = {'Mobile Development'}
                detail = {"We specialize in creating mobile apps for Windows, Android,  and ios. Our expertise is in developing data-driven, collaborative apps for consumers with insightful analytics.                "}
                />
            </div>
            <div style={{marginTop: '-310px', marginLeft: '500px'}}>
                <Card
                image = {Webb}
                heading = {'Graphic Designing'}
                detail = {"Good design is all about making other designers jealous. We provide you with a uniqueness in every masterpiece designs. “You think, we design”"}
                />
            </div>
            <div style={{marginTop: '-310px', marginLeft: '900px'}}>
                <Card
                image = {Webb}
                heading = {'Digital Marketing'}
                detail = {"Even a useless thing holds a different value in the market. Marketing is no longer about the stuff that you make, but about stories you tell."}
                />
            </div>
        </div>
        
        
    )
    }

export default company