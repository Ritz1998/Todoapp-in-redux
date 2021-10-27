import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { SetComplete, deleteItem } from '../../Reducers/Reducers';
function Todocomplete(props) {
    const dispatch = useDispatch();
    const todo = useSelector(state=>state.TodoApp)

        const handleComplete = (id) => {
            dispatch(SetComplete(id));
          };

    return (
        <div className={props.text.type === "completed"?"todos active":"todos"}  key={props.in+1}>
            <div className="index-holder"><div className="index">{props.in+1}</div></div>
            <p className="task">{props.text.task}</p>
            <div className="action-holder">
                <div className="mark-btn" onClick={()=>{handleComplete(props.text.id)}}>&#10004;</div>
                <div className="close-btn" onClick={()=>{dispatch(deleteItem(props.text.id))}} >&#10007;</div>
            </div>
        </div>
    )
}

export default Todocomplete
