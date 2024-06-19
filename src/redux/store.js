import {configureStore} from '@reduxjs/toolkit'

import todoReducer from './slices/todo/todo.js'

const store = configureStore({
    reducer:{
        progress: todoReducer
    }
})

export default store