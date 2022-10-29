import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActors, setBudget, setBudgetIsOpen, setFilmObj, setImages, setIsFavorite, setPosterUrl, setVideo, setVideoIsOpen } from '../../redux/slices/filmInfoSlice'
import { apiKey } from '../../App'
import styles from './FilmInfo.module.scss'
import ReactPlayer from 'react-player'
import Actor from '../../components/Actor/Actor'
import { Fab } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { removeBestFilms, setBestFilms } from '../../redux/slices/bestSlice'
import Comments from './Comments/Comments'
import { setAboutFilm } from '../../redux/slices/commentsSlice'

const FilmInfo = () => {
  const choiseFilm = useSelector(state => state.catalogReducer.choiseFilm)
  const posterUrl = useSelector(state => state.filmInfoReducer.posterUrl)
  const filmObj = useSelector(state => state.filmInfoReducer.filmObj)
  const videoIsOpen = useSelector(state => state.filmInfoReducer.videoIsOpen)
  const budget = useSelector(state => state.filmInfoReducer.budget)
  const budgetIsOpen = useSelector(state => state.filmInfoReducer.budgetIsOpen)
  const images = useSelector(state => state.filmInfoReducer.images)
  const actors = useSelector(state => state.filmInfoReducer.actors)
  const bestFilms = useSelector(state => state.bestFilmsReducer.bestFilms)

  const video = useSelector(state => state.filmInfoReducer.video)

  const dispatch = useDispatch()

  useEffect(() => {

    axios
    .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${choiseFilm}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': `${apiKey}`,
            'Content-Type': 'application/json',
        },
    })
    .then(resp => {
      dispatch(setPosterUrl(resp.data.posterUrl))
      dispatch(setFilmObj(resp.data))
      dispatch(setAboutFilm(resp.data))
    })
    axios
    .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${choiseFilm}/videos`, {
        method: 'GET',
        headers: {
            'X-API-KEY': `${apiKey}`,
            'Content-Type': 'application/json',
        },
    })
    .then(resp => {
      dispatch(setVideo(resp.data.items))
    })

    axios
    .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${choiseFilm}/images`, {
        method: 'GET',
        headers: {
            'X-API-KEY': `${apiKey}`,
            'Content-Type': 'application/json',
        },
    })
    .then(resp => {
      dispatch(setImages(resp.data.items))
    })

      axios
    .get(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${choiseFilm}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': `${apiKey}`,
            'Content-Type': 'application/json',
        },
    })
    .then(resp => {
      dispatch(setActors(resp.data))
    console.log(resp)})
  },[])

  function showBoxOffice() {
    axios
    .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${choiseFilm}/box_office`, {
        method: 'GET',
        headers: {
            'X-API-KEY': `${apiKey}`,
            'Content-Type': 'application/json',
        },
    })
    .then(resp => {dispatch(setBudget(resp.data.items))})

    dispatch(setBudgetIsOpen(!budgetIsOpen))
  }


  return (
    filmObj.kinopoiskId &&
      <div className={styles.wrapper} >
          <div className={styles.media}> 
            <img src={posterUrl} alt='' className={styles.poster} />
            <button onClick={() => dispatch(setVideoIsOpen(!videoIsOpen))} className={styles.trailerOpen}>Трейлер</button>
            <div className={styles.player}>
                {videoIsOpen &&
                  <ReactPlayer
                  className='react-player'
                  url={`${video}`}
                  width='100%'
                  height='100%'
                  controls='true'
                  />
                  }
              </div>
          </div>
       
        <div className={styles.infoBlock}>
            <div className={styles.header}>
              <h1>{filmObj.nameRu}</h1>
              <Fab 
              color={bestFilms.find(e=>e.kinopoiskId===filmObj.kinopoiskId)?'error':''} 
              aria-label="like"
              onClick={() => {  
                  if(bestFilms.find(e=>e.kinopoiskId===filmObj.kinopoiskId)) {
                    dispatch(removeBestFilms(filmObj))
                  } else {
                    dispatch(setBestFilms(filmObj))
                  }          
              }}>
                <FavoriteIcon />
              </Fab>
            </div>

          <ul className={styles.info}>
            <li className={styles.infoItem}><span className={styles.brightText}>Год производства:</span>{filmObj.year}</li>
            <li className={styles.infoItem}><span className={styles.brightText}>Рейтинг кинопоиска:</span>{filmObj.ratingKinopoisk}</li>
            <li className={styles.infoItem}><span className={styles.brightText}>Описание:</span>{filmObj.description}</li>
            <li className={styles.infoItem}>
              <span className={styles.brightText}>В ролях:</span>
              {actors.map(e => {
                return <Actor name={e.nameRu} poster={e.posterUrl} />})}
            </li>
            <li className={styles.infoItem} onClick={showBoxOffice}><span className={styles.brightText + ' ' + styles.showText}>Показать бюджет фильма:</span>{budgetIsOpen ? budget : 'не известен'}</li>
          </ul> 

          <ul className={styles.imageList}>
            {images.map(e => {
              return <li className={styles.imageItem}>
              <img src={e} alt="" />
            </li>
            })} 
          </ul>
          <Comments />
        </div>
      
      </div>
    
    
  )
}

export default FilmInfo