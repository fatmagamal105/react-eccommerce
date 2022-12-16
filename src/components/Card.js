import React from "react";
import "./Card.css"
export default function Card(props) {
  const { product } = props;
  return (
    <div className="card">
      <img src={product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          {product.description}
        </p>
        <p className="card-text">
          Category: {product.category}
        </p>
        <p className="card-text">
          Price: {product.price} $
        </p>
      </div>
    </div>
  );
}
