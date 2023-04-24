import React, { ChangeEvent, useState } from 'react'

import styles from '../Styles/List.module.css'
import { Activity, ClipboardText } from 'phosphor-react'
import { Task } from './Task'

import { v4 as uuidv4 } from 'uuid';


export const List = ({task, onDeleteTask, numberCreatedTasks, decreaseNumberCreatedTasks}) => {

  return (
    <div>
        <div className={styles.tasksInfo}>
            <div className={styles.createdTasks}>
                <p>Tarefas Criadas</p>
                <span>{numberCreatedTasks}</span>
            </div>
            <div className={styles.doneTasks}>
                <p>Concluídas</p>
                <span>0</span>
            </div>
        </div>

        <div className={styles.listTasks}>
            {(task.length === 0) ?
                (
                    <div className={styles.noneTasks}>
                        <ClipboardText size={56} color='#333333' />
                        <span>Você ainda não tem tarefas cadastradas</span>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div> 
                ):(task.map(task => {
                    return(
                        <Task task={task} onDeleteTask={onDeleteTask} key={uuidv4()} decreaseNumberCreatedTasks={decreaseNumberCreatedTasks}/>
                    )
                }))
                
            }

        </div>

    </div>
  )
}
