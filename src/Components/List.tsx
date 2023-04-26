import styles from '../Styles/List.module.css'
import { Activity, ClipboardText } from 'phosphor-react'
import { Task } from './Task'

interface ListProps{
    arrayTask: Array<object>;
    onDeleteTask: (taskToDelete: object) => void;
    numberCreatedTasks: number;
    decreaseNumberCreatedTasks: () => void;
    onCompleteTask: (task: object) => void;
    numberCompletedTasks: number;
    // task: object;
}

export const List = ({arrayTask, onDeleteTask, numberCreatedTasks, decreaseNumberCreatedTasks, onCompleteTask, numberCompletedTasks}:ListProps) => {

  return (
    <div>
        <div className={styles.tasksInfo}>
            <div className={styles.createdTasks}>
                <p>Tarefas Criadas</p>
                <span>{numberCreatedTasks}</span>
            </div>
            <div className={styles.doneTasks}>
                <p>Concluídas</p>
                <span>{numberCompletedTasks}</span>
            </div>
        </div>

        <div className={styles.listTasks}>
            {(arrayTask.length === 0) ?
                (
                    <div className={styles.noneTasks}>
                        <ClipboardText size={56} color='#333333' />
                        <span>Você ainda não tem tarefas cadastradas</span>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div> 
                ):(arrayTask.map(task => {
                    return(
                        <Task 
                            task={task} 
                            onDeleteTask={onDeleteTask} 
                            key={task.id} 
                            decreaseNumberCreatedTasks={decreaseNumberCreatedTasks} 
                            onCompleteTask={onCompleteTask}
                        />
                    )
                }))
                
            }

        </div>

    </div>
  )
}
