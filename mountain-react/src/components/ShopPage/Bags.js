import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Swal from 'sweetalert2';
import '../../styles/productbag.css';
import ProductCard from './components/ProductCard';
import { CartFill, HeartFill } from 'react-bootstrap-icons';
import bagPic1 from '../../img/product-img/bags-pic1.jpeg';
import bagPic2 from '../../img/product-img/bags-pic2.jpeg';
import bagPic3 from '../../img/product-img/bags-pic3.jpeg';
import bagPic4 from '../../img/product-img/bags-pic4.jpeg';
import bagPic5 from '../../img/product-img/bags-pic5.jpeg';
import bagPic6 from '../../img/product-img/bags-pic6.png';
import bagPic7 from '../../img/product-img/bags-pic7.jpeg';
import bagPic8 from '../../img/product-img/bags-pic8.jpeg';
import bagPic9 from '../../img/product-img/bags-pic9.jpeg';
//api s
import axios from 'axios';
import { shopURL } from '../../utils/config';
//api e

function Bags(props) {
  const [productData, setProductData] = useState([]);
  const { price, picture, name } = props;
  useEffect(() => {
    //api
    async function getProductData() {
      try {
        const productData = await axios.get(`${shopURL}/bags`);
        console.log(productData.data); //for check
        setProductData(productData.data);
        // console.log('p2', productData);
      } catch (e) {
        console.log(e);
      }
    }
    getProductData();
    $('.productbag-heart-icon-bkg').on('click', function () {
      $(this).toggleClass('productbag-heart-icon-bkg-click');
    });
    $('.productbag-cart-icon-bkg').on('click', () => {
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
    });
  }, []);
  return (
    <>
      <main>
        <div className="container">
          {/* <!-- =========search bar start========= --> */}
          <form className="form my-4">
            <div className="form-row justify-content-center">
              <input
                type="search"
                placeholder="搜尋"
                className="form-control search-bar col-5"
              />
            </div>
          </form>
          {/* <!-- =========search bar end========= --> */}
          {/* <!-- =========category bar start========= --> */}
          <div className="productbag-category-bar">
            <ul className="d-flex justify-content-center list-unstyled">
              <div className="row">
                <li className="col-3 px-0">
                  <Link to="/shop">商城首頁</Link>
                </li>
                <li className="col-3 px-0">
                  <Link to="/shop/bags" className="productbag-active">
                    機能背包
                  </Link>
                </li>
                <li className="col-3 px-0">
                  <Link to="#/">登山鞋</Link>
                </li>
                <li className="col-3 px-0">
                  <Link to="#/">衣服</Link>
                </li>
              </div>
            </ul>
          </div>
          {/* <!-- =========category bar end========= --> */}
          {/* <!-- =========product start========= --> */}
          <div>
            <div className="row productbag-product-list my-4">
              {productData.map((item, index) => {
                return (
                  <ProductCard
                    name={item.name}
                    price={item.price}
                    picture={item.pic}
                    key={item.id}
                  />
                );
              })}
            </div>
          </div>
          {/* <!-- =========product end========= --> */}
        </div>
      </main>
    </>
  );
}

export default Bags;
