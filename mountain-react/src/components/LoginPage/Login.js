import React, { useEffect, useState } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import $ from 'jquery';
import '../../styles/LoginStyle/Login.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick.min.js';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
//===api start===
import { authURL } from '../../utils/config';
import axios from 'axios';
//===api end====
import { useAuth } from '../../context/auth';

import ForgetPassword from './ForgetPassword';

// ===icon start===
import { FaFacebookSquare, FaGoogle, FaLine } from 'react-icons/fa';
// ===icon end===

//===import img start===
import loginLogo from '../../img/logo.svg';
import slider1 from '../../img/pic1.webp';
import slider2 from '../../img/pic2.webp';
import slider3 from '../../img/pic3.webp';
import Swal from 'sweetalert2';
//===import img end===

//===第三方登入===
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { v4 as uuidv4 } from 'uuid';

function Login(props) {
  // const [user, setUser] = useState([]);
  // const [email, setEmail] = useState('ming@test');
  // const [password, setPassword] = useState('123456');
  const { auth, setAuth } = useAuth();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  function handleChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

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
  //===第三方登入 star
  //FB
  const responseFacebook = async (token) => {
    let response = await axios.get(
      `/users/auth/facebook?access_token=${token}`,
      {
        withCredentials: true,
      }
    );
    console.log(response.data);
    if (response.data.id) {
      setAuth(true);
    }
  };

  // const responseFacebook = (response) => {
  //   UserDataService.facebookAuthToken(response.accessToken).then((res) => {
  //     console.log(res.data);
  //     if (res.data.id) {
  //       setAuth(true);
  //     }
  //   });
  // };
  //google
  const responseGoogle = async (token) => {
    let response = await axios.get(`/users/auth/google?access_token=${token}`, {
      withCredentials: true,
    });
    console.log(response.data);
    if (response.data.id) {
      setAuth(true);
    }
  };
  // const responseGoogle = async (response) => {
  //   UserDataService.googleAuthToken(response.accessToken).then((res) => {
  //     console.log(res.data);
  //     if (res.data.id) {
  //       setAuth(true);
  //     }
  //   });
  // };
  //Line
  // const responseLine = async (token) => {
  //   let response = await axios.get(`/users/auth/line?access_token=${token}`, {
  //     withCredentials: true,
  //   });
  //   console.log(response.data);
  //   if (response.data.id) {
  //     setAuth(true);
  //   }
  // };
  // // const responseLine = (token) => {
  // //   UserDataService.lineAuthToken(token).then((res) => {
  // //     console.log(res.data);
  // //     if (res.data.id) {
  // //       setAuth(true);
  // //     }
  // //   });
  // // };
  // useEffect(() => {
  //   const token = localStorage.getItem('line');
  //   console.log('line token', token);
  //   if (token) {
  //     responseLine(token);
  //   }
  // }, []);

  // function PopupCenter(url, title, w, h) {
  //   var userAgent = navigator.userAgent,
  //     mobile = function () {
  //       return (
  //         /\b(iPhone|iP[ao]d)/.test(userAgent) ||
  //         /\b(iP[ao]d)/.test(userAgent) ||
  //         /Android/i.test(userAgent) ||
  //         /Mobile/i.test(userAgent)
  //       );
  //     },
  //     screenX =
  //       typeof window.screenX != 'undefined'
  //         ? window.screenX
  //         : window.screenLeft,
  //     screenY =
  //       typeof window.screenY != 'undefined'
  //         ? window.screenY
  //         : window.screenTop,
  //     outerWidth =
  //       typeof window.outerWidth != 'undefined'
  //         ? window.outerWidth
  //         : document.documentElement.clientWidth,
  //     outerHeight =
  //       typeof window.outerHeight != 'undefined'
  //         ? window.outerHeight
  //         : document.documentElement.clientHeight - 22,
  //     targetWidth = mobile() ? null : w,
  //     targetHeight = mobile() ? null : h,
  //     V = screenX < 0 ? window.screen.width + screenX : screenX,
  //     left = parseInt(V + (outerWidth - targetWidth) / 2, 10),
  //     right = parseInt(screenY + (outerHeight - targetHeight) / 2.5, 10),
  //     features = [];
  //   if (targetWidth !== null) {
  //     features.push('width=' + targetWidth);
  //   }
  //   if (targetHeight !== null) {
  //     features.push('height=' + targetHeight);
  //   }
  //   features.push('left=' + left);
  //   features.push('top=' + right);
  //   features.push('scrollbars=1');

  //   var newWindow = window.open(url, title, features.join(','));

  //   if (window.focus) {
  //     newWindow.focus();
  //   }

  //   return newWindow;
  // }

  // const handleLineLogin = () => {
  //   // https://developers.line.biz/en/docs/line-login/
  //   // integrate - line - login /#making - an - authorization - request
  //   const params = new URLSearchParams({
  //     response_type: 'code',
  //     client_id: '1656282282',
  //     state: uuidv4(),
  //     scope: 'profile',
  //     ui_locales: 'zh-Hant',
  //     prompt: 'consent',
  //     bot_prompt: 'normal',
  //     redirect_uri: 'http://localhost:3000/lineauth',
  //   });

  //   console.log(params.toString());

  //   //1. open a new window for line login

  //   const url =
  //     'https://access.line.me/oauth2/v2.1/authorize?' + params.toString();

  //   newWindow.current = PopupCenter(url, 'LinelogInPopup', 400, 600);

  //===第三方登入 end

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let result = await axios.post(`${authURL}/login`, {
  //       email,
  //       password,
  //     });
  //     console.log(result.data); //for check
  //     setUser(result.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // 準備 INSERT INTO 資料庫 start
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append('email', loginData.email);
      formData.append('password', loginData.password);
      let response = await axios.post(`${authURL}/login`, formData, {
        withCredentials: true,
      });
      setAuth(true);
      console.log('response', response);
      console.log('loginData', loginData);
    } catch (e) {
      console.error(e.response);
      Swal.fire({
        icon: 'error',
        title: '登入失敗',
        text: '請重新輸入帳號密碼!',
      });
      // swal('登入失敗', '請重新輸入帳號密碼!', 'error');
    }
  };
  console.log(auth);
  // 準備 INSERT INTO 資料庫 end

  return (
    <>
      {auth ? (
        <Redirect to="/" />
      ) : (
        <div>
          <div className="d-flex">
            <div className="login-w-50-l login-bg-pic p-3 position-relative">
              <div className="login-display-photo-box black-mask">
                <div className="login-slick-photo-box">
                  <img src={slider1} alt="" title="" className="cover-fit" />
                </div>
                <div className="login-slick-photo-box">
                  <img src={slider2} alt="" title="" className="cover-fit" />
                </div>
                <div className="login-slick-photo-box">
                  <img src={slider3} alt="" title="" className="cover-fit" />
                </div>
              </div>
              <div className="position-absolute login-logobox">
                <figure className="login-logo">
                  <img src={loginLogo} alt="logo" />
                </figure>
              </div>
            </div>
            <div className="login-w-50-l p-5 align-self-center">
              <form onSubmit={handleSubmit}>
                <h2 className="text-center pb-5 login-title">會員登入</h2>
                <div className="mb-3">
                  <label
                    htmlFor="InputEmail1"
                    className="form-label login-account"
                  >
                    帳號
                  </label>
                  <input
                    type="email"
                    className="form-control login-input"
                    id="InputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="請輸入您的email"
                    name="email"
                    value={loginData && loginData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="InputPassword1"
                    className="form-label login-password"
                  >
                    密碼
                  </label>
                  <input
                    type="password"
                    className="form-control login-input"
                    id="InputPassword1"
                    placeholder="請輸入您的密碼"
                    name="password"
                    value={loginData && loginData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3 text-center login-member">
                  <button type="submit" className="btn login-btn">
                    登入
                  </button>
                </div>
                <div className="mb-3 text-center">
                  <ForgetPassword />
                  <span>&nbsp;&nbsp; &nbsp;&nbsp;</span>
                  <Link className="login-signUp" to="/signup">
                    註冊會員
                  </Link>
                </div>
                <hr />
                <div className="mb-3">
                  <h6 className="login-fast">快速登入</h6>
                  <span>&nbsp;&nbsp;</span>
                  <div className="login-social-container">
                    <FacebookLogin
                      className="login-icon login-icon-FB"
                      // style={{
                      //   backgroundColor: '#4267b2',
                      // }}
                      appId="4122031167908837"
                      onSuccess={responseFacebook}
                    >
                      <FaFacebookSquare className="login-h3" />
                    </FacebookLogin>
                    <span>&nbsp;&nbsp;</span>
                    <Link to="#" className="login-icon login-icon-Google">
                      <GoogleLogin
                        clientId="234968124416-76g3tua0318gr37b87g1v5vraqpqslfk.apps.googleusercontent.com"
                        buttonText="登入"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                      />
                      {/* <FaGoogle className="login-h3" /> */}
                    </Link>
                    <span>&nbsp;&nbsp;</span>
                    {/* <button
                      onClick={handleLineLogin}
                      className="login-icon login-icon-Line"
                    >
                      <FaLine className="login-h3" />
                    </button> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default withRouter(Login);
