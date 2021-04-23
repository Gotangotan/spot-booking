import React from "react"
import  './Calender.css'

function CalenderItem(props) {
    return (
        <div  className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
             />
            <p>{props.item.text}</p>
        </div>
    )
}

export default CalenderItem