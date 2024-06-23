import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const token = localStorage.getItem('token')

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL,
  }),

  // tagTypes: ["todos"],

  endpoints: (buider) => ({
    getTodos: buider.query({
      query: () => ({
        url: `api/progress/`,
        headers: {
          Authorization: `${token}`,
        },
      }),
      // providesTags:['todos'],
    }),

    createProgress: buider.mutation({
      query: (todo) => ({
        url: `api/progress/`,
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: todo,
      }),
      // invalidatesTags:['todos']
    }),

    editProgress: buider.mutation({
      query: (newtodo) => ({
        url: `api/progress/`,
        method: "PUT",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: newtodo,
      }),
      // invalidatesTags:['todos']
    }),

    deleteProgress: buider.mutation({
      query: (id) => ({
        url: `api/progress/${id}`,
        method: "DELETE",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }),
      // invalidatesTags:['todos']
    }),
  }),
})

export const {useGetTodosQuery , useCreateProgressMutation, useEditProgressMutation , useDeleteProgressMutation} = todoApi



