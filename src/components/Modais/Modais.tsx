import ReactDOM from 'react-dom'
import styles from './Modais.module.css'
import { InputText } from '../fieldset-comp/InputText'
import { useState, useEffect } from 'react'
import { api } from '../../api'
import { Task } from '../../types/Task'
import { InputTextEdit } from '../fieldset-comp/InputTextEdit'

export const ModalAddTask = ({Props}: any) => {
    const [text, setText] = useState<string>('')
    const [textArea, setTextArea] = useState<string>('')

    const AddNewTask = async () => {
        if(text == ''  || textArea == '') {
            alert('Preencha todos os campos')
        } else {
            let json = await api.addNew(text, textArea);
            if(json.guid) {
                Props(false)
                alert('Dispesa salva com sucesso.')
            } else {
                Props(false)
                alert('Não foi possivel salvar sua despesa, porfavor tente mais tarde.')
            }  
        }
    }

    const ExitModal = () =>{
        Props(false)
    }
    
    return ReactDOM.createPortal(
        <div className={styles.bg}>
            <div className={styles.container_addtask}>
                <h4>Criar tarefa</h4>
                <InputText setValueTxt={setText} setValueTxtArea={setTextArea}/>
                <div className={styles.div_btn}>
                    <button onClick={ExitModal}>Cancelar</button>
                    <button onClick={AddNewTask}>Salvar</button>
                </div>
            </div>
        </div>,
    document.body)
}


export const ModalExitDelet = ({PropsId, value, Situation}: any) => {
    const [text, setText] = useState<string>('')
    const [textArea, setTextArea] = useState<string>('')
    const [modalEdit, setModalEdit] = useState<boolean>(false);
    const [close, setClose] = useState<boolean>(true);
    const [stateBtn, setStateBtn] = useState<string>(Situation)
    const [newValueTxt, setNewValueTxt] = useState<string>('')
    const [newValueTxtA, setNewValueTxtA] = useState<string>('')

    const handleClickUpdate = async (id: string) => {
        setModalEdit(true);
        let json:Task = await api.EditTask(id);
        setText(json.title);
        setTextArea(json.description); 
    }

    if(!close) {
        setModalEdit(false)
        setClose(true)
    }

    const handleClickDelet = async (id: string) => {
        const json = await api.deletTask(id);
        if(json.status == 204) {
            alert('Despesa deletada com sucesso.');
            value(false);
        } else {
            alert('Erro!!! Porfavor tente mais tarde. ');
            value(false);
        }
    }

    return (
        <div className={styles.edit_delet}>
            <button onClick={() => handleClickUpdate(PropsId)}>
                <span className={styles.edit}></span>
                Atualizar tarefa
                {modalEdit && close &&
                    <ModalEditTask PropsId={PropsId} exitModal={setClose} setValueTxt={setText} setValueTxtArea={setTextArea} valueText={text} valueTextArea={textArea} Situation={stateBtn} newValueTxt={setNewValueTxt} newValueTxtA={setNewValueTxtA} updadeValueTxt={newValueTxt} updadeValueTxtA={newValueTxtA}/>
                }
            </button>
            <button onClick={() => handleClickDelet(PropsId)}>
                <span className={styles.delet}></span>
                Remover tarefa
            </button>
        </div>
    )
}


export const ModalEditTask = ({PropsId, exitModal, setValueTxt, setValueTxtArea, valueText, valueTextArea, newValueTxt, newValueTxtA, Situation, updadeValueTxt, updadeValueTxtA}: any) => {
    const [newSituation, setNewSituation] = useState<string>('')
    useEffect(()=>{
        setNewSituation(Situation)
    },[])
    const handleClickBtn = (value: string) => {
        if(value !== 'uncompleted') {
            setNewSituation('completed')
        }
        if(value !== 'completed') {
            setNewSituation('uncompleted')
        }
    }
    const ExitModal = () =>{
        exitModal(false)
    }

    const UpdateTask = async () => {
        let jsonText:string
        let jsonTextArea:string

        updadeValueTxt !== '' ? jsonText = updadeValueTxt :  jsonText = valueText
        updadeValueTxtA !== ''  ? jsonTextArea = updadeValueTxtA :  jsonTextArea = valueTextArea

        let json = await api.EditTaskUpdate(PropsId, jsonText, jsonTextArea , newSituation);

        exitModal(false)

    }
    
    
    return ReactDOM.createPortal(
        <div className={styles.bg}>
            <div className={styles.container_editTask}>
                <h4>Criar tarefa</h4>
                <InputTextEdit setValueTxt={setValueTxt} setValueTxtArea={setValueTxtArea} valueText={valueText} valueTextArea={valueTextArea}  newValueTxt={newValueTxt} newValueTxtA={newValueTxtA}/>
                <div className={styles.div_situation_btn}>
                    
                    {newSituation !== 'completed' &&
                        <>
                            <button className={styles.actived}>Em progresso</button>
                            <button onClick={() => handleClickBtn('completed')}>Concluído</button>
                        </>
                    }
                    {newSituation !== 'uncompleted' &&
                        <>
                            <button onClick={() => handleClickBtn('uncompleted')} >Em progresso</button>
                            <button className={styles.actived}>Concluído</button>
                        </>
                    }
                </div>
                <div className={styles.div_btn}>
                    <button onClick={ExitModal} >Cancelar</button>
                    <button onClick={UpdateTask} >Salvar</button>
                </div>
            </div>
        </div>,
    document.body)
}