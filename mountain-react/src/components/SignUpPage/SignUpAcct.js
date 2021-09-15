import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import '../../styles/SignUpStyle/SignUpAcct.css';
//api start
import { authURL } from '../../utils/config';
import axios from 'axios';
//api end

function SignUpAcct(props) {
  const [listData, setListData] = useState([]);

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
    // (function () {
    //   window.addEventListener(
    //     'load',
    //     function () {
    //       // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //       var forms = document.getElementsByClassName('needs-validation');
    //       // Loop over them and prevent submission
    //       var validation = Array.prototype.filter.call(forms, function (form) {
    //         form.addEventListener(
    //           'submit',
    //           function (event) {
    //             if (form.checkValidity() === false) {
    //               event.preventDefault();
    //               event.stopPropagation();
    //             }
    //             form.classList.add('was-validated');
    //           },
    //           false
    //         );
    //       });
    //     },
    //     false
    //   );
    // })();
  }, []);
  return (
    <>
      <main>
        <div className="container">
          <div className="signup-acct-progress-adj">
            {/* <!-- progress-bar-step start --> */}
            {/* <!-- className change to current "step-2" --> */}
            <div
              className="signup-acct-step-2"
              id="signup-acct-checkout-progress"
              data-current-step="2"
            >
              <div className="signup-acct-progress-bar1">
                {/* <!-- "active" change to "valid" --> */}
                <div className="signup-acct-step signup-acct-step-1 signup-acct-valid">
                  <span> 1</span>
                  {/* <!-- "opaque" change to "" --> */}
                  <div className="fa fa-check"></div>
                  <div className="signup-acct-step-label">填寫會員資料</div>
                </div>
                {/* <!-- add className "active" --> */}
                <div className="signup-acct-step signup-acct-step-2 active">
                  <span> 2</span>
                  <div className="fa fa-check signup-acct-opaque"></div>
                  <div className="signup-acct-step-label">設定帳號密碼</div>
                </div>
              </div>
            </div>
            {/* <!-- progress-bar-step end --> */}
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div className="signup-acct-content-all">
              <div className="text-center">
                <h1 className="h2 signup-acct-title">註冊會員</h1>
              </div>
              <div className="signup-acct-signUp d-flex justify-content-center pt-5">
                <form>
                  <div className="form-row d-flex justify-content-center">
                    <div className="form-group col-7 mb-3 account">
                      <label for="inputEmail2">Email 帳號</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail2"
                        placeholder="請輸入您的email"
                      />
                    </div>
                    <div className="form-group col-7 mb-3">
                      <div className="row">
                        <div className="col-7">
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                            placeholder="請輸入驗證碼"
                          />
                        </div>
                        <div className="col-5">
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            發送驗證碼
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-7 mb-3">
                      <label for="inputPassword4">設定密碼</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="請輸入您的密碼"
                      />
                    </div>
                    <div className="form-group col-7">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword5"
                        placeholder="請再次輸入您的密碼"
                      />
                    </div>
                  </div>
                  {/* <!-- button --> */}
                  <div className="signup-acct-button-container text-right my-5">
                    <Link
                      to="member-signUp-info.html"
                      className="btn btn-prev btn btn-outline-primary mr-3"
                    >
                      上一步
                    </Link>
                    <Link
                      to="member-login.html"
                      className="btn btn-next btn btn-primary mr-3"
                    >
                      完成
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUpAcct;
