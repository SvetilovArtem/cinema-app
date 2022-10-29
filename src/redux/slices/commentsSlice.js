import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  commentValue: '',
  commentsList: [],
  aboutFilm: {}
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    onChangeCommentValue: (state, action) => {
        state.commentValue = action.payload
    },
    setAboutFilm: (state, action) => {
      state.aboutFilm = action.payload
    },
    addComment: (state, action) => {
      state.commentsList.push({id: action.payload.id, comment: action.payload.comment, film: action.payload.film})
      state.commentValue = ''
    }
  },
})

// Action creators are generated for each case reducer function
export const { onChangeCommentValue, addComment, setAboutFilm } = commentsSlice.actions

export default commentsSlice.reducer