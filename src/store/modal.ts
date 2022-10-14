import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";

interface IModal {
    active: boolean;
    user: IUser | null;
}

const initialState: IModal = {
    active: false,
    user: null
}

export const modalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        activate: (state, action: PayloadAction<IUser>) => {
            state.active = true
            state.user = action.payload
        },
        deactivate: (state) => {
            state.active = false
            state.user = null
        }
    }
})

export const {activate, deactivate} = modalSlice.actions