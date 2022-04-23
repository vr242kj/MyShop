import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Card} from "react-bootstrap";
import DATA from "../store/Data";

function AboutProduct() {
    let {id} = useParams();
    const [chosenProduct, setChosenProduct] = useState([]);

    useEffect(() => {
        setChosenProduct(DATA.filter(product => product.id == id)[0]);
    }, [id])

    return  <div>
        <>{chosenProduct && <Card >
            <Card.Img variant="top" src={chosenProduct.image} style={{width: "500px"}}/>
            <Card.Body>
                <Card.Title>{chosenProduct.category} {chosenProduct.title}</Card.Title>
                <Card.Text>
                    Price: <b>{chosenProduct.price}$</b>
                </Card.Text>
            </Card.Body>
        </Card>}
        </>
    </div>
}

export default AboutProduct;

