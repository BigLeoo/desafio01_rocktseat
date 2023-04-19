import React, { useContext } from 'react'
import { Circle, CheckCircle, Trash } from 'phosphor-react'

import style from '../Styles/Task.module.css'

export const Task = () => {
  return (
    <div className={style.task}>
      <Circle/>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <Trash/>
    </div>
  )
}
