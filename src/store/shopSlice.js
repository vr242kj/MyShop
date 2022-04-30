import { createSlice } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        products: [],
        productByID: []
    },
    reducers: {
        setProductsState: (state, data) => {
            state.products = data.payload;
        },
        getItemByID: (state, id) => {
            state.productByID = state.products.filter(product => product.id == id.payload)[0];
        }
    },
})

export const { setProductsState, getItemByID } = shopSlice.actions

export default shopSlice.reducer