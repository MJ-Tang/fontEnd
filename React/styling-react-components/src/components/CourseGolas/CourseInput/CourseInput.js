import React, {useState} from "react";
import Button from "../../UI/Button/Button";
import './CourseInput.css';

const CourseInput = props => {

    const [enteredValue, setenteredValue] = useState('');
    const [isValid, setisValid] = useState(true);

    const goalInputChangeHandler = e => {
        if (e.target.value.trim().length > 0) {
            setisValid(true)
        }
        setenteredValue(e.target.value)
    }

    const formSumbitHandler = e => {
        e.preventDefault()
        if(enteredValue.trim().length === 0) {
            setisValid(false)
            return
        }
        props.onAddGoal(enteredValue)
    }

    console.log('entered value',enteredValue);
    
    return ( 
        <form onSubmit={formSumbitHandler}>
            <div className="form-control">
                <label
                    style={{ color: !isValid ? 'red' : 'black' }}
                >
                    Course Goal
                </label>
                <input 
                    type="text" 
                    onChange={goalInputChangeHandler} 
                    style={{ 
                        borderColor: !isValid ? 'red' : 'black', 
                        backgroud: !isValid ? 'salmon' : 'transparent'
                    }}
                />
            </div>

            <Button type="submit">Add Goal</Button>
        </form>
    );
}

export default CourseInput;