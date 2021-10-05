import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

//===api start===
import { authURL } from '../../utils/config';
import axios from 'axios';
//===api end====

function ForgetPassword(props) {
  const [forgetData, setForgetData] = useState({
    email: '',
  });

  const [email, setEmail] = useState(null);
  // 存入錯誤訊息用 start //
  const [fieldErrors, setFieldErrors] = useState(null);

  function handleChange(e) {
    setForgetData(e.target.value);
  }
  //   const [data, setData] = useState(null);
  const SendEmail = async (e) => {
    e.preventDefault();

    try {
      // let formData = new FormData();
      // formData.append('email', forgetData.email);
      // setForgetData(forgetData.email);
      let memberData = await axios.post(`${authURL}/forget`, { forgetData });
      console.log(memberData.data); //for check
      if (memberData.data === 'recovery email sent') {
        setEmail(true);
      }
    } catch (e) {
      console.log(e);
      if (!email) {
        setEmail(false);
      }
    }
  };
  const handleFormInvalid = (e) => {
    // 擋住錯誤訊息的預設呈現的方式(popup)
    e.preventDefault();

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    };
    // 3. 設定回原狀態物件
    setFieldErrors(updatedFieldErrors);
  };

  return (
    <>
      {/* <div className="title">重新設定密碼</div> */}
      <button className="btn btn-outline-primary float-right">
        發送驗證碼
      </button>

      {/* ==== modal === */}
      <Modal size="md">
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
            {/* {fieldErrors.phone !== '' && (
              <small className="login-error">{fieldErrors.phone}</small>
            )} */}
          </form>
        </Modal.Body>

        <Modal.Footer>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={SendEmail}
            onInvalid={handleFormInvalid}
          >
            重設密碼
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ForgetPassword;
