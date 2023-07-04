import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

export const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeFromCart = (id) => dispatch(remove(id));

  const cards = products.map((product) => (
    <div
      className="col-md-12"
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
          <Button variant="primary" onClick={() => removeFromCart(product?.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <div>Cart</div>
      {cards}
    </>
  );
};
