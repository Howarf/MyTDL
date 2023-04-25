import axios from 'axios';
import styles from '../css/Main.module.css';
import { useEffect, useState } from 'react';

export default function Main(){
    let [userName, setUserName] = useState('');
    useEffect(() => {
        getData();
    },[])

    const logout = () => {
        sessionStorage.removeItem('user_Info');
        setUserName('');
        document.location.href = '/';
    }

    const opneList = () => {
        document.location.href = '/ToDoList';
    }

    const getData = () => {
        const userInfo = sessionStorage.getItem('user_Info');
        axios.post('/user_inform/userdata', null, {
            params: {
                'user_id': userInfo,
            }
        }).then(res => {
            setUserName(res.data.name);
        }).catch()
    }
    return(
        <div className={styles.case}>
            <strong className={styles.userName}><span>{userName}</span>님<br/>어서오세요.</strong>
            <button className={styles.button} onClick={opneList}>리스트 열기</button>
            <button className={styles.button} onClick={logout}>로그아웃</button>
            <div className={styles.linkBox}>
                <button id={styles.link} onClick={""}>계정관리</button>
                <span id={styles.textPoint}>•</span>
                <button id={styles.link}>@Howarf's Forge</button>
            </div>
        </div>
    )
}