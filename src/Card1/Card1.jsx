import React from 'react'
import Card from "../Card/Card";
import Web from '../img/Web.png'
import Digital from '../img/Digital.png'
import Application from '../img/Application.png'
import Blog from '../img/Blog.png'
import Graphic from '../img/Graphic.png'
import Contact from '../img/Contact.png'

    function card1(){
    return(
        <div className='card1'>
           <div style={{marginTop: '1400px',  marginLeft: '100px'}}>
                <Card
                image = {Web}
                heading = {'Web Development'}
                detail = {"Multi-Vendor E-commerce to Small Website, Payment Integration, API Integration, Domain Registration, Web Hosting, Website Maintenance, Website Redesign"}
                />
            </div>
            <div style={{marginTop: '1300px', marginLeft: '500px'}}>
                <Card
                image = {Application}
                heading = {'Applcation Development'}
                detail = {"IOS/Android Apps, Multi-vendor E-commerce to Small Apps"}
                />
            </div>
            <div style={{marginTop: '1100px', marginLeft: '900px'}}>
                <Card
                image = {Graphic}
                heading = {'Graphic Design'}
                detail = {"Logo Concept/Design, 2D/3D Graphics Design, Vector/Illustration, 2D/3D Mockups, Social Media Designs, UX/UI, Animation Concept/Designs."}
                />
            </div>
            <div style={{padding:"400px 100px"}}>
                <Card
                image = {Digital}
                heading = {'Digital Maketing'}
                detail = {"SEO, Social Media Marketing, Pay-Per-Click,Content Marketing, Email Marketing,Marketing Strategies"}
                />
            </div>
            <div style={{padding:"0px 500px", marginTop: '-400px'}}>
                <Card
                image = {Blog}
                heading = {'Blog'}
                detail = {"Get updated with latest news on our blogs and if you want you can also contribute  on our blog. Join Us by creatingan account."}
                />
            </div>
            <div style={{padding:"0px 900px", marginTop: '-400px'}}>
                <Card
                image = {Contact}
                heading = {'Contact Support'}
                detail = {"We are available 24/7 at your service.Contact Us if you have any kind of queries."}
                />
            </div>
        </div>
        
        
    )
    }

export default card1