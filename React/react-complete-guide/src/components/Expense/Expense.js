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

                <ExpenseItem 
                    title={props.item[0].title}
                    amount={props.item[0].amount}
                    date={props.item[0].date}
                />
            </Card>
        </div>
    )
}

export default Expense;