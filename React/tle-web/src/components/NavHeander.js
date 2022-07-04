import React from "react";
import logoB from '../images/logoB.png'

import classes from './nav.module.css'

const NavHeader = () => {
    return ( 
        <div className={classes.nav}>
            <div className="logo">
                <img src={logoB} alt="" srcset="" />
            </div>
            <div className="navbar">
                <a href="#" className={classes.navItem}>首页</a>
                <a href="#">
                    全球认证
                    <i class='bx bxs-down-arrow'></i>   
                </a>
            </div>
        </div> 
    );
}

export default NavHeader;