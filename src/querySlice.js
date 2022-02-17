import {createSlice} from '@reduxjs/toolkit'

/**
 * Create the slice of state for the query
 */
export const querySlice = createSlice({
    name: 'query',
    initialState:{query: null},

    reducers:{
        search: (state, action) => {
            state.query = action.payload;
        }
    },
})

export default querySlice.reducer
export const {search} = querySlice.actions
