import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"



export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL,
  }),

  // tagTypes: ["todos"],

  endpoints: (buider) => ({
    getTodos: buider.query({
      query: () => ({
        url: `api/progress/666e9fc917dd12ca820c19ae`,
      }),
      // providesTags:['todos'],
    }),

    createProgress: buider.mutation({
      query: (todo) => ({
        url: `api/progress/666e9fc917dd12ca820c19ae`,
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
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
        },
        body: newtodo,
      }),
      // invalidatesTags:['todos']
    }),

    deleteProgress: buider.mutation({
      query: (id) => ({
        url: `api/progress/${id}`,
        method: "DELETE",
      }),
      // invalidatesTags:['todos']
    }),
  }),
})

export const {useGetTodosQuery , useCreateProgressMutation, useEditProgressMutation , useDeleteProgressMutation} = todoApi



