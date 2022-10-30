import React from 'react'
import styles from './CommentForm.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addComment, onChangeCommentValue, setDate } from '../../../../redux/slices/commentsSlice';

const CommentForm = () => {

    const dispatch = useDispatch()
    const commentValue = useSelector(state => state.commentsReducer.commentValue)
    const aboutFilm = useSelector(state => state.commentsReducer.aboutFilm)
    const date = useSelector(state => state.commentsReducer.date)

    console.log(aboutFilm)

    const day = new Date().getDate()
    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    const hours = new Date().getHours()
    const mins = new Date().getMinutes()


    const commentObj = {
      id: aboutFilm.kinopoiskId,
      comment: commentValue,
      film: aboutFilm.nameRu,
      date: date
    }

    function addCommentItem() {
      dispatch(setDate(`${hours}:${mins} ${day}.${month}.${year}`))
      dispatch(addComment(commentObj))
    }
  return (
    <form action="#">
        <textarea 
            type="text" 
            placeholder={'Введите комментарий...'} 
            className={styles.textarea} 
            value={commentValue}
            onChange={(e) => {dispatch(onChangeCommentValue(e.currentTarget.value))}}
        />
        <div onClick={() => addCommentItem()} className={styles.button}> + Добавить</div>
    </form>
  )
}

export default CommentForm