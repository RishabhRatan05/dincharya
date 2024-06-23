import {createSlice} from '@reduxjs/toolkit'



const progress = createSlice({
    name:'progress',
    initialState:{
        todos:[]
    },
    reducers:{
        updateTodos:(state,par)=>{
            state.todos = par.payload
        },
        deleteTodos:(state)=>{
            state.todos = state.todos.filter((i)=>(false))
        }
    }
})

export const {updateTodos, deleteTodos} = progress.actions


export default progress.reducer