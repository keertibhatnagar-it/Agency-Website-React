import React from 'react'

export default function Box(props) {
    return (
        <div className="s-box">
            <div className="s-b-img">
                <img src={props.image} alt={props.alte}/>
            </div>
            <div className="s-b-text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos illum dicta quas ducimus totam, neque illo rem eveniet eligendi corporis exercitationem, consequuntur, perspiciatis quaerat sequi molestias dolorum corrupti animi doloremque.</p>
                <a href="#" className="cv-btn">{props.button}</a>
            </div>
        </div>
    )
}
