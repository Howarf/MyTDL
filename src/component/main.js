import axios from 'axios';
import styles from '../css/Main.module.css'
import { useEffect, useState } from 'react';

export default function Main(props){
    let [isLogin, setIsLogin] = useState(props.isLogin);
    let [userName, setUserName] = useState('');
    const logout = () => {
        sessionStorage.removeItem('user_ID');
        document.location.href = '/';
        console.log(isLogin);
        setIsLogin(!props.isLogin);
    }
    const getData = () => {
        axios.post('/user_inform/userdata',null, {
            params: {
                'userName' : userName,
            }
        }).then(res => console.log(res)).catch();
    }
    useEffect(() => {
        getData();
    },[])
    return(
        <div className={styles.case}>
            <strong className={styles.userName}><span>이름</span>님<br/>어서오세요.</strong>
            <button className={styles.button}>리스트 열기</button>
            <button className={styles.button} onClick={logout}>로그아웃</button>
        </div>
    )
}