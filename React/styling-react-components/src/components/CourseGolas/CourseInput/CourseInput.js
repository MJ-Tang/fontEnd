import React, {useState} from "react";

import './CourseInput.css';

const CourseInput = props => {

    const [enteredValue, setenteredValue] = useState('');

    const goalInputChangeHandler = e => {
        setenteredValue(e.target.value)
    }

    const formSumbitHandler = e => {
        e.preventDefault()
        props.onAddGoal(enteredValue)
    }

    console.log(enteredValue);
    
    return ( 
        <form onSubmit={formSumbitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>

            <button type="submit">Add Goal</button>
        </form>
    );
}

export default CourseInput;