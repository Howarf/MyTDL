import styles from '../css/SignIn.module.css';

export default function SignIn(){
    return(
        <div className={styles.main}>
            <form method="post" action="" className={styles.signInBox}>
                <strong>My objective</strong>
            <div className={styles.inputBox}>
                <input className={styles.inputs} id={styles.username} type="text" name="username" placeholder="아이디"/>
                <label for="username">아이디</label>
            </div>
            <div className={styles.inputBox}>
                <input className={styles.inputs} id={styles.password} type="password" name="password" placeholder="비밀번호"/>
                <label for="password">비밀번호</label>
            </div>
                <input className={styles.submitBtn} type="submit" value="로그인"/>
            </form>
            <div className={styles.linkBox}>
                <button id={styles.link} href={""}>비밀번호 찾기</button>
                <button id={styles.link} href={"/login/SignUp"}>회원가입</button>
            </div>
        </div>
    )
}