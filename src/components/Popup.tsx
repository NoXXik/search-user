// @flow
import * as React from 'react';
import "../App.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {deactivate} from "../store/modal";

export const Popup = ({children}: any) => {
    const modal = useSelector((state: RootState) => state.modal)
    const dispatch = useDispatch()
    return (
        <div className={modal.active ? "modal active" : "modal"} onClick={() => dispatch(deactivate())}>
            <div className={modal.active ? "modal__content active" : "modal__content"}
                 onClick={(e) => e.stopPropagation()}>
                <div className="modal_name">{modal.user?.name}</div>
                <div className="_modal modal_phone"><p className="modal_tag">Телефон</p><p
                    className="modal__info underline">{modal.user?.phone}</p></div>
                <div className="_modal modal_email"><p className="modal_tag">Почта</p><p
                    className="modal__info underline">{modal.user?.email}</p></div>
                <div className="_modal modal_date"><p className="modal_tag">Дата приема</p><p
                    className="modal__info">{modal.user?.hire_date}</p></div>
                <div className="_modal modal_posname"><p className="modal_tag">Должность</p><p
                    className="modal__info">{modal.user?.position_name}</p></div>
                <div className="_modal modal_department"><p className="modal_tag">Подразделение</p><p
                    className="modal__info">{modal.user?.department}</p></div>
                <div className="modal_more"><p className="modal_tag">Дополнительная информация</p><p
                    className="_modal__more_info">Разработчики используют текст Lorem ipsum в качестве заполнителя макета
                    страницы. После настройки шаблона весь подобный текст необходимо заменить на уникальный и
                    соответствующий тематике сайта</p></div>
            </div>
        </div>
    );
};