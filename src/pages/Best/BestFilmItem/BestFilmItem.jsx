import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeViewed, setViewed } from '../../../redux/slices/bestSlice'
import styles from './BestFilmItem.module.scss'

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
    <li onClick={() => {
        onViewed(film)
        }}>
        <img src={film.posterUrlPreview} alt='' className={styles.poster}/>
        {film.nameRu}
        { viewed.find(obj => obj.kinopoiskId === film.kinopoiskId) ? <span className={styles.viewed}> просмотрено</span> : ''}
    </li>
  )
}

export default BestFilmItem