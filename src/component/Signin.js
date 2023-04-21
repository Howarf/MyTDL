import { useEffect, useState } from 'react';
import styles from '../css/SignIn.module.css';
import axios from 'axios';

export default function SignIn(){
    const [inputID,setInputID] = useState('');
    const [inputPW,setInputPW] = useState('');
    const [userName,setUserName] = useState('');
    
    useEffect(() => {
        axios.get('/user_inform/login').then(res => console.log(res)).catch()
        console.log(sessionStorage.getItem('user_ID'));
    },[])

    const clickLogin = () =>{
        axios.post('/user_inform/login', null, {
            params: {
                'user_id': inputID,
                'user_pw': inputPW
            }
        }).then(res => {
            console.log(res);
            if(res.data.userId === undefined || res.data.userId === null){
                alert('입력하신 아이디나 비밀번호가 일치하지않습니다.');
            }
            else if(res.data.userId === inputID){
                console.log('==========로그인 성공==========');
                sessionStorage.setItem('user_ID',inputID);
            }
            document.location.href = '/';
        }).catch()
    }
    const handleInputId = (e) =>{
        setInputID(e.target.value);
    }
    const handleInputPW = (e) =>{
        setInputPW(e.target.value);
    }
    
    return(
        <div className={styles.main}>
            <strong className={styles.title}>My objective</strong>
            <div className={styles.inputBox}>
                <input className={styles.inputs} id={styles.username} onChange={handleInputId} type="text" name="username" placeholder="아이디"/>
                <label for="username">아이디</label>
            </div>
            <div className={styles.inputBox}>
                <input className={styles.inputs} id={styles.password} onChange={handleInputPW} type="password" name="password" placeholder="비밀번호"/>
                <label for="password">비밀번호</label>
            </div>
                <button className={styles.submitBtn} onClick={clickLogin} value="로그인">로그인</button>
            <div className={styles.linkBox}>
                <button id={styles.link} href={""}>비밀번호 찾기</button>
                <button id={styles.link} href={"/login/SignUp"}>회원가입</button>
            </div>
        </div>
    )
}