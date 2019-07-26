import React from 'react';
import { Link } from 'react-router-dom';

const Paginate = ({ productsCount }) => {
  let pageCount = Math.ceil(productsCount / 9);

  return (
    <ul>
      { Array.apply(null, Array(pageCount || 1)).map((_, pageNum) => {
        return (<li key={pageNum}><Link to={"/"+parseInt(pageNum+1)}>{pageNum+1}</Link></li>)
      }) }
    </ul>
  )
}

export default Paginate;
