import { useState } from 'react'
import styles from './BtnNewTask.module.css'
import { ModalAddTask } from '../Modais/Modais'

export const BtnNewTask = () => {
    const [newTask, setNewTask] = useState<boolean>(false)

    const addNewTask = () => {
        setNewTask(true)
    }

    return (
        <>
            <button onClick={addNewTask} className={styles.btn_newTask}>
                <span></span>
                Nova Tarefa
            </button>
            {newTask &&
                <ModalAddTask Props={setNewTask}/>
            }
        </>
        
    )
}