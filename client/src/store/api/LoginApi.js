import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const loginApi = createApi({
    reducerPath: 'login',
    baseQuery: fetchBaseQuery({baseUrl: 'http://10.159.98.132:4000',credentials: 'include',}),
    
    endpoints : (builder) =>({
        login : builder.mutation({
            query : ({username,password}) =>{
                return{
                    url: '/login',
                    body: {username,password},
                    method : "POST"
                }
            }
        }),
        proxyLogin : builder.mutation({
            query : ({username,password}) =>{
                return{
                    url: '/proxy-login',
                    body: {username,password},
                    method : "POST"
                }
            }
        }),
        logout : builder.mutation({
            query : () =>{
                return{
                    url : '/logout',
                    method : "POST",
                }
            }
        })
    })
})

export {loginApi};
export const {useLoginMutation,useLogoutMutation,useProxyLoginMutation} = loginApi
