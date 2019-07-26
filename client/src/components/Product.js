import React from 'react';

const Product = ({
  category,
  price,
  image,
  name
}) => (
  <div className="card">
    <img className="card-img-top" src={image} alt="object"/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">${price}</p>
      <p className="card-text">Category: {category}</p>
    </div>
  </div>
)

export default Product;
