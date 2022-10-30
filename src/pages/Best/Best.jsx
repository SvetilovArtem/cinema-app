import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Best.module.scss'
import BestFilmItem from './BestFilmItem/BestFilmItem'

const Best = () => {
    const bestFilms = useSelector(state => state.bestFilmsReducer.bestFilms)


  return (
    <>
    <h2>Избранные</h2>
    <ul className={styles.bestList}>
        {
            bestFilms.length ? 
            bestFilms.map(film => {
            return (
              <BestFilmItem film={film} />
            )}) 
            : 
            <span>
              <span className={styles.text}>Нет избранных </span>
              <span className={styles.smile}>&#128532;</span>
            </span>
        }
    </ul>
    </>
    
  )
}

export default Best