// @flow
import * as React from 'react';
import {IUser} from "../models/IUser";
import "../App.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {activate} from "../store/modal";

export const UserItem = (props: {props: IUser}) => {
    const modal = useSelector((state: RootState) => state.modal)
    const dispatch = useDispatch()
    const user = props.props
    const popUp = (user: IUser) => {
        console.log(user)
    }

    return (
        <li className="user" onClick={() => dispatch(activate(user))}>
            <p className="user-name">{user.name}</p>
            <p className="user-phone">{user.phone}</p>
            <p className="user-email">{user.email}</p>
        </li>
    );
};