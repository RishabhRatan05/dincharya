import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
  name: "user",
  reducerPath:'user',
  initialState: {
    _id: "",
    email:"",
    name: "",
  },
  reducers: {
    loginUser: (state, user) => {
      state._id = user.payload.id
      state.name = user.payload.name
      state.email = user.payload.email
    },
  },
})

export const {loginUser} = userSlice.actions

export default  userSlice.reducer