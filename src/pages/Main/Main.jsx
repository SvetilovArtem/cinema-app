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
        <h2 className={styles.title}>Премьеры</h2>
        {
            isLoading ? <Spinner animation="border" variant="danger" /> 
            : 
            <PremiereCarousel premieres={premieres} />
        }
        
    </div>   
  )
}

export default Main