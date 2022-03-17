import styles from './Header.module.css'
import { Login } from './subs-comp-header/Login'
import { MenuNav } from './subs-comp-header/Menu'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Login/>
            <MenuNav/>

        </header>
    )
}