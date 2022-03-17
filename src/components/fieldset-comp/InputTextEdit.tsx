import styles from './InputText.module.css'
import { ChangeEvent } from 'react'
import { SetInput } from '../../types/SetInput'


export const InputTextEdit = ({valueText, valueTextArea, newValueTxt, newValueTxtA}: SetInput)=>{
    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        newValueTxt(e.target.value)
    }

    const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        newValueTxtA(e.target.value)
    }
    
    
    return (
        <>
            <fieldset className={styles.fieldset}>
                <legend>Nome da tarefa</legend>
                <input placeholder={valueText} onChange={handleChangeText} className={styles.inputTxt}  type="text"/>
            </fieldset>
            <fieldset className={styles.fieldset}>
                <legend>Nome da tarefa</legend>
                <textarea placeholder={valueTextArea} onChange={handleChangeTextArea} className={styles.textArea}/>
            </fieldset>
        </>
    )
}