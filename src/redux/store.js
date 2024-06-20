import {configureStore} from '@reduxjs/toolkit'

import todoReducer from './slices/todo/todo.js'
import  {todoApi}  from './api/todo/todo.js'

const store = configureStore({
    reducer:{
        progress: todoReducer,
        [todoApi.reducerPath]: todoApi.reducer
    },
    middleware :(mid)=>
        mid().concat(todoApi.middleware)
})

export default store