import React from "react";
import logoIcon from "../images/react-icon-small.png"

export default function Navbar(props) { 
    console.log("navDarkMode", props.darkMode);

    return (
        <nav  className={props.darkMode ? "dark": ""}>

            <img src={logoIcon} alt="" className="nav-logoIcon" />
            <h3 className="nav-logoText">ReactFacts</h3>

            <div className="toggler">

                <p className="toggler-light">Light</p>

                <div 
                    className="toggler-slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler-slider-circle"></div>
                </div>

                <p className="toggler-dark">Dark</p>
            </div>

        </nav>
    )
}