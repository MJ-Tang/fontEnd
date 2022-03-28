import React from "react"
　import logo from "../images/react-icon-small.png"

export default function NavBar() {
    return (
        <nav>
            <img src={logo} className="nav-icon" alt="" />
            <h3 className="nav-logo_text" >ReactFacts</h3>
            <h4 className="nav-title" >React Course - Project 1</h4>
        </nav>
    )
}
