import React from 'react'
import { useSelector } from 'react-redux'
import Comment from './Comment/Comment'
import CommentForm from './CommentForm/CommentForm'
import styles from './Comments.module.scss'

const Comments = () => {
  const commentsList = useSelector(state => state.commentsReducer.commentsList)
  const filmObj = useSelector(state => state.filmInfoReducer.filmObj)
  console.log(commentsList)

  const commentsListFilter = commentsList.filter(comment => comment.id === filmObj.kinopoiskId)
  return (
    <div className={styles.comments}>
        <h2>Комментарии</h2>
        <CommentForm />
        <ul>
          {commentsListFilter.map(comment => {
            return (
             <li><Comment comment={comment} /></li> 
            )
          })}
        </ul>
    </div>

  )
}

export default Comments