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
      completed: true
    }
  ]
  );

  const[numberCreatedTasks, setNumberCratedTasks] = useState(tasks.length);
  const[numberCompletedTasks, setNumberCompletedTasks] = useState(1)

  function addNumberCreatedTasks(){
      setNumberCratedTasks(tasks.length + 1);
  }

  function increaseNumberCompletedTasks(){
    let completedTasks = 0;
    tasks.forEach(obj => {
      if(obj.completed == true){
        completedTasks += 1
      }
    })
    setNumberCompletedTasks(completedTasks);
  }

  function decreaseNumberCreatedTasks(){
    setNumberCratedTasks(tasks.length - 1);
    if(tasks.length === 1){
      setNumberCompletedTasks(0);
    } else {
      const attNumberCompleted = numberCompletedTasks - 1;
      setNumberCompletedTasks(attNumberCompleted);
    }
  }

  function onDeleteTask(taskToDelete){

    const tasksNotToDelete = tasks.filter(task => {
      
      return taskToDelete.id != task.id;
    })

    setTasks(tasksNotToDelete);
    increaseNumberCompletedTasks();
  }

  function onSetNewTask(activity) {

    setTasks([...tasks, activity]);
  
    addNumberCreatedTasks()
  }

  function onCompleteTask(task){
    const copyArrayTasks = [...tasks];

    if(task.completed === false){
      copyArrayTasks.forEach( obj => {
        if(obj.id === task.id){
          obj.completed = true;
        }
      })
    } else {
      copyArrayTasks.forEach( obj => {
        if(obj.id === task.id){
          obj.completed = false;
        }
      })
    }

    setTasks(copyArrayTasks);

    increaseNumberCompletedTasks();
  }
  
  return (
    <div className='teste'>
      <Header/>
      <Input onSetNewTask={onSetNewTask} arrayTask={tasks}/>
      <List 
        arrayTask={tasks} 
        onDeleteTask={onDeleteTask} 
        numberCreatedTasks={numberCreatedTasks} 
        decreaseNumberCreatedTasks={decreaseNumberCreatedTasks} 
        onCompleteTask={onCompleteTask}
        numberCompletedTasks={numberCompletedTasks}
      />
    </div>
    
  )
}
