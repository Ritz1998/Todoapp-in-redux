import React,{useState,useEffect} from 'react'
import {useDispatch} from "react-redux";
import {AddNewTodo, handleSearch} from "../../Reducers/Reducers";
import Todofilters from "./Todofilters"
function AddTodo() {
    const dispatch = useDispatch();
    const [state,setState]=useState([])
    const [data,setData]=useState({
       
    })

    
    const GetData=()=>{
        if(data.task !== "")
        setState([{id: new Date().getTime().toString(),task:data.task,type:"pending"}]);
    }
    
    useEffect(() => {
        dispatch(AddNewTodo(state));
        }, [state])

    return (
        <div className="addtodo-holder">
            <div className="container addtodo">

                <input type="text" name="" id="" placeholder="Add Todo Here..." onChange={(e)=> setData({task:e.target.value.toLowerCase()})} />
                <span className="add btn" onClick={GetData}>&#10011;</span>

             </div>
             <Todofilters/>
             <div className="container searchtodo">

             <input type="text" name="" id="" onChange={(e)=>dispatch(handleSearch(e.target.value.toLowerCase()))} placeholder="Search Todo Here... " />
                <span className="search " ><p className="ico">&#9906;</p></span>

             </div>
        </div>
    )
}

export default AddTodo
 