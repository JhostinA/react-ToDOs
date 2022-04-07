import React from "react";
import iconCheck from '../images/ok.png'
import iconCheckGreen from '../images/ok-green.png'
import iconTrashRed from '../images/trash-red.png'
import trashIcon from '../images/trash.png'


function TodoItem(props){


    return(
        <li className={`order-list ${props.completed && 'order-list--active'}`}>
            <div className="ok-container">
                <img 
                    src={iconCheckGreen} 
                    className={`iconCheckGreen 
                    ${props.completed && 'icon-checkg--active'}`}
                    alt="ok"
                    >

                </img>
                <img 
                    src={iconCheck} 
                    className={`iconCheck ${props.completed && 'icon-check--active'}`}  
                    onClick={props.completeTask} 
                    alt="ok"
                    >

                </img>
            </div>
            <p className={`text-p ${props.completed && 'text-p--completed'}`}>{props.text}</p>
            <div className="trash-conteiner">
                <img src={trashIcon} className="trash-icon" alt="x"></img>
                <img src={iconTrashRed} className="trash-icon-top" onClick={props.deleteTask} alt="x"></img>
            </div>
            
        </li>
    );
}
export {TodoItem};