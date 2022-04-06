import React from "react";
import iconCheck from '../images/ok.png'
import trashIcon from '../images/trash.png'
function TodoItem(props){
    return(
        <li className={`order-list ${props.completed && 'order-list--active'}`}>
            <img src={iconCheck} className={`iconCheck ${props.completed && 'icon-check--active'}`} ></img>
            <p className={`text-p ${props.completed && 'text-p--completed'}`}>{props.text}</p>
            <img src={trashIcon} className="trashIcon"></img>
        </li>
    );
}
export {TodoItem};