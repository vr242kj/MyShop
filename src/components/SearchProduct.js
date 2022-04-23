import React from "react";
import {Form} from "react-bootstrap";

function SearchProduct({searchProduct}) {
    return <Form.Control
        className={'mb-3'}
        placeholder={'Search'}
        type="text"
        onKeyUp={searchProduct}
        aria-describedby="passwordHelpBlock"
    />
}

export default SearchProduct;