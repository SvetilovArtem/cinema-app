import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  commentValue: '',
  commentsList: [],
  aboutFilm: {},
  date: ''
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
    setDate: (state, action) => {
      state.date = action.payload
    },
    addComment: (state, action) => {
      state.commentsList.push({
        id: action.payload.id, 
        comment: action.payload.comment, 
        film: action.payload.film,
        date: action.payload.date
      })
      state.commentValue = ''
    },

  },
})

// Action creators are generated for each case reducer function
export const { onChangeCommentValue, addComment, setAboutFilm, setDate } = commentsSlice.actions

export default commentsSlice.reducer