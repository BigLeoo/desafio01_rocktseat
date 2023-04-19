import React from 'react'
import styles from '../Styles/Input.module.css'
import plus from '../Assets/plus.svg'

export const Input = () => {
  return (
    <div className={styles.inputSection}>
        <input placeholder='Adicone uma nova tarefa'></input>
        <button>Criar <img src={plus}/></button>
    </div>
  )
}
