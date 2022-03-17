import styles from './Main.module.css';
import { InputSearch } from './subs-comp-main/Input';
import { ListTask } from './subs-comp-main/ListTask';
import { BtnNewTask } from './subs-comp-main/BtnNewTask';

export const Main = () => {
    return (
        <main className={styles.container_main}>
            <section className={styles.search} >
                <InputSearch/>
            </section>
            <section className={styles.section_task}>
                <h2>Tarefa</h2>
                <ListTask/>
            </section>
            <section className={styles.section_newTask}>
                <BtnNewTask/>
            </section>
        </main>
    )
}