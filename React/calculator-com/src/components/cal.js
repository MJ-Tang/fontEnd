import React, { useState } from 'react';

import styles from './cal.module.css'

const Cal = () => {

    const [inputData, setInputData] = useState(0)
    const [operator, setOperator] = useState('x')
    const keys = ['AC','( )', '%', '÷', 7, 8, 9 ,'x', 4, 5, 6, '-', 1 ,2, 3, '+', 0, '00', '.', '=']

    const options = (e) => {
        console.log(e.target.dataset.key);
    }

    return ( 
        <div className={styles.calculator}>
            {/* display the cal option and output data */}
            <div className={styles.display}>
                <div className={styles.con}>
                    <div className={styles.inputData}>{inputData} <span className={styles.operator}>{operator}</span> {inputData}</div>
                    <div className={styles.outputData}>0.0</div>
                </div>
            </div>

            {/* keys */}

            <div className={styles.keys}>
                {keys.map((i,index)=> (
                    <div className={styles.key} key={index} onClick={options} data-key={i}>{i}</div>
                ))}
            </div>
        </div>
    );
}

export default Cal;