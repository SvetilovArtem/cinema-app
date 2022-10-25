import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChoisenActor, setIsShowingActor } from '../../redux/slices/filmInfoSlice'
import styles from './Actor.module.scss'

const Actor = ({name, poster}) => {
    const isShowingActor = useSelector(state => state.filmInfoReducer.isShowingActor)
    const choisenActor = useSelector(state => state.filmInfoReducer.choisenActor)
    const dispatch = useDispatch()

  return (
    <div className={styles.wrapper}> 
        <span 
        className={styles.name}
        onMouseOver={() => {
          dispatch(setIsShowingActor(!isShowingActor))
          dispatch(setChoisenActor(name))
        }}
        onMouseOut={() => {
          dispatch(setIsShowingActor(false))
          dispatch(setChoisenActor(''))
        }}>
          {name}
        </span>
        {isShowingActor && choisenActor === name ? <img src={poster} className={styles.avatar} alt='' /> : null}
    </div>
  )
}

export default Actor