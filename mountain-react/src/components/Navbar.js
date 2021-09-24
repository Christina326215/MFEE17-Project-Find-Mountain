import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import '../styles/Navbar.scss'; //header & footer 樣式
import $ from 'jquery';

//====== below icon star ======//
import { Cart, PersonCircle } from 'react-bootstrap-icons';
import { BsSearch } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//
import logoPng from '../img/logo.png';
//====== above img import end ======//

function Navbar(props) {
  const { auth, setAuth } = props;
  // const [navbarLocalCart, setNavbarLocalCart] = useState([]);
  const [cartNum, setCartNum] = useState(0);
  //nav toggle
  const navToggle = () => {
    let btn_nav = document.querySelector('.btn_nav');
    let nav = document.querySelector('.nav');

    btn_nav.onclick = function () {
      this.classList.toggle('change');
      nav.classList.toggle('nav_show');
    };
  };

  // //取得local storage轉為陣列的資料 ProductOrder
  // function getCartFromLocalStorage() {
  //   const ProductOrder =
  //     JSON.parse(localStorage.getItem('ProductOrderDetail')) || '[]';
  //   console.log('ProductOrder', ProductOrder);
  //   setNavbarLocalCart(ProductOrder);
  // }
  // useEffect(() => {
  //   getCartFromLocalStorage();
  // }, []);
  // //一進畫面先讀取local storage
  // useEffect(() => {
  //   const navbarProductOrder =
  //     JSON.parse(localStorage.getItem('ProductOrderDetail')) || '[]';
  //   // setNavbarLocalCart(navbarProductOrder);
  //   // console.log('navbarProductOrder', navbarProductOrder);
  //   // console.log('navbarProductOrder length', navbarProductOrder.length);
  //   console.log('navbarLocalCart', navbarLocalCart);
  //   //判斷localstorage裡有沒有商品
  //   let itemsInsideCart = Boolean(
  //     navbarLocalCart !== '[]' && navbarLocalCart.length !== 0
  //   );
  //   console.log('itemsInsideCart', itemsInsideCart);
  //   //if有商品
  //   if (itemsInsideCart) {
  //     $('.cart-num').css('display', 'block');
  //     console.log('hello im here');
  //     var totalNum = 0;
  //     for (let i = 0; i < navbarLocalCart.length; i++) {
  //       totalNum += navbarLocalCart[i].num;
  //     }
  //     console.log('totalNum', totalNum);
  //     setCartNum(totalNum);
  //   } else {
  //     $('.cart-num').css('display', 'none');
  //     console.log('no product');
  //   }
  // }, [navbarLocalCart, cartNum]);
  return (
    <>
      <header className="header sticky-top">
        {/* to home */}
        <Link to="/" className="logo_top">
          <img src={logoPng} alt="logo_top" />
        </Link>
        <div className="btns">
          <a href="#/" className="search_button h4">
            <BsSearch size={24} />
          </a>
          <Link
            to="/shoppingcart/step1-detail"
            className="shopping_button h4 position-relative"
          >
            <div className="cart-num position-absolute text-center">
              {cartNum}
            </div>
            <Cart size={24} />
          </Link>
          {/* to Sign In star */}
          {auth ? (
            <Link
              to="/member"
              // onClick={() => {
              //   setAuth(false);
              //   //出現訊息
              //   alert('you are out');
              //   //跳回首頁
              //   props.history.push('/');
              // }}
              className="shopping_button h4"
            >
              <PersonCircle size={24} />
            </Link>
          ) : (
            <Link to="/login" className="sign_button">
              Log In
            </Link>
          )}
          {/* to Sign In end */}
        </div>
        {/* <!-- =========nav star========= --> */}
        <nav className="nav">
          <ul className="list-unstyled d-flex">
            <li>
              <Link className="nav-font" to="/map">
                路線地圖
              </Link>
            </li>
            <li>
              <Link className="nav-font" to="/recommend">
                推薦攻略
              </Link>
            </li>
            <li>
              <Link className="nav-font" to="/shop">
                購物商城
              </Link>
            </li>
            <li>
              <Link className="nav-font" to="/outfit">
                建議穿搭
              </Link>
            </li>
          </ul>
        </nav>

        <div className="btn_nav" onClick={navToggle}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        {/* <!-- =========nav end========= --> */}
      </header>
    </>
  );
}

export default withRouter(Navbar);
