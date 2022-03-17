import login from '../../assets/login.png'
import styles from './Login.module.css'

export const Login = () => {
    return(
        <div className={styles.container_Login}>
            <img className={styles.img} src={login} alt="" />
            <div>
                <h4>Gutavo</h4>
                <p>Função</p>
            </div>
        </div>
    )
}