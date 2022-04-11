import React from 'react'
import { useLocalStorage } from './useLocalStorage'


const TodoContext = React.createContext()

function TodoProvider(props){
    //states
  const {
    item:todos,
    saveItem:saveTodos,
    loading,
    error,

  } = useLocalStorage('TODOS_V0.1',[])
  const [searchValue, setSearchValue] = React.useState('')
  const [showModal, setShowModal ] = React.useState(false)

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
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalCompletedTodos,
            totalTodos,
            searchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            setSearchValue,
            showModal,
            setShowModal

        }}>
            {props.children}
        </TodoContext.Provider>
    )
    
}
export {TodoContext, TodoProvider}