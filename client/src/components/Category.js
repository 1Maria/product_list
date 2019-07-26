import React from 'react';

const Category = ({handleChange}) => {
  const categories = [
    "Music",
    "Kids",
    "Tools",
    "Outdoors",
    "Garden",
    "Sports",
    "Books",
    "Shoes",
    "Games",
    "Industrial",
    "Health",
    "Automotive",
    "Baby",
    "Clothing",
    "Grocery",
    "Electronics",
    "Home",
    "Jewelery",
    "Beauty",
    "Movies",
    "Toys",
    "Computers"
  ];
  return (
    <div className="form-group">
      <label htmlFor="categories">filter by category:</label>
      <select className="form-control" id="categories" onChange={handleChange}>
        <option value=""></option>
        {categories.map((c,i) => <option key={i} value={c}>{c}</option>)}
      </select>
    </div>
  )
};

export default Category;
