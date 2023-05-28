import axios from 'axios';
import styles from '../css/Main.module.css';
import AddToDo from '../component/addTodo';
import Object from './object';
import { useEffect, useState } from 'react';

export default function Main(){
    const userInfo = sessionStorage.getItem('user_Info');
    const weeks = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
    const [userName, setUserName] = useState('');
    const [day, setDay] = useState('0000년 00월 00일');
    const [week, setWeek] = useState('');
    const [time, setTime] = useState();
    const [count, setCount] = useState(0);
    let toDay = new Date();
    useEffect(() => {
        getData();
        currentTime();
        SetData();
    },[])

    const currentTime = () => {
        let time = new Date();
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        setDay(`${toDay.getFullYear()}년 ${toDay.getMonth()+1}월 ${toDay.getDate()}일`);
        setWeek(weeks[toDay.getDay()]);
        setTime(`${hours}:${minutes}`);
    }

    const SetData = () => {
        setInterval(currentTime,2000);
        setInterval(getCount,1000);
    }

    const getData = () => {
        axios.get('/user_inform/userdata', {
            params: {
                'user_id': userInfo,
            }
        }).then(res => {
            setUserName(res.data.name);
        }).catch()
    }
    const getCount = () => {
        axios.get('/user_inform/datacount', {
            params: {
                'user_id': userInfo,
            }
        }).then(res => {
            setCount(res.data.count);
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
                        <p>남은 일 {count}개</p>
                        <span>{week}</span>
                    </div>
                    <div className={styles.time}>{time}</div>
                </div>
                <Object/>
            </div>
            <AddToDo/>
            <div className={styles.linkBox}>
                <span id={styles.textPoint}>•</span>
                <button id={styles.link}>@Howarf's Forge</button>
                <span id={styles.textPoint}>•</span>
            </div>
        </div>
    )
}