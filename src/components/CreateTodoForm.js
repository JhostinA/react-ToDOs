import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function CreateTodoForm(){
    const [newtodoValue, setnewTodoValue] =React.useState('')
    const {createTodos, setShowModal} = React.useContext(TodoContext)


    const onChange=(event)=>{
        setnewTodoValue(event.target.value)
        console.log(event.target.value) 
    }

    const onCancel=()=>{
        setShowModal(false)
    }

    const onAccept= (event) =>{
        event.preventDefault();
        createTodos(newtodoValue)
        setShowModal(false)
    }


    return (
        <form onSubmit={onAccept}>
            <label>Crear una tarea</label>
            <textarea 
                value = {newtodoValue}
                onChange={onChange}
                placeholder="Escribe tu tarea por hacer"
            />
            <div className="TodoForm-buttonContainer ">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button-cancel">
                    Cancelar
                </button>
                <button type="submit" className="TodoForm-button TodoForm-button-add">
                    Crear
                </button>
            </div>
        </form>
    )
} 

export {CreateTodoForm}