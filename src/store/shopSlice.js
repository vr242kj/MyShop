import { createSlice } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        products: [],
        productByID: [],
        value: false
    },
    reducers: {
        setProductsState: (state, data) => {
            state.products = data.payload;
        },
        getItemByID: (state, id) => {
            state.productByID = state.products.filter(product => product.id == id.payload)[0];
        },
        selectProduct: (state, id) => {
            state.products = state.products.map(product => {
                if (product.id === id.payload) {
                    state.value ? state.value = false : state.value = true
                    return {...product, selected: state.value, quantity: 1};
                }
                return {...product};
            })
            //console.log(state.products)
        }
    },
})

export const { setProductsState, getItemByID, selectProduct } = shopSlice.actions

export default shopSlice.reducer