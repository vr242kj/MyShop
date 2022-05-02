import React, {useEffect} from "react";
import {Container, Form, Row} from 'react-bootstrap';
import Product from '../components/Product';
import axios from "axios";
import DATA from "../store/Data";
import SearchProduct from "./SearchProduct";
import Cart from "./Cart";

import {useSelector, useDispatch} from 'react-redux'
import {setProductsState, setAllCategoryForFilter, categorySearch} from '../store/shopSlice'

function Shop() {
    const products = useSelector(state => state.shop.products);
    const categoryForBoxFilter = useSelector(state => state.shop.categoryForBoxFilter);
    const filteredProducts = useSelector(state => state.shop.filteredProducts);
    const isProductFound = useSelector(state => state.shop.isProductFound);
    const dispatch = useDispatch()

    useEffect(() => {
        axios('https://restcountries.com/v2/all').then(data => {
            dispatch(setProductsState(DATA));
        })
    }, [])

    useEffect(() => {
        dispatch(setAllCategoryForFilter());
    }, [products])

    return <>
        <h1>Shop </h1>
        <Form>
            {categoryForBoxFilter.map((type) => (
                <div key={`default-${type}`} className="mb-3">
                    <Form.Check onClick={() => dispatch(categorySearch(type))}
                                type='checkbox'
                                id={`default-${type}`}
                                label={type}
                    />
                </div>))}
        </Form>
        <SearchProduct/>
        <Cart/>
        <Container>
            <Row>
                {isProductFound ? (filteredProducts.length ? filteredProducts : products).map(product =>
                    <Product
                        key={product.id}
                        product={product}/>) : <span>We do not have this product</span>
                }
            </Row>
        </Container>
    </>
}

export default Shop;