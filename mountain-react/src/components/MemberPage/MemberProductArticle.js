/* eslint-disable jsx-a11y/scope */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import '../../styles/MemberPage/MemberProductArticle.scss'; //member product and article style
import MemberHeartArticle from './MemberHeartArticle';
import MemberHeartProducts from './MemberHeartProducts';

import { authURL } from '../../utils/config';
import axios from 'axios';

//====== below pages star ======//
import MemberSideHead from './pages/MemberSideHead'; //member Side Head
//====== below pages end ======//

//====== below catch member info star ======//
import { useAuth } from '../../context/auth';
//====== above catch member info end ======//

function MemberProductArticle() {
  const { setAuth } = useAuth();

  useEffect(() => {
    // 切換區域tab-switch
    let menu = document.querySelectorAll('#menu');
    let content = document.querySelectorAll('#content');
    for (let i = 0; i < menu.length; i++) {
      menu[i].addEventListener('click', function () {
        for (let k = 0; k < content.length; k++) {
          if (i === k) {
            content[k].style.display = 'block';
          } else {
            content[k].style.display = 'none';
          }
        }
        for (let j = 0; j < menu.length; j++) {
          menu[j].classList.remove('active');
        }
        this.classList.add('active');
      });
    }
  }, []);

  //====== 登出 start ======//
  const handleLogout = async (e) => {
    e.preventDefault();
    await axios.get(authURL + '/logout', {
      withCredentials: true,
    });
    setAuth(false);
  };
  //====== 登出 end ======//

  return (
    <>
      <div className="container">
        <div className="row zindex">
          {/* <!-- manage-left-side start --> */}
          <div className="col-12 col-lg-3 my-3 zindex-height">
            <table
              className="
              table table-hover table-bordered member-table-all-left
              p-md-4 p-lg-5
            "
            >
              <thead>
                <MemberSideHead />
              </thead>
              <tbody>
                <tr>
                  <td scope="row" className="text-center">
                    <Link to="/member" className="member-left-href-color">
                      路線地圖
                    </Link>
                  </td>
                </tr>
                <tr className="member-table-active">
                  <td scope="row" className="text-center">
                    <Link
                      to="/member/product-article"
                      className="member-left-href-color"
                    >
                      收藏管理
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/member/comment"
                      className="member-left-href-color"
                    >
                      評論管理
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link to="/member/order" className="member-left-href-color">
                      訂單管理
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/member/personal"
                      className="member-left-href-color"
                    >
                      會員資料
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <button
                      onClick={handleLogout}
                      className="member-left-href-color btn border-0 p-0"
                    >
                      登出
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- manage-left-side end --> */}
          {/* <!-- manage-right-side start--> */}
          <div className="col-12 col-lg-9 mt-5 zindex-low">
            <h2 className="member-product-article-title-main">我的產品收藏</h2>
            <div className="wrapper">
              <div className="tab">
                <div
                  className="btn-group member-product-article-switch-category"
                  role="group"
                  aria-label="Basic example"
                >
                  <Link
                    type="button"
                    id="menu"
                    className="btn btn-outline-primary menu active"
                    to="#/"
                  >
                    產品
                  </Link>
                  <Link
                    type="button"
                    id="menu"
                    className="btn btn-outline-primary menu"
                    to="#/"
                  >
                    文章
                  </Link>
                </div>
              </div>
              <div className="tab-content">
                <MemberHeartProducts />
                <MemberHeartArticle></MemberHeartArticle>
              </div>
            </div>
          </div>
          {/* <!-- manage-right-side end--> */}
        </div>
      </div>
    </>
  );
}

export default withRouter(MemberProductArticle);
