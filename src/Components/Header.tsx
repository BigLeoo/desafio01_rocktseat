import React from 'react'
import styles from '../Styles/Header.module.css'
import logoHeader from '../Assets/logo.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <img src={logoHeader} alt="" />
            <h1>to<span>do</span></h1>
        </div>
    </header>
  )
}
