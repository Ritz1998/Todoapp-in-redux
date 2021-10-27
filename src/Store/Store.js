import { configureStore } from '@reduxjs/toolkit';
import TodoAppActions from "../Reducers/Reducers";

export const Store = configureStore({
    reducer: {
        TodoApp:TodoAppActions,
    }
})