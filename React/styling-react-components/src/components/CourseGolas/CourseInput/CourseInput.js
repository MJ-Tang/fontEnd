import React, {useState} from "react";
import Button from "../../UI/Button/Button";
import './CourseInput.css';
import styled from "styled-components";

const FormControl = styled.div`
    margin: 0.5rem 0;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        color: ${props => (props.invalid ? 'red' : 'black')};
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
        background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
    }

    & input:focus {
        outline: none;
        background-color: #fad0ec;
        border-color: #8b005d;
    }
`


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
            <FormControl invalid={!isValid}>
                <label>
                    Course Goal
                </label>
                <input 
                    type="text" 
                    onChange={goalInputChangeHandler} 
                />
            </FormControl>

            <Button type="submit">Add Goal</Button>
        </form>
    );
}

export default CourseInput;