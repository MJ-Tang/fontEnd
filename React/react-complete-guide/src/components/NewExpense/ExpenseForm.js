import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {
    // const [enterTitle, setTitle] = useState('')
    // const [enterAmount, setAmount] = useState('')
    // const [enterDate, setDate] = useState('')
    const [userInput, setInput] = useState({
        enterTitle: '',
        enterAmount: '',
        enterDate: ''
    })

    const titleChangeHandler = e => {
        setInput({
            ...userInput,
            enterTitle:e.target.value
        });
    }
    
    const amountChangeHandler = e => {
        setInput({
            ...userInput,
            enterAmount:e.target.value
        });
    }

    const dateChangeHandler = e => {
        setInput({
            ...userInput,
            enterDate:e.target.value
        });
    }

    console.log(userInput);

    return (
        <form>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense_control">
                    <label>Amout</label>
                    <input type="number" min="0.01" setp='0.01' onChange={amountChangeHandler} />
                </div>
                <div className="new-expense_control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max='2022-12-31'  onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm