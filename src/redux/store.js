import {configureStore} from '@reduxjs/toolkit'

import todoReducer from './slices/todo/todo.js'
import editTodo from './slices/todo/editTodo.js'
import { authApi } from './api/auth/auth.js'
import userReducer from './slices/user.js'
import { todoApi } from './api/todo/todo.js'
import { profile } from './api/user/profile.js'

const store = configureStore({
    reducer:{
        progress: todoReducer,
        editTodo: editTodo,
        [todoApi.reducerPath]:todoApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        user: userReducer,
        [profile.reducerPath]:profile.reducer
    },
    middleware :(mid)=>
        mid().concat(todoApi.middleware).concat(authApi.middleware).concat(profile.middleware)
})

export default store