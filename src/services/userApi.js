import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints:(builder) => ({
     getProfile : builder.query({
        query:( ) => ({
            url: "profile/view",
            method: "GET"
        }),
        providesTags:["User"]
     })
    })
});

export const {useGetProfileQuery} = userApi;