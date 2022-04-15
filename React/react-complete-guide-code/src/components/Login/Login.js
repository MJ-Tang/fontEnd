import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import AuthContext from "../../store/auth-context";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from'./Login.module.css'

const emailReducer = (state, action) => {

    if (action.type === 'user_input') {
        return {value: action.val, isValid: action.val.includes('@')}
    }

    if (action.type === 'input_blur') {
        return {value: state.value, isValid:state.value.includes('@')}
    }   

    return {value: '', isValid: false}
}
    const passWordReducer = (state, action) => {

        if (action.type === 'user_input') {
            return {value: action.val, isValid: action.val.trim().length > 6}
        }

        if (action.type === 'input_blur') {
            return {value: state.value, isValid:state.value.trim().length > 6}
        }   

        return {value: '', isValid: false}
    }

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    })

    const [passwordState, dispatchPassword] = useReducer(passWordReducer, {
        value: '',
        isValid: null
    })

    const authCtx = useContext(AuthContext)

    const emailInputRef = useRef()
    const passwordInputRef = useRef()


    const { isValid: emailIsValid } = emailState
    const { isValid: passwordIsValid } = passwordState

    useEffect(() => {
        
        const identifier = setTimeout(() => {

            console.log('Checking form validity!');
            setFormIsValid(
                emailIsValid && passwordIsValid
            );
        }, 500)

        return () => {
            console.log('CLEANUP');
            clearTimeout(identifier)
        }

    }, [emailIsValid, passwordIsValid ])

    const emailChangeHandler = (e) => {
        dispatchEmail({type: 'user_input', val: e.target.value})
        // setFormIsValid(
        //     e.target.value.includes('@') && passwordState.isValid
        // );
    };

    const passwordChangeHandler = (e) => {
        dispatchPassword({type: 'user_input', val: e.target.value})
        // setFormIsValid(
        //     emailState.isValid && e.target.value.trim().length > 6
        // );
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: 'input_blur'})
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: 'input_blur'})
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (formIsValid) {
            authCtx.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            emailInputRef.current.force()
        } else {
            passwordInputRef.current.force()
        }

    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input 
                    ref={emailInputRef}
                    id='email'
                    label='E-mail'
                    type='email'
                    isValid={emailIsValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />

                <Input 
                    ref={passwordInputRef}
                    id='password'
                    label='Password'
                    type='password'
                    isValid={passwordIsValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
}
export default Login;