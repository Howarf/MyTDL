import styles from '../css/DocComponent.module.css'

export default function docCom(){
    return(
        <div className={styles.docCom}>
            <input className={styles.check} type='checkbox' value='check'/>
            <p className={styles.title}>제목</p>
            <pre className={styles.text}>목표목표목표목표목표목표목표목표목표목표목표</pre>
        </div>
    )
}