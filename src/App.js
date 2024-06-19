import React from 'react'
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom"
import {Provider} from 'react-redux'

import Home from './pages/Home'
import Progress from './pages/Progress'
import Profile from './pages/Profile'
import ErrorPage from './pages/Error'
import Loader from './components/Loader'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

import store from './redux/store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader:<Loader/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/progress",
    element: <Progress />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
  {
    path:'/signUp',
    element: <SignUp/>
  },
  {
    path:'/login',
    element: <Login/>
  }
])
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App