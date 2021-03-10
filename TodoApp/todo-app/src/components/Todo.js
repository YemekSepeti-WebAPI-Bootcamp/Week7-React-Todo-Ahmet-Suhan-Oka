import React, { useContext, useEffect } from 'react'
import {AiFillDelete} from 'react-icons/ai';
import { TodoContext } from '../App';

const Todo = ({item,deleteTodo,todoId}) => {

    const {date} = useContext(TodoContext);

    useEffect( ()=>{
        
    },[] );
    //console.log({index})
    
    console.log({todoId});
    return (
        <div>
            <li>
                <div className="li-container" >
                    <p>{item.text}</p>
                    <AiFillDelete 
                        className="delete-icons"
                        onClick={ ()=> deleteTodo(todoId) }
                        />
                </div>
                <p className="date">{date}</p>
            </li>
        </div>
    )
}

export default Todo
