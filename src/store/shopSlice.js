import {createSlice} from '@reduxjs/toolkit'

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        products: [],
        productByID: [],
        value: false,
        quantity: 1,
        categoryForBoxFilter: [],
        categoryForSearch: [],
        filteredProducts: [],
        isProductFound: true
    },
    reducers: {
        setProductsState: (state, data) => {
            state.products = data.payload;
        },
        getItemByID: (state, id) => {
            state.productByID = state.products.filter(product => product.id == id.payload)[0];
        },
        selectProduct: (state, id) => {
            function changeValue(select) {
                if (!select)
                    return true;
                return false;
            }

            state.products = state.products.map(product => {
                if (product.id === id.payload) {
                    return {...product, selected: changeValue(product.selected), quantity: 1};
                }
                return {...product};
            })
        },
        addQuantityOfItem: (state, id) => {
            state.products = state.products.map(product => {
                if (product.id === id.payload) {
                    return {...product, quantity: product.quantity + 1};
                }
                return {...product};
            })
        },
        removeQuantityOfItem: (state, id) => {
            state.products = state.products.map(product => {
                if (product.id === id.payload && product.quantity > 1) {
                    return {...product, quantity: product.quantity - 1};
                }
                return {...product};
            })
        },
        setAllCategoryForFilter: state => {
            state.categoryForBoxFilter = state.products.reduce((accumulator, product) => {
                if (!accumulator.includes(product.category)) {
                    accumulator.push(product.category)
                }
                return accumulator
            }, [])
        },
        categorySearch: (state, element) => {
            if (state.categoryForSearch.includes(element.payload)) {
                state.categoryForSearch = state.categoryForSearch.filter(category => category !== element.payload)
                state.filteredProducts = state.products.filter(prod => state.categoryForSearch.includes(prod.category))
                return;
            }
            state.categoryForSearch.push(element.payload)
            state.filteredProducts = state.products.filter(prod => state.categoryForSearch.includes(prod.category))
        },
        searchProduct: (state, data) => {
            let search = data.payload.toLowerCase();
            let foundProduct = state.products.filter(product => product.title.toLowerCase().includes(search) || product.category.toLowerCase().includes(search));
            state.filteredProducts = foundProduct;
            if (!foundProduct.length) {
                state.isProductFound = false;
                return;
            }
            state.isProductFound = true;
        }
    }
})

export const {
    setProductsState, getItemByID, selectProduct, addQuantityOfItem,
    removeQuantityOfItem, setAllCategoryForFilter, categorySearch, searchProduct
} = shopSlice.actions

export default shopSlice.reducer