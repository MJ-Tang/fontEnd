import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expense.css"

const Expense = props => {
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = selectedYear => {
        console.log('Expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    console.log('selected: ',filteredYear);

    let expensesCount = <p>No expenses found.</p>

    if (filteredExpenses.length > 0) {
        expensesCount = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <div>
            <Card className="expenses">

                <ExpenseFilter 
                    selected = {filteredYear}
                    onChangeFilter = {filterChangeHandler}
                />

                {/* 
                    {filteredExpenses.length === 0 ? (
                        <p>No expenses found.</p>
                    ) : (
                        filteredExpenses.map((expense) => (
                            <ExpenseItem
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                            />
                        ))
                    )} */
                }
                
                {expensesCount}
            </Card>
        </div>
    )
}

export default Expense;