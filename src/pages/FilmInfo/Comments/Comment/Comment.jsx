import React from 'react'
import styles from './Comment.module.scss'


const Comment = ({comment}) => {
  
  return (
        
    <div className={styles.comment}>
      <div className={styles.userBlock}>
        <img src={'img/user.png'} alt='' />
        <span>User</span>
      </div>
      
      <span className={styles.text}>{comment.comment}</span>
    </div>
  )
}

export default Comment