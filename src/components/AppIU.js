import React from "react";
import { App } from "../App";
import { TodoProvider } from "../TodoContext/TodoContext";

function AppIU(){
    return(
        <TodoProvider>
            <App/>
        </TodoProvider>
    )
}
export {AppIU}