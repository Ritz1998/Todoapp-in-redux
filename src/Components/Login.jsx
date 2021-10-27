import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux";
import { SetLogin } from '../Reducers/Reducers';
// import {useSelector} from "react-redux";

function Login() {
    const dispatch = useDispatch();
    const [style,setStyle]=useState({});
    const [state,setState]=useState({
        fname:undefined,
        lname:undefined,
        email:undefined,
    })
    // const todo = useSelector((state) => state.TodoApp)
    const handleChange=(e)=>{
        // debugger
        
        setStyle({
            background:"#aa5555ff"
        });
        
        setState({...state,[e.target.name]:e.target.value});
    }
        
    const storeUserData = ()=> {
        // e.preventDefault()
        if(state.fname !== "" && state.lname !== "" && state.email !== "" && state.fname !== undefined && state.lname !== undefined && state.email !== undefined){
            console.log(state);
            dispatch(SetLogin(state));
        }

    }
    return (
        <div className="login-container">
            <form className="login">
                <div>
                    <label htmlFor="fname">First Name</label>
                    <input onChange={handleChange} type="text" style={state.fname===""?style:{}}  value={state.fname} name="fname" id="fname" placeholder="Enter Your First Name Here..." />
                </div>
                <div>
                    <label htmlFor="lname">Last Name</label>
                    <input onChange={handleChange} type="text" style={state.lname===""?style:{}}  value={state.lname} name="lname" id="lname" placeholder="Enter Your Last Name Here..." />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input onChange={handleChange} type="email" style={state.email===""?style:{}}  value={state.email} name="email" id="email" placeholder="Enter Your Email Here..." />
                </div>
                <input type="button" className="btn" value="submit" onClick={storeUserData} />
            </form>
        </div>
    )
}

export default Login
