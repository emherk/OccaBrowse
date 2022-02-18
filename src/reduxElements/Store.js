import { configureStore } from '@reduxjs/toolkit'
import queryReducer from './querySlice.js'
import productsReducer from './productsSlice.js'

/**
 * The redux store.
 */
export default configureStore({
  reducer: {
    queryReducer,
    productsReducer
  },
})