import React from "react";
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {selectProduct} from '../store/shopSlice'

function Product({product}) {
    const dispatch = useDispatch()

    return <Col xs={12} sm={6} md={4} lg={3}>
        <Card>
            <Card.Img variant="top" src={product.image}/>
            <Card.Body>
                <Link to={'product/' + product.id}>
                    <Card.Title>
                        {product.title}
                    </Card.Title>
                </Link>
                <Card.Text>
                    <b>Category: </b> {product.category} <br/>
                    Price: <b>{product.price}$</b>
                </Card.Text>
                {product.selected ?
                    <Button variant="danger" onClick={() => dispatch(selectProduct(product.id))}>Remove from
                        Cart</Button> :
                    <Button variant="success" onClick={() => dispatch(selectProduct(product.id))}>Add to Cart</Button>
                }
            </Card.Body>
        </Card>
    </Col>;
}

export default Product;