import React, { useContext } from 'react'
import { Check, Trash } from 'phosphor-react'

import style from '../Styles/Task.module.css'

// interface Tasks{
//   task: string;
//   id: string;
//   completed: boolean
// }
interface  taskProps{
  task: {task: string, id: string, completed: boolean};
  onDeleteTask: (taskToDelete: object) => void;
  decreaseNumberCreatedTasks: () => void;
  onCompleteTask: (task: object) => void;
}

export const Task = ({task, onDeleteTask, decreaseNumberCreatedTasks, onCompleteTask}:taskProps) => {

  function handleDeleteTask(){
    onDeleteTask(task);
    decreaseNumberCreatedTasks();
  }

  function handleCompletTask(){  
    const copyTask = {...task}
    onCompleteTask( copyTask );
  }

  return (
    <>
      { ( !task.completed ) ? 
        (
          <div className={style.task}>
            <div 
              onClick={handleCompletTask}
              className={style.circle}
            ></div>
            <p>{task.task}</p>

            <Trash  
              size='1.5rem' 
              className={style['trash-icon']} 
              onClick={handleDeleteTask}
            />

          </div>
        ) : (
          <div className={style.taskCompleted}>
            <div 
              onClick={handleCompletTask}
              className={style.circleCompleted}
            >
              <Check color='#F2F2F2' size={32} weight='fill' className={style['check-icon']}/>
            </div>

            <p>{task.task}</p>

            <Trash 
              size='1.5rem' 
              className={style['trash-icon']} 
              onClick={handleDeleteTask}
            />
            
          </div>
        )
      }
    </>
  )
}
