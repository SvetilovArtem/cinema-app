import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import styles from './Main.module.scss'
import { useState } from 'react'
import CardItem from '../../components/CardItem/CardItem'
import { useDispatch, useSelector } from 'react-redux'
import { setMonthPremiere, setPremieres, setYearPremiere } from '../../redux/slices/mainSlice'

export const apiKey = 'd2d0dc24-cb8f-4d93-acca-55a975291bc0'

const Main = () => {
    const [cinemas, setCinemas] = useState([])

    const month = useSelector(state => state.mainReducer.monthPremiere)
    const year = useSelector(state => state.mainReducer.yearPremiere)
    const premieres = useSelector(state => state.mainReducer.premieres)

    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(setYearPremiere())
        dispatch(setMonthPremiere())
        axios
        .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top`, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${apiKey}`,
                'Content-Type': 'application/json',
            },
        }).then(resp => {
            console.log(resp.data.films)
            setCinemas(resp.data.films)
        })
        axios
        .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${apiKey}`,
                'Content-Type': 'application/json',
            },
        })
        .then(resp => {dispatch(setPremieres(resp.data.items))
        console.log(resp)})
    },[])
  return (
    <div className={styles.main}>
        <h2>Премьеры</h2>
        <ul className={styles.filmsList}>
            {premieres.map(e => {
                return <li className={styles.filmsItem}>
                <CardItem 
                poster={e.posterUrlPreview} 
                name={e.nameRu}
                year={e.premiereRu}
                filmId={e.filmId}/>
                {/* надо указать другое название вместо filmId */}
            </li>
            })}
        </ul>
        <h2>ТОП-фильмы</h2>
        <ul className={styles.filmsList}>
            {cinemas.map(el => {
                return <li className={styles.filmsItem}>
                    <CardItem 
                    rating={el.rating}
                    poster={el.posterUrlPreview} 
                    name={el.nameRu}
                    year={el.year}
                    filmId={el.filmId}/>
                    
                </li>
            })}
            
        </ul>
    </div>
    
  )
}

export default Main