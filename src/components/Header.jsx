import React from 'react'
import Navbar from './Navbar'
export default function Header() {
    return (
        <div id='main'>
            <Navbar/>
            <div className="name">
                <h1 >Helping you <span>Grow</span> Digitally</h1>
                <p className="details">We are the decisive factor behind your success.</p>
            <div className="header-btns">
                <a href="" className="cv-btn">Whatsapp Us!</a>
                <a href="" className="cv-btn">Email Us!</a>
            </div>
            </div>
        </div>
    )
}
