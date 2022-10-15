import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUser} from "../models/IUser";


export const userAPI = createApi({
    reducerPath: "userapi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://search-server23.herokuapp.com/",
    }),
    endpoints: build => ({
        searchUser: build.query<IUser[], string>({
            query: (term: string) => ({
                url: '/',
                params: {term: term}
            }),
        }),
    })
})

export const {useSearchUserQuery} = userAPI