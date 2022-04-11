//import './App.css';
import React from "react";
import './Styles/style.css'
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList"; 
import { CreateTodoButton } from "./components/CreateTodoButton";
import img1 from './images/workman.png'

// Create hook to useLocalStorage
function useLocalStorage(itemName, initialValue){
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)
  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        const  localStorageItem = localStorage.getItem(itemName)
        let parsedLocalStorage;
        if (!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedLocalStorage = initialValue
      
        }else{
          parsedLocalStorage = JSON.parse(localStorageItem)
        }
  
        setItem(parsedLocalStorage)
        setLoading(false)
      }catch(error){
        setError(error)

      }
      
    },1000)
   
  })
  
  

  const saveItem=(newItem)=>{
    try{
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }catch(error){
      setError(error)
    }
    
  }
  return{
    item,
    saveItem,
    loading,
    error,
  }
    
  
}

function App() {


  //states
  const {
    item:todos,
    saveItem:saveTodos,
    loading,
    error,

  } = useLocalStorage('TODOS_V0.1',[])
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
  
  const completeTodos= (text) =>{
    const todoIndex = todos.findIndex(todo=> todo.text === text);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
    
  }

  const deleteTodos= (text) =>{
    const todoIndex = todos.findIndex(todo=> todo.text === text);
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)

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
      <CreateTodoButton/>
    </React.Fragment>
    
  );
}

export default App;
