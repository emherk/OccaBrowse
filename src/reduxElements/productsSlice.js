import {createSlice} from '@reduxjs/toolkit'

/**
 * Create the slice of state for the products
 */
export const productsSlice = createSlice({
    name: 'products',
    initialState: {products: []},

    reducers:{
        addProducts: (state, action) => {
            // Check if the items are already contained
            if(action.payload !== undefined) {
                const filteredPayload = action.payload.filter(product => !state.products.includes(product));
                state.products.push(...filteredPayload);
            }
        }
    }
})

export default productsSlice.reducer
export const {addProducts} = productsSlice.actions