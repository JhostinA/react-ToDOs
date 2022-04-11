import React from "react";
import './Styles/style.css'
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList"; 
import { CreateTodoButton } from "./components/CreateTodoButton";
import img1 from './images/workman.png'
import { TodoContext } from "./TodoContext/TodoContext";
import { Modal } from "./components/Modal"


function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    showModal,
    setShowModal} = React.useContext(TodoContext)
  return (
        <React.Fragment>
          <h1> Bienvenido a tu lista de tareas</h1>
          <TodoCounter/>
          <TodoSearch />
          <img className="icono" src={img1} alt="task"></img>
          <TodoList >
            {error && <p  className="load-error-create">upss, Ha ocurrido un error</p>}
            {loading && <p className="load-error-create">Cargando</p>}
            {(!loading && !searchedTodos) && <p className="load-error-create">Crea tu primera tarea</p>}
    
            {searchedTodos.map(todo =>(
              <TodoItem   
                completed={todo.completed} 
                key={todo.text}   
                text={todo.text}
                completeTask={()=> completeTodos(todo.text)}
                deleteTask={()=> deleteTodos(todo.text)}
              />
            ))}
          </TodoList>
          {!!showModal &&(
            <Modal>
              <p>hola</p>
            </Modal>
          )}
             
              
          <CreateTodoButton
           setShowModal={setShowModal} />

        </React.Fragment>
    
  );
}

export {App};
