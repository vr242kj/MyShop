import React from "react";
import {ListGroup, Badge} from "react-bootstrap";
import {useDispatch} from 'react-redux'
import {selectProduct, addQuantityOfItem, removeQuantityOfItem} from '../store/shopSlice'

function CartItem({product}) {
    const dispatch = useDispatch()

    return <ListGroup.Item><span>{product.title} {product.category} ({product.price}$)</span>
        <div style={{float: "right", width: "200px"}}>
            <button className="button-cart" onClick={() => dispatch(addQuantityOfItem(product.id))}>+</button>
            <span style={{margin: "10px"}} className="cart-list-item__count">{product.quantity}</span>
            <button className="button-cart" onClick={() => dispatch(removeQuantityOfItem(product.id))}>-</button>
            <Badge style={{margin: "10px"}} className={'ml-4'} bg="danger"
                   onClick={() => dispatch(selectProduct(product.id))}>Remove</Badge>
        </div>
    </ListGroup.Item>
}

export default CartItem;