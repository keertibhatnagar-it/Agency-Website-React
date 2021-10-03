import React from 'react';
import Box from './Box';
import image1 from '../images/s1.png'
import image2 from '../images/s2.png'

export default function Services() {
    return (
        <div id="services">
            <div className="s-heading">
                <h1>Services we offer</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
            </div>
            <div className="b-container">
                <Box image={image1} alte='image1' button='MORE'/>
                <Box image={image2} alte='image2' button='MORE'/>
                <Box image={image2} alte='image2' button='MORE'/>
                <Box image={image2} alte='image2' button='MORE'/>
            </div>
        </div>
    )
}
