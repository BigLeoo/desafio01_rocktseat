import React, { useContext } from 'react'
import { Circle, Trash } from 'phosphor-react'

import style from '../Styles/Task.module.css'

interface  taskProps{
  task: string;
  onDeleteTask: (taskToDelete: string) => void;
  decreaseNumberCreatedTasks: () => void;
}

export const Task = ({task, onDeleteTask, decreaseNumberCreatedTasks}:taskProps) => {

  function handleDeleteTask(){
    onDeleteTask(task);
    decreaseNumberCreatedTasks();
  }

  return (
    <div className={style.task}>
      <Circle size='1.5rem' color='#4EA8DE' className={style['circle-icon']}/>
      <p>{task}</p>
      <Trash  size='1.5rem' className={style['trash-icon']} onClick={handleDeleteTask}/>
    </div>
  )
}
