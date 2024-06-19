import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

const { REACT_APP_URL } = process.env
const url = `${REACT_APP_URL}api/progress/`
const id = "666e9fc917dd12ca820c19ae"
const url2 = url + id

export const getAllTodos = createAsyncThunk('getTodos', async()=>{

        try {
          const data = await fetch(url2, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })

          const res = await data.json()
          const par = await JSON.parse(res.daa)
          return par
        } catch (error) {
          return error
        }
})


export const createTodo = createAsyncThunk('createTodo', async (todo)=>{
      try {
        const res = await fetch(url2, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todo),
        })
        const data = await res.json()
        console.log('inside creteTodo data: ',data)
        return data.todo
      } catch (error) {
        return error
      }
})

const todoSlice = createSlice({
  name: "progress",
  initialState: {
    todos:[],
    error:null,
    isLoading:false,
  },
  reducers: {
    
  },
  extraReducers: (builder)=>{

    //get todos
    builder.addCase(getAllTodos.fulfilled,(state,action)=>{
        state.isLoading = false
        state.error =null
        state.todos = action.payload
    })
    builder.addCase(getAllTodos.pending,(state,action)=>{
      state.isLoading =true
      state.error = null
    })
    builder.addCase(getAllTodos.rejected,(state,action)=>{
      state.isLoading = false
      state.error = action.error
    })


    //create todo
    builder.addCase(createTodo.fulfilled,(state,action)=>{
          state.error = null
          state.isLoading = false
          state.todos.push(action.payload)
    })
    builder.addCase(createTodo.rejected, (state, action) => {
      state.error = action.error
      state.isLoading = false
    })
    builder.addCase(createTodo.pending, (state, action) => {
      state.error = null
      state.isLoading = true
    })

  },
})



export default todoSlice.reducer