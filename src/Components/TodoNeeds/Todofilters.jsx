import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setIsThis } from '../../Reducers/Reducers'
function Todofilters() {
    const data = useSelector(state => state.TodoApp)
    const dispatch = useDispatch()
    const AddClass=(e)=>{
        dispatch(setIsThis(e.target.id))
    }

    return (
        <div className="todo-filters">
            <span className={data.isthis==="all"?"btn active":"btn"} id="all" onClick={AddClass}>All</span>
            <span className={data.isthis==="completed"?"btn active":"btn"} id="completed"  onClick={AddClass}>Completed</span>
            <span className={data.isthis==="pending"?"btn active":"btn"} id="pending"  onClick={AddClass}>Pending</span>
        </div>
    )
}

export default Todofilters;
