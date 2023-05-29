import { useEffect, useRef, useState } from 'react'
import styles from '../css/Signup.module.css'
import axios from 'axios';

export default function SignUp(){
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');
    const [checkPw, setCheckPw] = useState('');
    const [samePw, setSamePw] = useState(false);
    const checkPwRef = useRef(null);
    const handleInputId = (e) =>{
        setId(e.target.value);
    }
    const handleInputName = (e) =>{
        setName(e.target.value);
    }
    const handleInputPW = (e) =>{
        setPw(e.target.value);
    }
    const handleInputCheckPW = (e) =>{
        setCheckPw(e.target.value);
    }
    useEffect(()=>{
        if(pw === checkPw && checkPw !== ''){
            checkPwRef.current.style = 'border-bottom: solid 1px #00d994';
            setSamePw(true);
        }else if(checkPw === ''){
            checkPwRef.current.style = 'border-bottom: solid 1px #8aa1a1';
            setSamePw(false);
        }else{
            checkPwRef.current.style = 'border-bottom: solid 1px #f52e2e';
            setSamePw(false);
        }
    },[checkPw,pw])
    const singUp = () =>{
        axios.post('/user_inform/singup', null, {
            params:{
                'id': id,
                'pw': pw,
                'name': name
            }
        }).then(res => {
            if(samePw){
                if(res.data.pass){
                    alert(res.data.msg);
                    window.location.href = '/';
                }
                else{
                    alert(res.data.msg);
                }
            }
        }).catch()
    }
    const goLogin = () =>{
        if(window.confirm('로그인페이지로 돌아가겠습니까?')){
            window.location.href = '/';
        }
    }
    return(
        <div className={styles.box}>
            <div className={styles.main}>
                <strong className={styles.title}>My TDo</strong>
                <div className={styles.inputBox} id={styles.idBox}>
                    <input className={styles.inputs} id={styles.userid} onChange={handleInputId} type="text" name="userid" placeholder="아이디"/>
                    <label htmlFor="userid">아이디</label>
                </div>
                <div className={styles.inputBox}>
                    <input className={styles.inputs} id={styles.username} onChange={handleInputName} type="text" name="username" placeholder="닉네임"/>
                    <label htmlFor="username">닉네임</label>
                </div>
                <div className={styles.inputBox}>
                    <input className={styles.inputs} id={styles.password} onChange={handleInputPW} type="password" name="password" placeholder="비밀번호"/>
                    <label htmlFor="password">비밀번호</label>
                </div>
                <div className={styles.inputBox}>
                    <input className={styles.inputs} id={styles.password} onChange={handleInputCheckPW} ref={checkPwRef} type="password" name="pwCheck" placeholder="비밀번호 확인"/>
                    <label htmlFor="pwCheck">비밀번호 확인</label>
                </div>
                <button className={styles.submitBtn} onClick={singUp} value="회원가입">회원가입</button>
            </div>
            <div className={styles.linkBox}>
                <button id={styles.link} onClick={goLogin}>돌아가기</button>
                <span id={styles.textPoint}>•</span>
                <button id={styles.link}>Howarf's Forge</button>
            </div>
        </div>
    )
}