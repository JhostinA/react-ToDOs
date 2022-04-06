//import './App.css';
import React from "react";
import './Styles/style.css'
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList"; 
import { CreateTodoButton } from "./components/CreateTodoButton";
import img1 from './images/workman.png'

const todos = [
{ text: 'leer', completed: true},
{  text: 'estudiar', completed: false},
{ text: 'ingles', completed: false},
{ text: 'cocinar',completed:false},
{text:'sacar a pasear al perro', completed:false},
{text: 'comer', completed:false}
]
function App() {
  return (
    <React.Fragment>
      <h1> Bienvenido a tu lista de tareas</h1>
      <TodoCounter />
      <TodoSearch />
      <img className="icono" src={img1}></img>
      <TodoList >
        {todos.map(todo =>(
          <TodoItem completed={todo.completed} key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
    
  );
}

export default App;
