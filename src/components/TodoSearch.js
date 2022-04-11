import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch (){
    const {searchValue,setSearchValue} =React.useContext(TodoContext)
    const searchChange = (event)=>{
        console.log(event.target.value)
        setSearchValue(event.target.value)

    }
    return(
        <input 
            placeholder="Buscar" 
            value={searchValue}
            onChange={searchChange}

        />
    );
}
export {TodoSearch}; 