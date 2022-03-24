import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enterTitle, setTitle] = useState('')
    const [enterAmount, setAmount] = useState('')
    const [enterDate, setDate] = useState('')

    const titleChangeHandler = e => {
        setTitle(e.target.value);
        console.log('title: ',enterTitle);
    }
    
    const amountChangeHandler = e => {
        setAmount(e.target.value)
        console.log('amount: ', enterAmount);
    }

    const dateChangeHandler = e => {
        setDate(e.target.value)
        console.log('date: ', enterDate);
    }

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