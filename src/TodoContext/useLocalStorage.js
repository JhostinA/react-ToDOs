import React from "react"

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

  export {useLocalStorage}