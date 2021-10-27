import { createSlice } from '@reduxjs/toolkit'
// import React from 'react'

const initialState = {
    todos: [],
    isthis:"all",
    heading:"Todo App",
    isLogin:false,
    search:"",
    fname:"",
    lname:"",
    email:"",
  }

   export const TodoAppActions = createSlice({
    name:'TodoApp',
    initialState,
    reducers:{

      AddNewTodo:(state,action)=>{
         state.todos.push(...action.payload)
      },
      setIsThis:(state,action)=>{
        state.isthis = action.payload
      },
      SetLogin:(state,action)=>{
        state.fname = action.payload.fname
        state.lname = action.payload.lname
        state.email = action.payload.email
        state.isLogin = true
      },
      Logout:(state)=>{
        state.isLogin=false
      },
      SetComplete:(state,action)=>{
        state.todos.map((ele)=>{
          if(ele.id === action.payload){
            if(ele.type === "pending"){
              ele.type = "completed"
            }else{
              ele.type = "pending"
            }
          }
        })
      },
      deleteItem:(state,action)=>{
        state.todos = state.todos.filter((elem)=>elem.id !== action.payload)
      },
      handleSearch:(state,action)=>{
        state.search = action.payload
      }

    }
  })

export const {AddNewTodo, setIsThis, SetLogin, Logout, SetComplete, deleteItem, handleSearch}=TodoAppActions.actions
export default TodoAppActions.reducer