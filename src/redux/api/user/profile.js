import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const profile = createApi({
    reducerPath:'profile',
    baseQuery: fetchBaseQuery({
        baseUrl:process.env.REACT_APP_URL
    }),

    endpoints:(builder)=>({
        getProfile: builder.query({
            query:(token)=>({
                url:`/api/profile`,
                method:"GET",
                headers:{
                    "Authorization":`${token}`
                }
            })
        })
    })
})

export const { useGetProfileQuery } = profile