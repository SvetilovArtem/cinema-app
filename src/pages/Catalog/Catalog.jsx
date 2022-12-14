import axios from 'axios'
import React, { useState } from 'react'
import styles from './Catalog.module.scss'
import CardItem from '../../components/CardItem/CardItem'
import { useDispatch, useSelector } from 'react-redux'
import { onChangeValue } from '../../redux/slices/catalogSlice'
import { useEffect } from 'react'
import { apiKey } from '../../App'
import { Button, Spinner } from 'react-bootstrap'


const Catalog = () => {

  const value = useSelector(state => state.catalogReducer.value)
  const dispatch = useDispatch()

  const [filmsAfterFilters, setFilmsAfterFilters] = useState([])

  const [genre, setGenre] = useState('')
  const [genresArr, setGenresArr] = useState([]) 

  const [country, setCountry] = useState('')
  const [countriesArr, setCountriesArr] = useState([])

  const [yearFrom, setYearFrom] = useState('')
  const [yearTo, setYearTo] = useState('')

  const [ratingFrom, setRatingFrom] = useState('')
  const [ratingTo, setRatingTo] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const [page, setPage] = useState(1)
  const [pagesCount, setPagesCount] = useState(0)


  useEffect(() => {
    axios
    .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/filters`, {
        method: 'GET',
        headers: {
            'X-API-KEY': `${apiKey}`,
            'Content-Type': 'application/json',
        },
    })
    .then(resp => {
      setGenresArr(resp.data.genres)
      setCountriesArr(resp.data.countries)
    })
  },[])

  function onChangeGenre(e) {
    setGenre(e.currentTarget.value)
  }

  function onChangeCountry(e) {
    setCountry(e.currentTarget.value)
  }

  function onChangeYearFrom(e) {
    setYearFrom(e.currentTarget.value)
  }

  function onChangeYearTo(e) {
    setYearTo(e.currentTarget.value)
  }

  function onChangeRatingFrom(e) {
    setRatingFrom(e.currentTarget.value)
  }

  function onChangeRatingTo(e) {
    setRatingTo(e.currentTarget.value)
  }

  // useEffect(() => {
  //   const genreId = genresArr.filter(e => e.genre === genre)[0].id 
  //   const countriesId = countriesArr.filter(e => e.country.toLowerCase() === country.toLowerCase())[0].id
  //   axios
  //   .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films?${(genreId !== 25) ? `genres=${genreId}` : ''}${(countriesId !== 54) ? `&countries=${countriesId}` : ''}${yearFrom && `&yearFrom=${yearFrom}`}${ratingFrom && `&ratingFrom=${ratingFrom}`}${ratingTo && `&ratingTo=${ratingTo}`}${value && `&keyword=${value}`}${yearTo && `&yearTo=${yearTo}&page=${page}`}`, {
  //       method: 'GET',
  //       headers: {
  //           'X-API-KEY': `${apiKey}`,
  //           'Content-Type': 'application/json',
  //       },
  //   })
  //   .then(resp => {
  //     setFilmsAfterFilters(resp.data.items)
  //     setIsLoading(false)
  //     console.log(resp)
  //     setPagesCount(resp.data.totalPages)
  //   })
  // }, [countriesArr, country, genre, genresArr, page, ratingFrom, ratingTo, setPage, value, yearFrom, yearTo])



  function onSearchWithFilters() {

    const genreId = genresArr.filter(e => e.genre === genre)[0].id 
    const countriesId = countriesArr.filter(e => e.country.toLowerCase() === country.toLowerCase())[0].id

    setIsLoading(true)
    axios
    .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films?${(genreId !== 25) ? `genres=${genreId}` : ''}${(countriesId !== 54) ? `&countries=${countriesId}` : ''}${yearFrom && `&yearFrom=${yearFrom}`}${ratingFrom && `&ratingFrom=${ratingFrom}`}${ratingTo && `&ratingTo=${ratingTo}`}${value && `&keyword=${value}`}${yearTo && `&yearTo=${yearTo}&page=${page}`}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': `${apiKey}`,
            'Content-Type': 'application/json',
        },
    })
    .then(resp => {
      setFilmsAfterFilters(resp.data.items)
      setIsLoading(false)
      console.log(resp)
      setPagesCount(resp.data.totalPages)
    })
  }

  function onChangeInput(e) {
    dispatch(onChangeValue(e.currentTarget.value))
  }

  return (
    <div className={styles.wrapper}>
      <form action="#" className={styles.form}>
        <h1 className={styles.title}>?????????? ?????????? ???? ????????!</h1>
        <input type="text" placeholder='?????? ???????????? ????????????????????? ?????????? ???????????????? ????????????!' className={styles.searchInput} style={{'min-width': '900px', 'min-height': '65px'}} value={value} onChange={(e) => onChangeInput(e)} />
      </form>
      <div className={styles.filters}>
        
        <div className={styles.filtersGroup}>
          <form action="#" className={styles.inputGroup}>
            <input type='text' placeholder="?????????????? ????????" className={styles.input} value={genre} onChange={e => onChangeGenre(e)} />
            <input type='text' placeholder="?????????????? ????????????" className={styles.input} value={country} onChange={e => onChangeCountry(e)} />
          </form>
          <form action="#" className={styles.inputGroup}>
            <input type="text" name="" id="" placeholder='???????????? ??...' className={styles.input} value={yearFrom} style={{'margin-right': "10px"}} onChange={e => onChangeYearFrom(e)} />
            <p> - </p>
            <input type="text" name="" id="" placeholder='???????????? ????...' className={styles.input} style={{'margin-left': "10px"}} onChange={e => onChangeYearTo(e)} />
          </form>
          <form action="#" className={styles.inputGroup}>
            <input type='text' placeholder="?????????????? ????..." className={styles.input} style={{'margin-right': "10px"}} value={ratingFrom} onChange={e => onChangeRatingFrom(e)} />
            <p> - </p>
            <input type='text' placeholder="?????????????? ????..." className={styles.input} style={{'margin-left': "10px"}} value={ratingTo} onChange={e => onChangeRatingTo(e)} />
          </form>
        </div>
        {
          isLoading ? <Button variant="primary" className={styles.button + ' ' + styles.withFiltersButton} disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button> : <button onClick={onSearchWithFilters} className={styles.button + ' ' + styles.withFiltersButton}>?????????? ???? ????????????????</button>
        }      
      </div>
      
      <ul className={styles.films}>
        {filmsAfterFilters.map(film => {
          return <li className={styles.film}>
          <CardItem 
            film={film}
            name={film.nameRu} 
            year={film.year} 
            poster={film.posterUrlPreview} 
            filmId={film.kinopoiskId} 
            rating={film.ratingKinopoisk}
          />
        </li>
        })}
      </ul>
    </div>
  )
}

export default Catalog