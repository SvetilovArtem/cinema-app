import React from 'react'
import styles from './CommentForm.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addComment, onChangeCommentValue } from '../../../../redux/slices/commentsSlice';

const CommentForm = () => {

    const dispatch = useDispatch()
    const commentValue = useSelector(state => state.commentsReducer.commentValue)
    const aboutFilm = useSelector(state => state.commentsReducer.aboutFilm)

    console.log(aboutFilm)

    const commentObj = {
      id: aboutFilm.kinopoiskId,
      comment: commentValue,
      film: aboutFilm.nameRu,
    }

    function addCommentItem() {
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