import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    posterUrl: '',
    nameRu: '',
    video: [],
    filmObj: {},
    videoIsOpen: false,
    budget: 0,
    budgetIsOpen: false,
    images: [],
    actors: [],

}

export const filmInfoSlice = createSlice({
  name: 'filmInfo',
  initialState,
  reducers: {
    setPosterUrl: (state, action) => {
        state.posterUrl = action.payload
    },
    setNameRu: (state, action) => {
        state.nameRu = action.payload
    },
    setVideo: (state, action) => {
        state.video = action.payload.map(e => e.url.includes('youtu') ? e.url : null)
    },
    setFilmObj: (state, action) => {
      state.filmObj = action.payload
    },
    setVideoIsOpen: (state, action) => {
      state.videoIsOpen = action.payload
    },
    setBudget: (state, action) => {
      state.budget = action.payload.map(e => {
        if(e.type === 'BUDGET') {
          return e.amount
        }
      })
    },
    setBudgetIsOpen: (state, action) => {
      state.budgetIsOpen = action.payload
    },
    setImages: (state, action) => {
      state.images = action.payload.splice(5).map(e => e.imageUrl)
    },
    setActors: (state, action) => {
      state.actors = action.payload.splice(0,8).map(e => e.nameRu)
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  setPosterUrl, 
  setNameRu, 
  setVideo, 
  setFilmObj, 
  setBudget, 
  setBudgetIsOpen, 
  setVideoIsOpen, 
  setImages,
  setActors } = filmInfoSlice.actions

export default filmInfoSlice.reducer