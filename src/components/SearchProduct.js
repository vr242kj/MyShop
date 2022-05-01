import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {searchProduct} from '../store/shopSlice'
import {useDispatch} from "react-redux";

function SearchProducts() {
    const dispatch = useDispatch()

    function onSubmit(e) {
        dispatch(searchProduct(e.target.value))
    }

    return <Field name="search" component="input" type="text" onKeyUp={onSubmit}/>
}

export default reduxForm({
    form: 'my-from'
})(SearchProducts)