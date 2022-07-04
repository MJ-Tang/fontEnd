import React from "react";
import classes from './banner.module.css'
import banner from '../images/banner.png'

const Banner = () => {
    return ( 
        <div className={classes.banner}>
            <img src={banner} alt="" />
        </div>
    );
}

export default Banner;