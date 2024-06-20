import {configureStore} from '@reduxjs/toolkit'

import todoReducer from './slices/todo/todo.js'
import  {todoApi}  from './api/todo/todo.js'
import editTodo from './slices/todo/editTodo.js'

const store = configureStore({
    reducer:{
        progress: todoReducer,
        [todoApi.reducerPath]: todoApi.reducer,
        editTodo: editTodo
    },
    middleware :(mid)=>
        mid().concat(todoApi.middleware)
})

export default store