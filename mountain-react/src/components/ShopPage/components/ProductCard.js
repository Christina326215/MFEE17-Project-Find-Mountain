import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartFill, HeartFill } from 'react-bootstrap-icons';
import '../../../styles/product.css';
import { IMAGE_URL } from '../../../utils/config';
import $ from 'jquery';
import Swal from 'sweetalert2';

function ProductCard(props) {
  const { productId, price, picture, name } = props;
  const [likeList, setLikeList] = useState([1,2]);
  // console.log(likeList);
  let updateList = [];
  const heartIconClick = function (e) {
    // console.log(e.currentTarget);
    $(e.currentTarget).toggleClass('shopmain-heart-icon-bkg-click');
    // setLikeList([...likeList, productId]);
    // setLikeList(likeList.push(productId));
    console.log(productId);
    var newLikeList = [...likeList, productId];
    console.log("lL",newLikeList);
    //3.設定回原本的物件
    setLikeList(newLikeList);
  };

  const cartIconClick = function () {
    //display none -> block
    // console.log('hi');
    let cartDisplay = $('.cart-num').css('display');
    if (cartDisplay === 'none') {
      $('.cart-num').css('display', 'block');
    }
    // alert("已將商品加入購物車！");
    Swal.fire({
      icon: 'success',
      title: '已將商品加入購物車！',
      showConfirmButton: false,
      timer: 1500,
    });
    //cart-num ++
    let cartNum = parseInt($('.cart-num').text());
    //限制一次加進購物車數量
    if (cartNum >= 10) {
      Swal.fire({
        icon: 'error',
        title: '一次最多只能放入10樣商品喔',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      cartNum++;
      $('.cart-num').text(cartNum);
    }
  };
  return (
    <>
      <div className="col-6 col-md-4 col-lg-3 px-0 my-2">
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
            <button
              className="position-absolute shopmain-heart-icon-bkg position-relative"
              onClick={heartIconClick}
            >
              <HeartFill className="position-absolute shopmain-heart-icon" />
            </button>
            <button
              className="position-absolute shopmain-cart-icon-bkg position-relative"
              onClick={cartIconClick}
            >
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
