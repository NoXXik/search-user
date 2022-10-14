import * as React from 'react';
import {useState} from "react";
import {useDebounce} from "../hooks/debounce";
import {useSearchUserQuery} from "../store/userAPI";
import "../App.css"
import {UserList} from "../components/UserList";
import {Popup} from "../components/Popup";


export const Home = () => {
    const [search, setSearch] = useState('')
    const debounced = useDebounce(search, 500)
    const {data, error, isLoading, isError} = useSearchUserQuery(debounced)
    const [modalActive, setModalActive] = useState(true)

    return (
        <div className="content">
            <div className="search-box">
                <input className="search-txt" type="text" name='' onChange={e => setSearch(e.target.value)} value={search}/>
                <a className="search-btn" href="#"><i className="fas fa-search"></i></a>
            </div>
            <div>
                {data && <UserList userList={data}/>}
            </div>
            <Popup></Popup>
        </div>
    );
};