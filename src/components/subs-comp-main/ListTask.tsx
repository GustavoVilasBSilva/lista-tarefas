import styles from './ListTask.module.css';
import { useState, useEffect } from 'react';
import { Task } from '../../types/Task';
import { ModalExitDelet } from '../Modais/Modais';
import { api } from '../../api';

export const ListTask = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [value, setValue] = useState(false);
    const [id, setId] = useState(0)
    

    useEffect(() => {
        loadListTask();
    }, [tasks]);

    const loadListTask = async () => {;
        let json = await api.getAll();
        setTasks(json);
    }

    const handleClick = (index: number)=>{
        if(value){setValue(false)}
        if(!value){setValue(true)}
        setId(index)
    }

    return (
        <div className={styles.container_task}>
            {tasks.map((iten, index) => (
                <div className={styles.cards_tasks} key={index}>
                    <div>
                        <h4>{iten.title}</h4>
                        <p>{iten.description}</p>
                        {iten.situation == "uncompleted" &&
                            <button className={styles.situation}>Em andamento</button>
                        }
                        {iten.situation == "completed" &&
                            <button className={styles.situation}><span></span> Concluído</button>
                        }
                    </div>
                    <div>
                        <button onClick={() => handleClick(index)} className={styles.btn}></button>
                        {value && id == index &&
                            <ModalExitDelet PropsId={iten.guid} value={setValue} Situation={iten.situation}/>
                        }
                    </div>
                    
                </div>
            ))}
        </div>

    )
}