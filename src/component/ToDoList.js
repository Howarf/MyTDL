import styles from '../css/ToDoList.module.css';

export default function ToDoList(){
    return(
        <div className={styles.backBoard}>
            <div className={styles.contentBox}>
                <div className={styles.controllBox}>
                    <button>allDelete</button>
                    <button>closeBox</button>
                    <button>logOut</button>
                </div>
                <div className={styles.listBox}>
                    {/* list component */}
                </div>
                <div className={styles.docBox}>
                    {/* doc component */}
                </div>
                <div className={styles.uploadBackBoard}>
                    <div className={styles.uploadBox}>
                        <input type='text' className={styles.uploadTitle} value=""></input>
                        <input type='text' className={styles.upload}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}