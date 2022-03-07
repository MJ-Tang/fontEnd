import React from "react";
import star from '../images/star.png'

export default function Card(props) {
    console.log(props);
    return(
        <div className="card">
            <img src={require(`../images/${props.img}`)} alt="" className="card-image" />
            <div className="card-starts">
                <img src={star} alt="" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p> <span className="blod"> From ${props.price}</span> / person</p>
        </div>
    )
}