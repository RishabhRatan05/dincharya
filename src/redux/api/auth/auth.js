import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL,
  }),

  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (profile) => ({
        url: "/signUp",
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: profile,
      }),
    }),
    login: builder.mutation({
      query: (profile) => ({
        url: "/login",
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: profile,
      }),
    }),
  }),
})

export const {useSignUpMutation, useLoginMutation} = authApi