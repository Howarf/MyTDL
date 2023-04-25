import styles from '../css/ToDoList.module.css';
import Docs from './docCom';

export default function ToDoList(){
    const closeWindow = () => {
        document.location.href = '/main';
    }
    const logout = () => {
        if(window.confirm("진짜 로그아웃 하시겠습니까?")){
            sessionStorage.removeItem('user_Info');
            document.location.href = '/';
        }
    }
    return(
        <div className={styles.backBoard}>
            <div className={styles.navBar}>
                <p className={styles.navTitle}><span>사용자</span>님의 할 일들</p>
                <div className={styles.controllBox}>
                    <button onClick={''}>Del</button>
                    <button onClick={closeWindow}>_</button>
                    <button onClick={logout}>x</button>
                </div>
            </div>
            <div className={styles.contentBox}>
                <div className={styles.listBox}>
                    {/* list component */}
                </div>
                <div className={styles.docBox}>
                    <div className={styles.docList}>
                        <Docs/>
                        <Docs/>
                        <Docs/>
                    </div>
                    <button className={styles.docUpload}>생성하기</button>
                </div>
                {/* <div className={styles.uploadBackBoard}>
                    <div className={styles.uploadBox}>
                        <input type='text' className={styles.uploadTitle} value=""></input>
                        <input type='text' className={styles.upload}/>
                    </div>
                </div> */}
            </div>
            
        </div>
    )
}