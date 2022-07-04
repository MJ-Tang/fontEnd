import React, { useRef, useState } from 'react';

import Input from '../../Ui/Input';

import classes from './MealItemForm.module.css'

const MealItemForm = () => {
    const [amountIsValid, setamountIsValid] = useState(true);

    const amountInputRef = useRef()

    const submitHandler = e => {
        e.preventDefault()

        const enteredAmount = amountInputRef.current.vale;
        const enteredAmountN = +enteredAmount

        console.log(enteredAmountN);

        if (enteredAmount.trim().length === 0 || enteredAmountN < 1 || enteredAmount > 5){
            setamountIsValid(false)
            return
        }
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label='Amount' 
                input={{
                    id: 'Amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
}

export default MealItemForm;