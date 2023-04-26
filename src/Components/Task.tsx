import React, { useContext } from 'react'
import { Circle, Trash } from 'phosphor-react'

import style from '../Styles/Task.module.css'

interface Tasks{
  task: string;
  id: string;
  completed: boolean
}
interface  taskProps{
  task: Tasks;
  onDeleteTask: (taskToDelete: object) => void;
  decreaseNumberCreatedTasks: () => void;
}

export const Task = ({task, onDeleteTask, decreaseNumberCreatedTasks, onCompleteTask}:taskProps) => {

  function handleDeleteTask(){
    onDeleteTask(task);
    decreaseNumberCreatedTasks();
  }

  function handleCompletTask(){
    const copyTask = {...task}
    onCompleteTask( copyTask );
    // increaseNumberCompletedTasks();
  }

  return (
    <>
      { ( !task.completed ) ? 
        (
          <div className={style.task}>

            <Circle 
              size='1.5rem' 
              color='#4EA8DE' 
              className={style['circle-icon']} 
              onClick={handleCompletTask}
            />

            <p>{task.task}</p>

            <Trash  
              size='1.5rem' 
              className={style['trash-icon']} 
              onClick={handleDeleteTask}
            />

          </div>
        ) : (
          <div className={style.taskCompleted}>
            <Circle 
              size='1.5rem' 
              color='#4EA8DE' 
              className={style['circle-icon']}
            />

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
