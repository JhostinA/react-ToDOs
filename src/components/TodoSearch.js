import React from "react";

function TodoSearch ({searchValue, setSearchValue}){
    
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