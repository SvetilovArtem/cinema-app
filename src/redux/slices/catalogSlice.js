import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  films: [],
  choiseFilm: '',
  selectFilmName: ''
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    onChangeValue: (state, action) => {
        state.value  = action.payload
    },
    setFilms: (state, action) => {
        state.films = action.payload
    },
    setChoiseFilm: (state, action) => {
        state.choiseFilm = action.payload
    },
    setSelectFilmName: (state, action) => {
      state.selectFilmName = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { onChangeValue, setFilms, setChoiseFilm, setSelectFilmName } = catalogSlice.actions

export default catalogSlice.reducer