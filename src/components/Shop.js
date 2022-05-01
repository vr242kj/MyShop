import React, {useEffect, useState} from "react";
import {Container, Form, Row} from 'react-bootstrap';
import Product from '../components/Product';
import axios from "axios";
import DATA from "../store/Data";
import SearchProduct from "./SearchProduct";
import Cart from "./Cart";

import { useSelector, useDispatch } from 'react-redux'
import { setProductsState } from '../store/shopSlice'

function Shop() {
    const [categoryForBoxFilter, setCategoryForBoxFilter] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isProductFound, setIsProductFound] = useState(true);
    const [categoryForSearch, setCategoryForSearch] = useState([]);
    const products = useSelector(state => state.shop.products);
    const dispatch = useDispatch()

    useEffect(() => {
        axios('https://restcountries.com/v2/all').then(data => {
            dispatch(setProductsState(DATA));
        })
    },[])

    useEffect(() => {
        setCategoryForBoxFilter(products.reduce((accumulator , product) => {
            if (!accumulator.includes(product.category)) {
                accumulator.push(product.category)
            }
            return accumulator
        }, []))
    }, [products])

    function searchProduct(e){
        let search = e.currentTarget.value.toLowerCase();
        let foundProduct = products.filter(product => product.title.toLowerCase().includes(search) || product.category.toLowerCase().includes(search));
        setFilteredProducts(foundProduct);
        if(!foundProduct.length){
            setIsProductFound(false);
            return;
        }
        setIsProductFound(true);
    }

    // function selectProduct(id, value) {
    //     setProductsState(products.map(product => {
    //         if (product.id === id) {
    //             return {...product, selected: value, quantity: 1};
    //         }
    //         return {...product};
    //     }))
    // }

    function addQuantityOfItem(id, quantity) {
        setProductsState(products.map(product => {
            if (product.id === id) {
                return {...product, quantity: quantity + 1};
            }
            return {...product};
        }))
    }

    function removeQuantityOfItem(id, quantity) {
        if (quantity > 1) {
            setProductsState(products.map(product => {
                if (product.id === id) {
                    return {...product, quantity: quantity - 1};
                }
                return {...product};
            }))
        }
    }

    function categorySearchBox(e) {
        if (categoryForSearch.includes(e)) {
            let newCategoryForSearch = categoryForSearch.filter(category => category !== e)
            setCategoryForSearch(newCategoryForSearch);
            setFilteredProducts(products.filter(prod => newCategoryForSearch.includes(prod.category)));
            return;
        }
        categoryForSearch.push(e)
        setCategoryForSearch(categoryForSearch)
        setFilteredProducts(products.filter(prod => categoryForSearch.includes(prod.category)));

    }

    return <>
        <h1>Shop </h1>
        <Form >
            {categoryForBoxFilter.map((type) => (
                <div key={`default-${type}`} className="mb-3">
                    <Form.Check onClick={() => categorySearchBox(type)}
                                type= 'checkbox'
                                id={`default-${type}`}
                                label={type}
                    />
                </div>))}
        </Form>
        <SearchProduct searchProduct={searchProduct}/>
        <Cart //selectProduct={selectProduct}
              addQuantityOfItem={addQuantityOfItem} removeQuantityOfItem={removeQuantityOfItem}
        />
        <Container>
            <Row>
                {isProductFound ? (filteredProducts.length ? filteredProducts : products).map(product =>
                    <Product
                        //selectProduct={selectProduct}
                        key={product.id}
                        product={product}/>) : <span>We do not have this product</span>
                }
            </Row>
        </Container>
    </>
}

export default Shop;