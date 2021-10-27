import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'
import AddTodo from './TodoNeeds/AddTodo'
import Header from './TodoNeeds/Header'
import TodoList from './TodoNeeds/TodoList'

function TodoApp() {
    const todo = useSelector(state=>state.TodoApp)
    return (
       todo.isLogin? <div className="todoapp">
                    <Header />
                    <AddTodo />
                    <TodoList />
                    

                </div> : <Login />
    )
}

export default TodoApp
