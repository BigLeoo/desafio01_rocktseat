import React, { useContext } from 'react'
import { Circle, CheckCircle, Trash } from 'phosphor-react'

import style from '../Styles/Task.module.css'

interface  taskProps{
  task: string;
}

export const Task = ({task}:taskProps) => {
  return (
    <div className={style.task}>
      <Circle size='1.5rem' color='#4EA8DE' className={style['circle-icon']}/>
      <p>{task}</p>
      <Trash  size='1.5rem' className={style['trash-icon']}/>
    </div>
  )
}
