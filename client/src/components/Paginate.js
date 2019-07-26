import React from 'react';
import { Link } from 'react-router-dom';

const Paginate = ({ productsCount }) => {
  let pageCount = Math.ceil(productsCount / 9);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        { Array.apply(null, Array(pageCount || 1)).map((_, pageNum) => {
          return (<li className="page-item" key={pageNum}><Link className="page-link" to={"/"+parseInt(pageNum+1)}>{pageNum+1}</Link></li>)
        }) }
      </ul>
    </nav>
  )
}

export default Paginate;
