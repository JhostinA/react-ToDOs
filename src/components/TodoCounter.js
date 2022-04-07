import React from "react";

function TodoCounter ({totalTodos, totalTodosCompleted}){
    return(
        <h2>Has completado {totalTodosCompleted} de {totalTodos} ToDos</h2>
    )
}

export {TodoCounter}; 