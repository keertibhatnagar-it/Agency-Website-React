import React from 'react'
import featureimage from '../images/Frame 19.png';
export default function Features() {
    return (
        <>
            <div id='features'>
                <div className='features-model'>
                    <img src={featureimage} alt='feature-image' />
                </div>
                <div className="features-text">
                    <h2>About Us</h2>
                    <h3>We help to <span>Scale </span>your business</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsam cumque deleniti vero ab illum ad ex? Quam veritatis nisi expedita voluptas officiis aspernatur labore et, repellat omnis saepe facere?
                        Commodi corporis dolorem animi debitis ducimus dicta sapiente necessitatibus autem nobis beatae inventore provident, quasi consequatur ipsa! Voluptate veritatis in laborum voluptatum possimus tenetur minima dolores, iusto ratione esse quia.
                        Omnis porro odio eveniet nostrum deleniti assumenda nobis incidunt, recusandae aut ullam temporibus repellendus aspernatur repudiandae nihil dicta nulla eligendi vitae natus harum? Commodi, sequi architecto. Nemo molestias mollitia consequuntur?</p>
                </div>
            </div>
            <div className="arrow">
            </div>
        </>
    )
}
// export default Features;
