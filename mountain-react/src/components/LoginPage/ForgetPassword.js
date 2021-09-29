import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

//===api start===
import { authURL } from '../../utils/config';
import axios from 'axios';
//===api end====

function ForgetPassword(props) {
  const [show, setShow] = useState(false);
  const [forgetData, setForgetData] = useState({
    email: '',
    showError: false,
    messageFromServer: '',
    showNullError: false,
  });
  //=== 彈跳視窗開關 star ===//
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    //因為button在form裡面但不想要提交form,擋掉預設動作->submit
    e.preventDefault();
    setShow(true);
  };
  //=== 彈跳視窗開關 end ===//
  const [email, setEmail] = useState(null);
  const [showError, setShowError] = useState(null);
  const [messageFromServer, setMessageFromServer] = useState(null);
  const [showNullError, setShowNullError] = useState(null);

  function handleChange(e) {
    setForgetData({ ...forgetData, [e.target.name]: e.target.value });
  }
  //   const [data, setData] = useState(null);
  const SendEmail = async (e) => {
    e.preventDefault();
    if (email === '') {
      setEmail({
        showError: false,
        messageFromServer: '',
        showNullError: true,
      });
    } else {
      //api
      try {
        let formData = new FormData();
        formData.append('email', forgetData.email);
        let memberData = await axios.post(`${authURL}/forget`, formData);
        console.log(memberData.data); //for check
        if (memberData.data === 'recovery email sent') {
          setEmail({
            showError: false,
            messageFromServer: 'recovery email sent',
            showNullError: false,
          });
        }
      } catch (e) {
        console.log(e);
        if (e === 'email not in db') {
          setEmail({
            showError: true,
            messageFromServer: '',
            showNullError: false,
          });
        }
      }
    }
  };

  return (
    <>
      {/* <div className="title">重新設定密碼</div> */}
      <button className="btn login-forgetPassword" onClick={handleShow}>
        忘記密碼
      </button>

      {/* ==== modal === */}
      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>忘記密碼？</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="my-2">
            <div className=""></div>
            <label className="col-12 mb-3 text-center">
              請輸入你註冊會員的電子信箱
            </label>
            <input
              type="text"
              className="col-12"
              id="email"
              value={forgetData && forgetData.email}
              onChange={handleChange}
              name="email"
              placeholder="Email 帳號"
            />
          </form>
          {showNullError && (
            <div>
              <p id="alert">The email address field is empty.</p>
            </div>
          )}
          {showError && (
            <div>
              <p id="alert">
                That email address isn&apos;t recognized. Please try again or
                register for a new account.
              </p>
            </div>
          )}
          {messageFromServer === 'recovery email sent' && (
            <div>
              <p id="alert">Password Reset Email Successfully Sent!</p>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <button type="submit" className="btn btn-primary" onClick={SendEmail}>
            重設密碼
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ForgetPassword;
