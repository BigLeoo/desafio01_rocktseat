import React, { useState } from 'react'
import './Styles/global.css'
import { Header } from './Components/Header'
import { Input } from './Components/Input'
import { List } from './Components/List'

// interface inputProps{
//   handleNewtask: (activity)
// } 

export function App(){

  const[tasks, setTasks] = useState(['Terminar Desafio 01 !!!']);

  const[numberCreatedTasks, setNumberCratedTasks] = useState(tasks.length);

  function addNumberCreatedTasks(){
      setNumberCratedTasks(tasks.length + 1);
  }

  function decreaseNumberCreatedTasks(){
    setNumberCratedTasks(tasks.length - 1);
  }

  function onDeleteTask(taskToDelete){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task != taskToDelete;
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function onSetNewTask(activity) {
    setTasks([...tasks, activity]);
  }
  
  return (
    <div className='teste'>
      <Header/>
      <Input onSetNewTask={onSetNewTask} addNumberCreatedTasks={addNumberCreatedTasks}/>
      <List task={tasks} onDeleteTask={onDeleteTask} numberCreatedTasks={numberCreatedTasks} decreaseNumberCreatedTasks={decreaseNumberCreatedTasks}/>
    </div>
    
  )
}
