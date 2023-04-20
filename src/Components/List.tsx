import React from 'react'

import styles from '../Styles/List.module.css'
import { ClipboardText } from 'phosphor-react'
import { Task } from './Task'


export const List = () => {
  return (
    <div>
        <div className={styles.tasksInfo}>
            <div className={styles.createdTasks}>
                <p>Tarefas Criadas</p>
                <span>0</span>
            </div>
            <div className={styles.doneTasks}>
                <p>Concluídas</p>
                <span>0</span>
            </div>
        </div>

        <div className={styles.listTasks}>
            {/* <div className={styles.noneTasks}>
                <ClipboardText size={56} color='#333333' />
                <span>Você ainda não tem tarefas cadastradas</span>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div> */}

            <Task/>
            <Task/>
            <Task/>

        </div>

    </div>
  )
}
