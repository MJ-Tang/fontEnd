import React from "react";
import about from '../../data'

import classes from './about.module.css'


const About = () => {
    return (
        <div>
            <div className={classes.title}>
                {about.title}
            </div>
            <div>
                {about.description}
            </div>

            <div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}
 
export default About;