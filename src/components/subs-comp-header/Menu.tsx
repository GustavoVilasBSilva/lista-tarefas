import styles from './Menu.module.css'

export const MenuNav = () => {
    return (
        <nav>
            <button className={styles.menu_toggle}>

            </button>
            <ul className={styles.menu}>
                <li><a href=""><span className={styles.task}></span>Tarefa</a></li>
                <li><a href=""><span className={styles.about}></span> Sobre</a></li>
            </ul>
        </nav>
    )
}