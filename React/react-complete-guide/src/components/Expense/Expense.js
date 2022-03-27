import React, {useState} from "react";

import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

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

    

    return (
        <div>
            <Card className="expenses">

                <ExpenseFilter 
                    selected = {filteredYear}
                    onChangeFilter = {filterChangeHandler}
                />
                
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expense;