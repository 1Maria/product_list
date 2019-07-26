import React from 'react';

const Price = ({handleChange}) => {

  return (
    <div>
      <label htmlFor="prices">Price</label>
      <select id="prices" onChange={handleChange}>
        <option value=""></option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  )
};

export default Price;
