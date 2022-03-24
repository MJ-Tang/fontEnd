import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css"

function Expense (props) {
    return (
        <Card className="expenses">
            <ExpenseItem 
                title={props.item[0].title}
                amount={props.item[0].amount}
                date={props.item[0].date}
            />
        </Card>
    )
}

export default Expense;