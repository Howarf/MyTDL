import { useState } from 'react'
import styles from '../css/Signup.module.css'
import axios from 'axios';

export default function SignUp(){
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');
    const [checkPw, setCheckPw] = useState('');
    const [checkData, setCheckData] = useState(false);
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
    const checkDatas = () =>{
        axios.post('/user_inform/checkID', null, {
            params:{'input_id':id}
        }).then(res =>{
            if(res){}
        })
    }
    const singUp = () =>{
        axios.get('/user_inform/SingUp',{
            params:{
                'id': id,
                'pw': pw,
                'name': name
            }
        }).then().catch()
    }
    const goLogin = () =>{
        if(window.confirm('로그인페이지로 돌아가겠습니까?')){
            window.location.href = '/';
        }
    }
    return(
        <div className={styles.main}>
            <strong className={styles.title}>My TDo</strong>
            <div className={styles.inputBox} id={styles.idBox}>
                <input className={styles.inputs} id={styles.userid} onChange={handleInputId} type="text" name="userid" placeholder="아이디"/>
                <label htmlFor="userid">아이디</label>
            </div>
            <div className={styles.inputBox}>
                <input className={styles.inputs} id={styles.username} onChange={handleInputName} onKeyDown={''} type="text" name="username" placeholder="닉네임"/>
                <label htmlFor="username">닉네임</label>
            </div>
            <div className={styles.inputBox}>
                <input className={styles.inputs} id={styles.password} onChange={handleInputPW} onKeyDown={''} type="password" name="password" placeholder="비밀번호"/>
                <label htmlFor="password">비밀번호</label>
            </div>
            <div className={styles.inputBox}>
                <input className={styles.inputs} id={styles.password} onChange={handleInputCheckPW} onKeyDown={''} type="password" name="password" placeholder="비밀번호 확인"/>
                <label htmlFor="password">비밀번호 확인</label>
            </div>
                <button className={styles.checkData} onClick={''} value="정보 확인">확인</button>
                <button className={styles.submitBtn} onClick={''} value="회원가입">회원가입</button>
            <div className={styles.linkBox}>
                <span id={styles.textPoint}>•</span>
                <button id={styles.link} onClick={''}>Howarf's Forge</button>
                <span id={styles.textPoint}>•</span>
            </div>
            <div className={styles.backBtu} onClick={goLogin}/>
        </div>
    )
}