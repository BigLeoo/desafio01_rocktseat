import React from 'react'
import './Styles/global.css'
import { Header } from './Components/Header'
import { Input } from './Components/Input'
import { List } from './Components/List'

export function App(){
  return (
    <div className='teste'>
      <Header/>
      <Input/>
      <List/>
    </div>
    
  )
}
