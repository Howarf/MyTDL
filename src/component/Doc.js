import { useEffect, useState } from 'react';
import styles from '../css/doc.module.css';
import DeleteIcon from '../img/delete_FILL.svg'
import axios from 'axios';

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

export default function Doc(data){
    const [gool, setGool] = useState(data.gool);
    const [check, setCheck] = useState(false);
    const [text, setText] = useState('');
    const clearOb = () => {
        if(gool == 'false'){
            axios.post('/user_inform/clear', null, {
                params: {'num': data.num, 'gool': true}
            }).then(
                setGool('true')
            ).catch()
        }
        else{axios.post('/user_inform/clear', null, {
                params: {'num': data.num, 'gool': false}
            }).then(
                setGool('false')
            ).catch()
        }
    }
    const deleteOb = () => {
        if(window.confirm("진짜 삭제 하시겠습니까?")){
            axios.post('/user_inform/delet', null, {
                params: {'num': data.num}
            }).then().catch()
        }
    }
    useEffect(() =>{
        if(gool == 'true'){
            setCheck(true);
        }else{setCheck(false);}
        setText(data.todo);
    },[gool])
    return(
        <div className={styles.object}>
            <span className={styles.doc} onClick={clearOb}>
                <p className={check ? styles.clear : {}}><span/>{text}</p>
            </span>
            <span className={styles.del_Zone}>
                <div className={styles.del_B} onClick={deleteOb}>
                    <img src={DeleteIcon}/>
                </div>
            </span>
        </div>
    )
}