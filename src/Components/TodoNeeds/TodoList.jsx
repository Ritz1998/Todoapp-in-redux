import React,{useEffect,useState} from 'react'
import {useSelector} from "react-redux";
import Todocomplete from './Todocomplete';
function TodoList() {
    const todo = useSelector((state) => state.TodoApp)
    const [state,setState]=useState(todo.todos);
    
    useEffect(() => {
        if(todo.isthis === "all")
            if(todo.search === "")
            setState(todo.todos);
            else
            setState(todo.todos.filter((elem)=>{
               return elem.task.includes(todo.search)
            }));
            // setState(todo.todos.filter((elem)=>elem.task === todo.search));
        else{
            if(todo.search === "")
            setState(todo.todos.filter((elem)=>elem.type === todo.isthis))
            else
            setState(todo.todos.filter((elem)=>{
                if(elem.type === todo.isthis)
               return elem.task.includes(todo.search)
            }))

        }
    }, [todo.isthis,todo.todos,todo.search])
    return (
        <div className="todolist">
            {
                            state.length === 0?<div className="empty-container">
                                <img src="/empty1.png" width="250px" alt="" /><span>Empty</span>
                            </div>:state.map((el,i)=>(
                    <Todocomplete text={el} in={i}  />
                ))
            }
        </div>
    )
}

export default TodoList
