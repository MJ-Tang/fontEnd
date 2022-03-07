import React from "react";
import star from '../images/star.png'

export default function Card(props) {
    console.log(props);

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOULD OUT"
    } else if (props.location === 'Online') {
        badgeText = "ONLINe"
    }


    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}

            <img src={require(`../images/${props.img}`)} alt="" className="card-image" />
            <div className="card-starts">
                <img src={star} alt="" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"> <span className="blod"> From ${props.price}</span> / person</p>
        </div>
    )
}