import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../../styles/LoginStyle/Login.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick.min.js';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
//===api start===
import { authURL } from '../../utils/config';
import axios from 'axios';
//===api end====

// ===icon start===
import { FaFacebookSquare, FaGoogle, FaLine } from 'react-icons/fa';

// ===icon end===

//===import img start===
import loginLogo from '../../img/logo.svg';
import slider1 from '../../img/pic1.webp';
import slider2 from '../../img/pic2.webp';
import slider3 from '../../img/pic3.webp';
//===import img end===

function Login(props) {
  const [listData, setListData] = useState([]);
  const [name, setName] = useState([]);
  const [password, setPassword] = useState([]);
  useEffect(() => {
    async function homeData() {
      try {
        const homeData = await axios.get(authURL);
        console.log(homeData.data); //for check
        setListData(homeData.data);
      } catch (e) {
        console.log(e);
      }
    }
    homeData();
  }, []);
  useEffect(() => {
    $('.login-display-photo-box').slick({
      dots: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2800,
      fade: true,
      cssEase: 'linear',
    });
  }, []);
  return (
    <>
      <div class="">
        <div class="d-flex">
          <div class="login-w-50-l login-bg-pic p-3 position-relative">
            <div className="login-display-photo-box">
              <div class="login-slick-photo-box">
                <img src={slider1} alt="" title="" class="cover-fit" />
              </div>
              <div class="login-slick-photo-box">
                <img src={slider2} alt="" title="" class="cover-fit" />
              </div>
              <div class="login-slick-photo-box">
                <img src={slider3} alt="" title="" class="cover-fit" />
              </div>
            </div>
            <div class="position-absolute login-logobox">
              <figure class="login-logo">
                <img src={loginLogo} alt="logo" />
              </figure>
            </div>
          </div>
          <div class="login-w-50-l p-5 align-self-center">
            <form>
              <h2 class="text-center pb-5 login-title">會員登入</h2>
              <div class="mb-3">
                <label
                  for="exampleInputEmail1"
                  class="form-label login-account"
                >
                  帳號
                </label>
                <input
                  type="email"
                  class="form-control login-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="請輸入您的email"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label login-password"
                >
                  密碼
                </label>
                <input
                  type="password"
                  class="form-control login-input"
                  id="exampleInputPassword1"
                  placeholder="請輸入您的密碼"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label login-stay" for="exampleCheck1">
                  保持登入
                </label>
              </div>
              <div class="mb-3 text-center login-member">
                <button type="submit" class="btn login-btn">
                  會員登入
                </button>
              </div>
              <div class="mb-3 text-center">
                <Link class="login-forgetPassword" href="">
                  忘記密碼
                </Link>
                <span>&nbsp;&nbsp; &nbsp;&nbsp;</span>
                <Link class="login-signUp" to="/signup-info">
                  註冊會員
                </Link>
              </div>
              <hr />
              <div class="mb-3">
                <h6 class="login-fast">快速登入</h6>
                <span>&nbsp;&nbsp;</span>
                <div class="login-social-container">
                  <Link href="#" class="">
                    <FaFacebookSquare class="h3" />
                  </Link>
                  <span>&nbsp;&nbsp;</span>
                  <Link href="#" class="">
                    <FaGoogle class="h3" />
                  </Link>
                  <span>&nbsp;&nbsp;</span>
                  <Link href="#" class="">
                    <FaLine class="h3" />
                  </Link>
                  {/* <a href="#" class="social">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a href="#" class="social">
                    <ion-icon name="logo-googleplus"></ion-icon>
                  </a>
                  <a href="#" class="social">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
