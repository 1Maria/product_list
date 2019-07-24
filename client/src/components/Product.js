import React from 'react';

const Product = ({
  category,
  price,
  image,
  name
}) => (
  <div>
    <span>{category}</span><br/>
    <span>{price}</span><br/>
    <span>{image}</span><br/>
    <span>{name}</span>
  </div>
)

export default Product;
