import React from "react";
import './ExpensesFilter.css'

const ExpenseFilter = (props) => {
    const dropdownChandgeHandler = e => {
        props.onChangeFilter(e.target.value);
    }



    return (
        <div className="expenses-filter">
            <div className="expenses-filter_control">
                <label>Fliter by year</label>
                <select value={props.selected} onChange={dropdownChandgeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;
