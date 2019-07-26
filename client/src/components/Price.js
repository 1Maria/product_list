import React from 'react';

const Price = ({handleChange}) => {

  return (
    <div className="form-group">
      <label htmlFor="prices">sort by price:</label>
      <select className="form-control" id="prices" onChange={handleChange}>
        <option value=""></option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  )
};

export default Price;
