import React from "react";

function CreateTodoButton(){
    const createNewItem = ()=>{
        alert("su nueva tarea a sido agregada a la lista");
    }
    return(
        <div className="container-button">
            <button className="create-button" onClick={createNewItem}>+</button>
        </div>
        
    );
}
export {CreateTodoButton};