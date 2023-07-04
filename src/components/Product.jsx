import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

export const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  if (status === StatusCode.LOADING) {
    return <p>Loading</p>;
  }

  const cards = products?.map((product) => (
    <div
      className="col-md-3"
      style={{ marginBottom: "10px" }}
      key={product?.id}
    >
      <Card className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product?.image}
            style={{ width: "100px", height: "130px", objectFit: "cover" }}
          />
        </div>

        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>INR: {product?.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {" "}
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <h1>Products Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};
