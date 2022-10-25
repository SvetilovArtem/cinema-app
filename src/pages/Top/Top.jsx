import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { apiKey } from '../../App'
import CardItem from '../../components/CardItem/CardItem'
import styles from './Top.module.scss'

const Top = () => {
    const [cinemas, setCinemas] = useState([])
    const [page, setPage] = useState(1)
    const [pagesCount, setPagesCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const [select, setSelect] = useState('')    

    useEffect(() => {
        setIsLoading(true)
        axios
        .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?page=${page}&type=${select}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${apiKey}`,
                'Content-Type': 'application/json',
            },
        })
        .then(resp => {
            setCinemas(resp.data.films)
            setPagesCount(resp.data.pagesCount)
            setIsLoading(false)
            console.log(resp)
        })
        
    },[page, select])
  return (
    <div>
        <h2 className={styles.title}>ТОП-фильмы</h2>
        <Form.Select size="lg" className={styles.select} onChange={(e) => {
            if(e.currentTarget.value === 'Лучшие') {
                setSelect('TOP_250_BEST_FILMS')
            } else if(e.currentTarget.value === 'Популярные') {
                setSelect('TOP_100_POPULAR_FILMS')
            } else {
                setSelect('TOP_AWAIT_FILMS')
            }
        }}>
            <option>Лучшие</option>
            <option>Популярные</option>
            <option>Самые ожидаемые</option>
        </Form.Select>
        {
            !isLoading ? <>
            <div className={styles.activePage}>{page + '/' + pagesCount}</div>
            <div className={styles.btnGroup}>
                <button className={styles.paginateBtn} onClick={() => setPage(page - 1)} disabled={page < 2 ? true : false}>&#11164;</button>
                <button className={styles.paginateBtn} onClick={() => setPage(page + 1)} disabled={page === pagesCount ? true : false}>&#11166;</button>
            </div>
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
            
            <div className={styles.activePage} style={{color: 'black'}}>{page + '/' + pagesCount}</div>
            <div className={styles.btnGroup}>
                <button className={styles.paginateBtn+' '+styles.arrowBtn} style={{color: 'black'}} onClick={() => setPage(page - 1)} disabled={page < 2 ? true : false}>&#11164;</button>
                <button className={styles.paginateBtn+' '+styles.arrowBtn} style={{color: 'black'}} onClick={() => setPage(page + 1)} disabled={page === pagesCount ? true : false}>&#11166;</button>
            </div>
            </> : <Spinner animation="border" variant="danger" />
        }
        
    </div>
  )
}

export default Top