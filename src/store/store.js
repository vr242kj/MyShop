import {configureStore} from '@reduxjs/toolkit'
import shopReducer from './shopSlice'
import {reducer as formReducer} from 'redux-form';

export default configureStore({
    reducer: {
        shop: shopReducer,
        form: formReducer
    }
})