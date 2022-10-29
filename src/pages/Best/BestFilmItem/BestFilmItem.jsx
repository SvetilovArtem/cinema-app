import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeBestFilms, removeViewed, setViewed } from '../../../redux/slices/bestSlice'
import styles from './BestFilmItem.module.scss'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

const BestFilmItem = ({ film }) => {
    const viewed = useSelector(state => state.bestFilmsReducer.viewed)
    const dispatch = useDispatch()

    function onViewed(obj) {
        if(viewed.find(e => e.kinopoiskId === obj.kinopoiskId)) {
            dispatch(removeViewed(obj))
        } else {
            dispatch(setViewed(obj))
        }
        
        console.log(obj)
      }
  return (
    <li>
        <span>
            <img src={film.posterUrlPreview} alt='' className={styles.poster} />
            <span className={styles.name} onClick={() => {onViewed(film)}}>{film.nameRu}</span>
        </span>
        { viewed.find(obj => obj.kinopoiskId === film.kinopoiskId) ? <span className={styles.viewed}> просмотрено</span> : ''}
        <IconButton aria-label="delete" onClick={()=>{dispatch(removeBestFilms(film))}}>
            <DeleteIcon />
        </IconButton>
    </li>
  )
}

export default BestFilmItem