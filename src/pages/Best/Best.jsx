import React from 'react'
import { useSelector } from 'react-redux'

const Best = () => {
    const bestFilms = useSelector(state => state.bestFilmsReducer.bestFilms)
  return (
    <ul>
        {
            bestFilms.map(film => <li>{film.nameRu}</li>)
        }
    </ul>
  )
}

export default Best