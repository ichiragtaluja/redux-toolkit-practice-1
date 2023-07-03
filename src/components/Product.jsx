import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";


export const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")?.then((data) =>
      data.json()?.then((response) => setProducts(response))
    );
  }, []);

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card className="h-100" key={product?.id}>
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
          <Button variant="primary">Add to Cart</Button>
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
