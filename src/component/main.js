import axios from 'axios';
import styles from '../css/Main.module.css';
import AddToDo from '../component/addTodo';
import Object from './object';
import { useEffect, useState } from 'react';

export default function Main(){
    const weeks = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
    let [userName, setUserName] = useState('');
    let [day, setDay] = useState('0000년 00월 00일');
    let [week, setWeek] = useState('');
    let [time, setTime] = useState();
    let toDay = new Date();
    useEffect(() => {
        getData();
        currentTime();
        Timer();
    },[])

    const currentTime = () => {
        let time = new Date();
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        setDay(`${toDay.getFullYear()}년 ${toDay.getMonth()+1}월 ${toDay.getDate()}일`);
        setWeek(weeks[toDay.getDay()]);
        setTime(`${hours}:${minutes}`);
    }

    const Timer = () => {
        setInterval(currentTime,2000);
    }

    const getData = () => {
        const userInfo = sessionStorage.getItem('user_Info');
        axios.get('/user_inform/userdata', {
            params: {
                'user_id': userInfo,
            }
        }).then(res => {
            setUserName(res.data.name);
        }).catch()
    }
    
    const logout = () => {
        if(window.confirm("진짜 로그아웃 하시겠습니까?")){
            sessionStorage.removeItem('user_Info');
            document.location.href = '/';
        }
    }

    return(
        <div className={styles.case}>
            <div className={styles.backBoard}>
                <div className={styles.navBar}>
                    <div className={styles.controllBox}>
                        <button onClick={logout}></button>
                    </div>
                    <p>{userName}</p>
                </div>
                <div className={styles.date}>
                    <div>
                        <h1>{day}</h1>
                        <p>남은 일 0개</p>
                        <span>{week}</span>
                    </div>
                    <div className={styles.time}>{time}</div>
                </div>
                <Object/>
            </div>
            <AddToDo/>
            <div className={styles.linkBox}>
                <button id={styles.link} onClick={""}>계정관리</button>
                <span id={styles.textPoint}>•</span>
                <button id={styles.link}>@Howarf's Forge</button>
            </div>
        </div>
    )
}