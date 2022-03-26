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

    console.log('selected: ',filteredYear);

    return (
        <div>
            <Card className="expenses">

                <ExpenseFilter 
                    selected = {filteredYear}
                    onChangeFilter = {filterChangeHandler}
                />

                {props.items.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
                
            </Card>
        </div>
    )
}

export default Expense;