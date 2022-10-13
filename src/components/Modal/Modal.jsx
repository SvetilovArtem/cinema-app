import React from 'react'
import styles from './Modal.module.scss'



const Modal = ({setModal}) => {

  return (
    <div className={styles.modal}>
        <img className={styles.image} src='https://papik.pro/uploads/posts/2021-12/thumbs/1639475073_12-papik-pro-p-zhabka-risunok-12.png'></img>
        <h1>Привет!</h1>
        <p>Меня зовут Фрогги. Надеюсь, что ты найдешь фильм по вкусу.</p>
        <p>Если что воспользуйся поиском.</p>
        <button onClick={() => setModal(false)}>Найти кино</button>
    </div>
  )
}

export default Modal