import React, {useState} from "react";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";

import classes from './AddUser.module.css'

const AddUser = (props) => {

    const [enteredUsername, setenteredUsername] = useState('');
    const [enteredAge, setenteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = e => {
        e.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        } 

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }

        console.log('name',enteredUsername);
        console.log('age',enteredAge);

        props.onAddUser(enteredUsername, enteredAge)
        setenteredUsername('')
        setenteredAge('')
    }

    const usernameChangeHandler = e => {
        setenteredUsername(e.target.value)
    }

    const userageChangeHandler = e => {
        setenteredAge(e.target.value)
    }

    const errorHandler = () => {
        setError(null);
    };
    

    return ( 
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Add User</label>
                    <input 
                        id="username"
                        type="text" 
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />

                    <label htmlFor="userage">Add User</label>
                    <input 
                        id="userage"
                        type="number"
                        value={enteredAge}
                        onChange={userageChangeHandler}
                    />

                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </Wrapper>
        
    );
}

export default AddUser;