import React from "react";
import {ListGroup, Badge} from "react-bootstrap";

function CartItem({product, selectProduct, addQuantityOfItem, removeQuantityOfItem}) {
    return <ListGroup.Item><span>{product.title} {product.category} ({product.price}$)</span>
        <div style={{ float: "right",width: "200px"}}>
            <button className="button-cart" onClick={() => addQuantityOfItem(product.id, product.quantity)}>+</button>
            <span style={{margin: "10px"}} className="cart-list-item__count">{product.quantity}</span>
            <button className="button-cart" onClick={() => removeQuantityOfItem(product.id, product.quantity)}>-</button>
            <Badge style={{margin: "10px"}} className={'ml-4'} bg="danger"
                   onClick={() => selectProduct(product.id, false)}>Remove</Badge>
        </div>
    </ListGroup.Item>
}

export default CartItem;