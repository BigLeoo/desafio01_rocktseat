import React, { ChangeEvent, useState } from 'react'
import styles from '../Styles/Input.module.css'
import plus from '../Assets/plus.svg'

import { v4 as uuidv4 } from 'uuid';

interface InputProps{
  onSetNewTask: (actvity: object) => void;
}

export const Input = ({onSetNewTask}:InputProps) => {

  const[newTask, setNewTask] = useState('');

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>){
    setNewTask(event.target.value);
  }

  function handleNewTask(){
    if(newTask != ""){

      onSetNewTask({
        task: newTask,
        id: uuidv4(),
        completed: false
      })

      setNewTask("");
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
