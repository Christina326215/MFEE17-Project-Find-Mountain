import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import '../../styles/MemberPage/MemberComment.scss'; //member comment style

import { memberCommentURL, IMAGE_URL } from '../../utils/config';
import axios from 'axios';

//====== below pages star ======//
import { pages_btn } from '../MapPage/pages/PagesBtn'; //分頁按鈕
import MemberSideHead from './pages/MemberSideHead'; //member Side Head
//====== below pages end ======//

//====== below icon star ======//
import { BsExclamationTriangleFill } from 'react-icons/bs';
import { FcApproval, FcVlc } from 'react-icons/fc';
//====== below icon end ======//

//====== below img import start ======//
import Xiangshan from '../../img/xiangshan.jpeg';
//====== above img import end ======//

function MemberComment() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log('id', id);

  useEffect(() => {
    async function getCommentData() {
      try {
        const CommentData = await axios.get(memberCommentURL);
        console.log(CommentData.data.dbResults); //for check
        setData(CommentData.data.dbResults);
        // let data = CommentData.data;
      } catch (e) {
        console.log(e);
      }
    }
    getCommentData();
  }, []);

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
                    <Link
                      to="/member/map-route"
                      className="member-left-href-color"
                    >
                      路線地圖
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/member/product-article"
                      className="member-left-href-color"
                    >
                      收藏管理
                    </Link>
                  </td>
                </tr>
                <tr className="member-table-active">
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
                    <Link to="" className="member-left-href-color">
                      登出
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- manage-left-side end --> */}
          {/* <!-- manage-right-side start--> */}
          <div className="col-12 col-lg-9 mt-5 zindex-low">
            <h2 className="member-comment-title-main">我的評論管理</h2>
            {/* <!-- <div><h6>去過</h6></div> --> */}
            <table className="table member-comment-table-all text-center p-md-4 p-lg-5 mt-5">
              <thead>
                <tr>
                  <th
                    scope="col-4 col-md-2"
                    className="member-comment-text-weight-bold align-moddle"
                  >
                    分享照片
                  </th>
                  <th
                    scope="col-4 col-md-3"
                    className="member-comment-text-weight-bold align-moddle"
                  >
                    評論文章
                  </th>
                  <th
                    scope="col-4 col-md-6"
                    className="member-comment-text-weight-bold align-moddle"
                  >
                    評論內容
                  </th>
                  <th
                    scope="col-4 col-md-1"
                    className="member-comment-text-weight-bold align-moddle"
                  >
                    狀態
                  </th>
                </tr>
              </thead>
              {data.map((items) => (
                <tbody key={items.id}>
                  <tr>
                    <td
                      scope="row"
                      className="member-comment-picture-img-wrapper"
                    >
                      <div className="member-comment-picture-img-box">
                        <img
                          src={`${IMAGE_URL}/img/comment-img/${items.pic}`}
                          alt=""
                          className="member-comment-picture-img"
                        />
                      </div>
                    </td>
                    <td
                      scope="row"
                      className="member-comment-text-weight align-middle"
                    >
                      {items.article_name}
                    </td>
                    <td
                      scope="row"
                      className="member-comment-text-weight align-middle"
                    >
                      {items.content}
                    </td>
                    <td
                      scope="row"
                      className="member-comment-text-weight align-middle"
                    >
                      {items.dislike_status === 2 ? (
                        <FcApproval size={20} />
                      ) : items.dislike_status === 3 ? (
                        <FcVlc size={20} />
                      ) : (
                        <BsExclamationTriangleFill
                          className="member-comment-warning-icon"
                          size={20}
                        />
                      )}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            {/* <!-- 分頁 start  --> */}
            {/* {pages_btn} */}
            <div
              className="btn-toolbar justify-content-center mountain_btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="Third group"
              >
                <button type="button" className="btn btn-primary">
                  |&lt;
                </button>
              </div>
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-primary">
                  &lt;
                </button>
              </div>
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="Second group"
              >
                <button type="button" className="btn btn-primary">
                  1
                </button>
              </div>
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="Third group"
              >
                <button type="button" className="btn btn-primary">
                  &gt;
                </button>
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-primary">
                  &gt;|
                </button>
              </div>
            </div>
            {/* <!-- 分頁 end  --> */}
          </div>
          {/* <!-- manage-right-side end--> */}
        </div>
      </div>
    </>
  );
}

export default withRouter(MemberComment);
