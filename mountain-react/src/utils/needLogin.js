import React from 'react';
import { Link, Redirect } from 'react-router-dom'; //a標籤要變成link
//====== below modal star ======//
import Swal from 'sweetalert2';
//====== below modal end ======//
import loginPic from '../img/needLogin.PNG';

function error(props) {
  Swal.fire({
    title: '很抱歉!此頁面需要登入才能使用!',
    // text: 'Modal with a custom image.',
    imageUrl: `${loginPic}`,
    imageWidth: 400,
    // imageHeight: 200,
    imageAlt: 'Login image',
    allowOutsideClick: false,
    confirmButtonText: '來去登入~',
  }).then(function () {
    console.log('triggered redirect here');
    window.location.href = '/login';
    // <Redirect to="/login" />;
    // Swal.close();
    props.history.replace('/login');
  });
}

export const needLogin = (
  <>
    {/* {error()} */}
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: '610px' }}
    >
      <img src={loginPic} alt="loginPic" style={{ width: '500px' }} />
      <span className="h3 mb-3 mt-3">很抱歉!此頁面需要登入才能使用!</span>
      <Link to="/login">
        <button className="btn btn-primary">來去登入~</button>
      </Link>
    </div>
  </>
);
