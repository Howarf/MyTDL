import { useRef, useState } from 'react';
import styles from '../css/addToDo.module.css';
import axios from 'axios';

export default function AddTodo() {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const box = useRef(null);
    const openBox = () => {
        setOpen(!open);
    }
    const inputText = (e) => {
        setText(e.target.value);
    }
    const enterDown = (e) => {
        if(e.key === 'Enter'){
            const user_id = sessionStorage.getItem('user_Info');
            if(text === ''){alert('내용을 입력해주세요.'); return;}
            else{
                axios.post('/user_inform/upload', null, {
                    params: {
                        'user_id': user_id,
                        'addTodo': text
                    }
                }).then(res => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                });
            }
            alert('등록되었습니다.');
            setText('');
        }
    }
    return(
        <div className={styles.addTodo}>
            <div className={open ? styles.inputBox : styles.closed}>
                <input type='text' autoFocus onChange={inputText} onKeyDown={enterDown} name='todo' value={text} placeholder='할 일을 입력 후, Enter를 누르세요'/>
            </div>
            <div className={open ? styles.closedB : styles.opneB} onClick={openBox}>
                <div id={styles.plus1}></div>
                <div id={styles.plus2}></div>
            </div>
        </div>
    )
}