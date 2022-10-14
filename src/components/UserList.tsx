// @flow
import * as React from 'react';
import {UserItem} from "./UserItem";
import {IUser} from "../models/IUser";

export const UserList = ({userList}: {userList: IUser[]}) => {
    return (
        <div className="user-content">
            <ul className="user-wrapper">
                {userList && userList.map(user => <UserItem props={user} key={user.email}/>)}
            </ul>
        </div>
    );
};