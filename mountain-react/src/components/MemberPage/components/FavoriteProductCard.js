import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../../utils/config';
//====== below icon star ======//
import { BsXSquareFill } from 'react-icons/bs';
import { Cart } from 'react-bootstrap-icons';
//====== below icon end ======//
import { useAuth } from '../../../context/auth'; // 取得setCartChange狀態

function FavoriteProductCard(props) {
  const {
    productPic,
    productBrand,
    productName,
    productPrice,
    productId,
    productType,
  } = props;
  const { setCartChange } = useAuth(); // 取得購物車數字狀態

  return (
    <>
      <tr>
        <td className="member-product-article-product-picture-img-wrapper">
          <div className="member-product-article-product-picture-img-box">
            <Link to={`/shop/product-detail/${productId}`}>
              <img
                src={`${IMAGE_URL}/img/product-img/${productPic}`}
                alt={productName}
                title={productName}
                className="member-product-article-product-picture-img"
              />
            </Link>
          </div>
        </td>
        <td className="align-middle">
          {productBrand}
          <br />
          {productName}
        </td>
        <td className="align-middle">NT ${productPrice.toLocaleString()}</td>
        <td className="align-middle">
          <button className="member-product-article-cart-icon btn btn-primary">
            <Cart size={20} />
          </button>
        </td>
        <td className="member-product-article-text-weight align-middle">
          <BsXSquareFill
            id={productId}
            className="member-product-article-cancel-icon"
            size={28}
            style={{ color: '#cc543a', cursor: 'pointer' }}
          />
        </td>
      </tr>
    </>
  );
}

export default FavoriteProductCard;
