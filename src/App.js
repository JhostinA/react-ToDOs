//import './App.css';
import React from "react";
import './Styles/style.css'
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList"; 
import { CreateTodoButton } from "./components/CreateTodoButton";
import img1 from './images/workman.png'
import {TodoContext, TodoProvider} from './TodoContext/TodoContext'


function App() {

  return (
    <React.Fragment>
      <TodoProvider>
        <h1> Bienvenido a tu lista de tareas</h1>
          <TodoCounter/>
      <TodoSearch />
      <img className="icono" src={img1} alt="task"></img>
        <TodoContext.Consumer>
          {value=>(
            <TodoList >
            {value.error && <p  className="load-error-create">upss, Ha ocurrido un error</p>}
            {value.loading && <p className="load-error-create">Cargando</p>}
            {(!value.loading && !value.searchedTodos) && <p className="load-error-create">Crea tu primera tarea</p>}
    
            {value.searchedTodos.map(todo =>(
              <TodoItem 
                completed={todo.completed} 
                key={todo.text} 
                text={todo.text}
                completeTask={()=> value.completeTodos(todo.text)}
                deleteTask={()=> value.deleteTodos(todo.text)}
              />
            ))}
          </TodoList>
          )}
        </TodoContext.Consumer>
      <CreateTodoButton/>
    
      </TodoProvider>
      </React.Fragment>
    
  );
}

export default App;
