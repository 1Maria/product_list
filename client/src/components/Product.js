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
    <span>{name}</span><br/><br/>
  </div>
)

export default Product;
