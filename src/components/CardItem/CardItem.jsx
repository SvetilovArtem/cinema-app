import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setChoiseFilm, setSelectFilmName } from '../../redux/slices/catalogSlice'

import styles from './CardItem.module.scss'

const CardItem = ({name, year, poster, filmId, rating}) => {
  const dispatch = useDispatch()

  return (
    <NavLink to={'/filmInfo'}>
        <div className={styles.wrapper}>
            <div className={styles.cardHeader}>
              <h3 className={styles.title}>{name}</h3 >
              {rating && <span className={styles.rating}>{rating}</span>}
            </div>
            <img 
            src={poster} 
            alt="" 
            height={400} 
            className={styles.img} 
            onClick={() => {
              console.log(filmId)
              dispatch(setSelectFilmName(name))
              dispatch(setChoiseFilm(filmId))
            }}
            />
            <p className={styles.year}>{year}</p>
            <p>{filmId}</p>
        </div>
    </NavLink>
    
  )
}

export default CardItem