import React from 'react';
import { Link } from 'react-router-dom';
import { CartFill, HeartFill } from 'react-bootstrap-icons';
import '../../../styles/product.css';
import { IMAGE_URL } from '../../../utils/config';

function ProductCard(props) {
  const { price, picture, name } = props;
  return (
    <>
      <div className="col-6 col-md-4 col-lg-3 px-0">
        <div className="shopmain-product-card">
          <div className="shopmain-product-img-box position-relative">
            <Link to="#/">
              <img
                className="shopmain-cover-fit"
                src={`${IMAGE_URL}/img/product-img/${picture}`}
                alt={name}
                title={name}
              />
            </Link>
            <button className="position-absolute shopmain-heart-icon-bkg position-relative">
              <HeartFill className="position-absolute shopmain-heart-icon" />
            </button>
            <button className="position-absolute shopmain-cart-icon-bkg position-relative">
              <CartFill className="position-absolute shopmain-cart-icon" />
            </button>
          </div>
          <Link to="#/" className="text-left shopmain-product-name">
            {name}
          </Link>
          <p className="text-right shopmain-product-price">NT ${price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
