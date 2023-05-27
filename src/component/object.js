import { useEffect, useState } from 'react';
import styles from '../css/doc.module.css';
import Doc from './Doc';
import axios from 'axios';

export default function Object(){
    const user_id = sessionStorage.getItem('user_Info');
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('/user_inform/read', {
            params:{'user_id': user_id}
        }).then(res => {
            setTodos(res.data);
        }).catch()
    },[todos])
    return(
        <div className={styles.objectList}>
            {todos.map(el => {return(<Doc todo={el.todo} num={el.num} gool={el.gool}/>)})}
        </div>
    )
}