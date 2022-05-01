import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Card} from "react-bootstrap";
import {useSelector, useDispatch} from 'react-redux'
import {getItemByID} from '../store/shopSlice'

function AboutProduct() {
    const productByID = useSelector(state => state.shop.productByID);
    const dispatch = useDispatch()
    let {id} = useParams();

    useEffect(() => {
        dispatch(getItemByID(id));
    }, [id])

    return <>{productByID && <Card>
        <Card.Img variant="top" src={productByID.image} style={{width: "500px"}}/>
        <Card.Body>
            <Card.Title>{productByID.category} {productByID.title}</Card.Title>
            <Card.Text>
                Price: <b>{productByID.price}$</b>
            </Card.Text>
        </Card.Body>
    </Card>}
    </>
}

export default AboutProduct;

