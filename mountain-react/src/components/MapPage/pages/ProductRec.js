import React from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import $ from 'jquery';

//====== below modal star ======//
import Swal from 'sweetalert2';
//====== below modal end ======//

//====== below icon star ======//
import { HeartFill, CartFill } from 'react-bootstrap-icons';
//====== below icon end ======//

//====== below api connect tool star ======//
import { IMAGE_URL } from '../../../utils/config';
//====== below api connect tool end ======//

function ProductRec(props) {
  const { productData } = props;
  // console.log('productData:', productData); //for check

  const heartIcon = (e) => {
    $(e.currentTarget).toggleClass('mountain_heart-icon-bkg-click');
  };

  const cartIcon = () => {
    //display none -> block
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
      <div className="mountain_product_box">
        <div className="mountain_product_title">
          <h3 className="h2">推薦商品</h3>
        </div>
        <div className="mountain_product-list my-4">
          {productData.map((data) => (
            <div key={data.id} className="px-0">
              <div className="mountain_product-card">
                <div className="mountain_product-img-box position-relative">
                  {/* 產品照或許從後端抓 */}
                  <img
                    className="mountain_cover-fit"
                    src={`${IMAGE_URL}/img/product-img/${data.pic}`}
                    alt=""
                  />
                  {/* FIXME: 將產品加到收藏裡 & Link */}
                  <button
                    className="position-absolute mountain_heart-icon-bkg position-relative"
                    onClick={heartIcon}
                  >
                    <HeartFill className="position-absolute shopmain-heart-icon" />
                  </button>
                  {/* FIXME: 將產品加到購物車裡 & Link */}
                  <button
                    className="position-absolute mountain_cart-icon-bkg position-relative"
                    onClick={cartIcon}
                  >
                    <CartFill className="position-absolute mountain_cart-icon" />
                  </button>
                </div>
                {/* TODO:: Link將產品連到商品頁面 */}
                <Link to="#/" className="text-left mountain_product-name">
                  {data.brand}
                  <br />
                  {data.name}
                </Link>
                {/* 價錢從後端抓 */}
                <p className="text-left mountain_product-price">
                  NT ${data.price}
                </p>
              </div>
            </div>
          ))}

          <div className="mountain_downLowBear"></div>
          <div className="mountain_bearSpeak"></div>
        </div>
      </div>
    </>
  );
}

export default ProductRec;
