import React, { ChangeEvent, useState } from 'react'
import styles from '../Styles/Input.module.css'
import plus from '../Assets/plus.svg'


export const Input = ({onSetNewTask, addNumberCreatedTasks}) => {

  const[newTask, setNewTask] = useState('');

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>){
    setNewTask(event.target.value);
  }

  function handleNewTask(){
    if(newTask != ""){
      onSetNewTask(newTask);
      setNewTask("");

      addNumberCreatedTasks();
    }
  }

  return (
    <div className={styles.inputSection}>
        <input 
          placeholder='Adicone uma nova tarefa'
          value={newTask}
          onChange={handleChangeInput}
          >
        </input>
        <button 
          onClick={handleNewTask}
          >Criar <img src={plus}/>
        </button>
    </div>
  )
}
