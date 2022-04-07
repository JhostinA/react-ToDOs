//import './App.css';
import React from "react";
import './Styles/style.css'
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList"; 
import { CreateTodoButton } from "./components/CreateTodoButton";
import img1 from './images/workman.png'

function App() {

  //LocalStorage
  const  localStorageTodos = localStorage.getItem('TODOS_V0.1')
  let parsedLocalStorage;
  if (!localStorageTodos){
    localStorage.setItem('TODOS_V0.1', JSON.stringify([]))
    parsedLocalStorage = []

  }else{
    parsedLocalStorage = JSON.parse(localStorageTodos)
  }

  //states
  const [todos, setTodo] = React.useState(parsedLocalStorage)
  const [searchValue, setSearchValue] = React.useState('')

  //filters
  const totalTodos = todos.length
  const totalCompletedTodos = todos.filter(todo => !!todo.completed ).length

  //searchedTodos
  let searchedTodos = []

  if(!searchValue.length >=1){
    searchedTodos=todos

  }else{
    searchedTodos= todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
      
    })
  }

  //completeTodos-deleteTodos
  const saveTodos=(newTodos)=>{
    localStorage.setItem('TODOS_V0.1', JSON.stringify(newTodos))
  }
  const completeTodos= (text) =>{
    const todoIndex = todos.findIndex(todo=> todo.text === text);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
    setTodo(newTodos)
  }

  const deleteTodos= (text) =>{
    const todoIndex = todos.findIndex(todo=> todo.text === text);
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
    setTodo(newTodos)
  }


  return (
    <React.Fragment>
      <h1> Bienvenido a tu lista de tareas</h1>
      <TodoCounter
        totalTodos={totalTodos}
        totalTodosCompleted={totalCompletedTodos} 
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <img className="icono" src={img1} alt="task"></img>
      <TodoList >
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
      <CreateTodoButton/>
    </React.Fragment>
    
  );
}

export default App;
