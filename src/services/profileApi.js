import { baseApi } from "./baseApi";

export const profileApi = baseApi.injectEndpoints({
    endpoints:(builder) => ({
     getProfile : builder.query({
        query:( ) => ({
            url: "/profile/view",
            method: "GET"
        })
     })
    })
});

export const {useGetProfileQuery} = profileApi;