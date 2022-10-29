import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import styles from './Main.module.scss'
import { apiKey } from '../../App'
import { useDispatch, useSelector } from 'react-redux'
import { setPremieres } from '../../redux/slices/mainSlice'
import PremiereCarousel from '../../components/Premiere/PremiereCarousel'
import { Spinner } from 'react-bootstrap'

const Main = () => {
    const dispatch = useDispatch()

    const month = useSelector(state => state.mainReducer.monthPremiere)
    const year = useSelector(state => state.mainReducer.yearPremiere)
    const premieres = useSelector(state => state.mainReducer.premieres)

    const [isLoading, setIsloading] =  useState(false)
 

    console.log(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month}`)
    useEffect(() => {
        setIsloading(true)
        axios
        .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month}`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'X-API-KEY': `${apiKey}`,  
            },
        })
        .then(resp => {
            dispatch(setPremieres(resp.data.items))
            setIsloading(false)
        })    
    },[])

  return (
    <div className={styles.main}>
        <div className={styles.leftBlock}>
            <h1>
                Хочешь посмотреть интересное кино ничего не можешь найти?
            </h1>
            <p>Заходи в наше кастомное приложение и узнавай новое из мира кино!</p>
        </div>
        <div className={styles.rightBlock}>
            <h2 className={styles.title}>Премьеры</h2>
            {
                isLoading ? <Spinner animation="border" variant="danger" /> 
                : 
                <PremiereCarousel premieres={premieres} />
            }
        </div>
        
        
    </div>   
  )
}

export default Main