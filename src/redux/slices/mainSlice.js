import { createSlice } from '@reduxjs/toolkit'

const monthes = [
    {id: 0, name: 'JANUARY'}, 
    {id: 1, name: 'FEBRUARY'}, 
    {id: 2, name: 'MARCH'}, 
    {id: 3, name: 'APRIL'}, 
    {id: 4, name: 'MAY'}, 
    {id: 5, name: 'JUNE'}, 
    {id: 6, name: 'JULY'}, 
    {id: 7, name: 'AUGUST'}, 
    {id: 8, name: 'SEPTEMBER'}, 
    {id: 9, name: 'OCTOBER'}, 
    {id: 10, name: 'NOVEMBER'}, 
    {id: 11, name: 'DECEMBER'}
]

const initialState = {
    yearPremiere: 0,
    monthPremiere: '',
    premieres: []
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setYearPremiere: (state, action) => {
        state.yearPremiere = new Date().getFullYear()
    },
    setMonthPremiere: (state, action) => {
        state.monthPremiere = monthes.filter(e => e.id === new Date().getMonth())[0].name
    },
    setPremieres: (state, action) => {
      state.premieres = action.payload.splice(0, 10)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMonthPremiere, setYearPremiere, setPremieres } = mainSlice.actions

export default mainSlice.reducer