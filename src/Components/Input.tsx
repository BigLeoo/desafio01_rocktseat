import React, { useState } from 'react'
import styles from '../Styles/Input.module.css'
import plus from '../Assets/plus.svg'


export const Input = () => {

  const[tasks, setTaks] = useState(['Terminar o desafio 01 !!']);
  const[newTask, setTask] = useState('');

  return (
    <div className={styles.inputSection}>
        <input placeholder='Adicone uma nova tarefa'></input>
        <button>Criar <img src={plus}/></button>
    </div>
  )
}
