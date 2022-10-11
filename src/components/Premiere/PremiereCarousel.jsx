import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setChoiseFilm } from '../../redux/slices/catalogSlice';
import styles from './PremiereCarousel.module.scss'


const PremiereCarousel = ({premieres}) => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch()
  console.log(premieres)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <div className={styles.wrapperBlock} >
        <Carousel activeIndex={index} onSelect={handleSelect} className={styles.wrapper}>

          {premieres.map(e => {
            return (
              <Carousel.Item>
            <NavLink to={'/filmInfo'}>
              <img
                className="d-block w-100"
                src={e.posterUrlPreview}
                alt="First slide"
                onClick={() => dispatch(setChoiseFilm(e.kinopoiskId))}
              />
            </NavLink>    
            
            <Carousel.Caption>
              <h3>{e.nameRu}</h3>
              <p>{e.premiereRu}</p>
              <p>{e.duration} мин.</p>
            </Carousel.Caption>
          </Carousel.Item>
            )
          })}

        </Carousel>
      </div>

   

  )
}

export default PremiereCarousel