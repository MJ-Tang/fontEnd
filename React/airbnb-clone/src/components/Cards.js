import React from "react";
import katie from '../images/katie-zaferes.png'
import star from '../images/star.png'

export default function Card() {
    return(
        <div className="card">
            <img src={katie} alt="" className="card-image" />
            <div className="card-starts">
                <img src={star} alt="" />
                <span>5.0</span>
                <span className="gray">(6) •</span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p> <span className="blod"> From $136</span> / person</p>
        </div>
    )
}