import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiKey } from '../../App'
import CardItem from '../../components/CardItem/CardItem'
import styles from './Top.module.scss'

const Top = () => {
    const [cinemas, setCinemas] = useState([])
    console.log(cinemas)

    useEffect(() => {
        axios
        .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top`, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${apiKey}`,
                'Content-Type': 'application/json',
            },
        })
        .then(resp => {
            setCinemas(resp.data.films)
            console.log(resp)
        })
    },[])
  return (
    <div>
        <h2 className={styles.title}>ТОП-фильмы</h2>
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

export default Top