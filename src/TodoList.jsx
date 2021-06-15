import React from "react";

const TodoList = (props) => {

    return (
        <>
            <div className="todo_style">
                <i  class="fas fa-times"  
                onClick={() => {
                    props.onSelect(props.id)
                }} />


                <li
                >{props.text}</li>
            </div>
        </>
    )
};
export default TodoList;