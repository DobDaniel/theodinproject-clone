import React from 'react'
import "./Card.css";
const Card = (props) => {
    return (
        <div className="tile">
            <img className="image" src={props.img} alt={props.alt}/>
            <p className="title">{props.object.title}</p>
            <p className="description">{props.object.description}</p>
        </div>
    )
}

export default Card

