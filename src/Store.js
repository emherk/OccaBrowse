import { configureStore } from '@reduxjs/toolkit'
import queryReducer from './querySlice.js'

export default configureStore({
  reducer: {
    queryReducer,
  },
})