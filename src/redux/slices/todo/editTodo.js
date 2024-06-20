import {createSlice} from '@reduxjs/toolkit'




const editTodo = createSlice({
    name:'editTodo',    
    initialState:{
        title:'',
        description:'',
        id:'',
        editing:false
    },
    reducers:{
        valueChange: (state,edit)=>{
            state.title = edit.payload.title
            state.id = edit.payload.id
            state.description = edit.payload.description
            state.editing = edit.payload.editing
        }
    }
})

export const {valueChange} = editTodo.actions

export default editTodo.reducer