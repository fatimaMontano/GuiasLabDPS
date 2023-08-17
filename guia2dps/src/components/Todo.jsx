import React from "react";

const Todo =({todo, index, deletoTodo}) => {
    return(
        <>
            <div className="list">
                <h3>{todo}</h3> <button className="btn-delete" onClick={()=> deletoTodo(index)}>X</button>
            </div>
        </>
    )
}
export default Todo