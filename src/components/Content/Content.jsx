import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Auth from '../../pages/Auth/Auth'
import Catalog from '../../pages/Catalog/Catalog'
import FilmInfo from '../../pages/FilmInfo/FilmInfo'
import Main from '../../pages/Main/Main'
import styles from './Content.module.scss'

const Content = () => {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/auth'} element={<Auth />} />
        <Route path={'/catalog'} element={<Catalog />} />
        <Route path={'/filmInfo'} element={<FilmInfo />} />
      </Routes>
    </div>
    
  )
}

export default Content