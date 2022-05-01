import React, {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";
import CartItem from "./CartItem";
import {useSelector} from 'react-redux'

function Cart() {
    const [total, setTotal] = useState(0);
    const products = useSelector(state => state.shop.products.filter(prod => prod.selected));

    useEffect(() => {
        setTotal(products.reduce((acc, el) => acc + (el.price * el.quantity), 0));
    }, [products])

    return <>
        {products.length ? <ListGroup className={'mb-3'}>
            <ListGroup.Item as="li" active>
                Shopping Cart
            </ListGroup.Item>
            {products.map(product => <CartItem key={product.id} product={product}/>)}
            <h2>Total:</h2>
            <p><b className={'text-danger'}>{total.toFixed(2)}$</b></p>
        </ListGroup> : ''}
    </>
}

export default Cart;