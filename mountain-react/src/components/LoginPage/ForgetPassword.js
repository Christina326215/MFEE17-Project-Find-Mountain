import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

//===api start===
import { authURL } from '../../utils/config';
import axios from 'axios';
//===api end====

function ForgetPassword(props) {
  const [show, setShow] = useState(false);
  const [forgetData, setForgetData] = useState({
    email: 'yang@test.com',
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
      } catch (e) {
        console.log(e);
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
          <form>
            <label>輸入你註冊會員的電子信箱</label>
            <input
              id="email"
              value={forgetData && forgetData.email}
              onChange={handleChange}
              placeholder="Email 帳號"
            />
          </form>
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
