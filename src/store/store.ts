import {configureStore} from "@reduxjs/toolkit";
import {userAPI} from "./userAPI";
import {setupListeners} from "@reduxjs/toolkit/query";
import {modalSlice} from "./modal";


export const store = configureStore({
    reducer: {
        [userAPI.reducerPath]: userAPI.reducer,
        modal: modalSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)