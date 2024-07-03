import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const voteCastApi = createApi({
    reducerPath: 'vote',
    baseQuery: fetchBaseQuery({baseUrl: 'http://10.159.97.2:4000',credentials: 'include',}),
    
    endpoints : (builder) =>({
        castVote : builder.mutation({
            query : ({votes,username}) =>{
              console.log("Votes: ",votes)
              console.log("Username : ",username)
                return{
                    url: '/vote',
                    body: {votes,username},
                    method : "POST"
                }
            }
        })
    })
})

export {voteCastApi};
export const {useCastVoteMutation} = voteCastApi
