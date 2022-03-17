import styles from './InputText.module.css'
import { ChangeEvent } from 'react'
import { SetInput } from '../../types/SetInput'


export const InputText = ({setValueTxt, setValueTxtArea}: SetInput)=>{
    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setValueTxt(e.target.value)
    }

    const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValueTxtArea(e.target.value)
    }
    
    
    return (
        <>
            <fieldset className={styles.fieldset}>
                <legend>Nome da tarefa</legend>
                <input placeholder='Nome' onChange={handleChangeText} className={styles.inputTxt} type="text"/>
            </fieldset>
            <fieldset className={styles.fieldset}>
                <legend>Nome da tarefa</legend>
                <textarea placeholder='Descrição' onChange={handleChangeTextArea} className={styles.textArea} />
            </fieldset>
        </>
    )
}