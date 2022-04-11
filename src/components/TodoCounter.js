import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter (){
    const {totalCompletedTodos, totalTodos} = React.useContext(TodoContext)
    return(
        <h2>Has completado {totalCompletedTodos} de {totalTodos} ToDos</h2>
    )
}

export {TodoCounter}; 