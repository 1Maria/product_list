import React from 'react';
import { Link } from 'react-router-dom';

const Paginate = ({ productsCount }) => {
  const pageCount = productsCount / 9;
  return (
    <ul>
      { Array.apply(null, Array(pageCount)).map((_, pageNum) => {
        return (<li key={pageNum}><Link to={"/"+parseInt(pageNum+1)}>{pageNum+1}</Link></li>)
      }) }
    </ul>
  )
}

export default Paginate;
