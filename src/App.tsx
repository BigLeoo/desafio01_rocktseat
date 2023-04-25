import React, { useState } from 'react'
import './Styles/global.css'
import { Header } from './Components/Header'
import { Input } from './Components/Input'
import { List } from './Components/List'

import { v4 as uuidv4 } from 'uuid';
// interface inputProps{
//   handleNewtask: (activity)
// } 

export function App(){

  const[tasks, setTasks] = useState(
    [
    {
      task: "Terminar desafio",
      id: uuidv4(),
      completed: false
    }
  ]
  );

  const[numberCreatedTasks, setNumberCratedTasks] = useState(tasks.length);

  function addNumberCreatedTasks(){
      setNumberCratedTasks(tasks.length + 1);
  }

  function decreaseNumberCreatedTasks(){
    setNumberCratedTasks(tasks.length - 1);
  }

  function onDeleteTask(taskToDelete){

    const tasksNotToDelete = tasks.filter(task => {
      
      return taskToDelete.id != task.id;
    })
  
    setTasks(tasksNotToDelete)
  }

  function onSetNewTask(activity) {

    setTasks([...tasks, activity]);
  
    addNumberCreatedTasks()
  }

  function onCompleteTask(taskCompleted){
    console.log(taskCompleted);

    tasks.forEach( obj => {
      if(obj.id === taskCompleted.id){
        obj.completed = true;
      }
    })
    console.log(tasks);
    

    
    setTasks([tasks]);
  }
  
  return (
    <div className='teste'>
      <Header/>
      <Input onSetNewTask={onSetNewTask} arrayTask={tasks}/>
      <List arrayTask={tasks} onDeleteTask={onDeleteTask} numberCreatedTasks={numberCreatedTasks} decreaseNumberCreatedTasks={decreaseNumberCreatedTasks} onCompleteTask={onCompleteTask}/>
    </div>
    
  )
}
