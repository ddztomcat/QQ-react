import React from 'react';
import style from './header.sass';
import avatar from '../../assets/avatar.jpg';
export default class Header extends React.Component {
    render() {
        return <div className={style.header}>
            <img src={avatar} className={style.avatar}/>
            <span>联系人</span>
            <span>添加</span>
        </div>;
    }
} 