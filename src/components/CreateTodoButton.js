import React from "react";

function CreateTodoButton(props){
    const createNewItem = ()=>{
        props.setShowModal(prevState => !prevState);
    }
    return(
        <div className="container-button">
            <button className="create-button" onClick={createNewItem}>+</button>
        </div>
        
    );
}
export {CreateTodoButton};