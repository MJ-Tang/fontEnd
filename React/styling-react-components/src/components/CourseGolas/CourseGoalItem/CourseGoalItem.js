import React from "react";

import "./CourseGoalItem.css"

const CourseGoalItem = props => {

    const deleteHandler = () => {
        props.onDelete(props.id)
    }
    console.log(props.children);

    return (
        <li className="goal-item" onClick={deleteHandler}>
            {props.children}
        </li>
    )
}

export default CourseGoalItem;