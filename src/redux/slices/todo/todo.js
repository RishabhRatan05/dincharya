import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getAllTodos = createAsyncThunk('getTodos', async()=>{
        const url = "http://localhost:8000/api/progress/"
        const id = "666e9fc917dd12ca820c19ae"
        const url2 = url + id

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


const todoSlice = createSlice({
  name: "progress",
  initialState: {
    todos:[],
    error:null,
    isLoading:false,
  },
  reducers: {
    
  },
  extraReducers: builder=>{
    builder.addCase('getAllTodos',(state,action)=>{
      
    })
  },
})

export default todoSlice.reducer