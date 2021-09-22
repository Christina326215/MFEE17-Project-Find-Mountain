import React from 'react';
import { Link } from 'react-router-dom';

function ProductHistoryItem(props) {
  return (
    <>
      <figure className="productdetail-history-img-box">
        <Link to="shop/product-detail">
          <img src="" alt="" className="productdetail-cover-fit" />
        </Link>
      </figure>
    </>
  );
}

export default ProductHistoryItem;
