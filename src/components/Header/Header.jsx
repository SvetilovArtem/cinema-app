import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navItem}><NavLink to={'/'}>Главная</NavLink></div>
        <div className={styles.navItem}><NavLink to={'/top'}>Лучшее</NavLink></div>
        <div className={styles.navItem}><NavLink to={'/catalog'}>Каталог</NavLink></div>
        <div className={styles.navItem}><NavLink to={'/auth'}>Логин</NavLink></div>
      </nav> 
    </header>
  )
}

export default Header