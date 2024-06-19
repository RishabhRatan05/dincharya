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
          console.log('inside getalltodo',par)
          return par
        } catch (error) {
          return error
        }
})


export const createTodo = createAsyncThunk('createTodo', async (todo)=>{
  console.log('ttooddoo',todo)
      try {
        const res = await fetch(url2, {
          method: "POST",
          //new
          // mode: 'no-cors',
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          //new
          // credentials:'same-origin',
          body: JSON.stringify(todo),
        })
        console.log('inside creteTodo data: ',todo)
        return await res.json().todo
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