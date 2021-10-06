import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import '../../styles/MemberPage/MemberComment.scss'; //member comment style
import { useAuth } from '../../context/auth'; // 取得會員資料

import { memberCommentURL, IMAGE_URL, authURL } from '../../utils/config';
import axios from 'axios';

//====== below pages star ======//
import PagesBtn from '../PagesBtn'; //分頁按鈕
import MemberSideHead from './pages/MemberSideHead'; //member Side Head
//====== below pages end ======//

//====== below icon star ======//
import { BsExclamationTriangleFill } from 'react-icons/bs';
import { FcApproval, FcVlc } from 'react-icons/fc';
//====== below icon end ======//

function MemberComment() {
  const { member, page, setPage, totalPage, setTotalPage, setAuth } = useAuth(); // 取得會員資料
  const [data, setData] = useState([]);

  // 分頁屬性
  // 記錄現在在第幾頁
  // const [page, setPage] = useState(1);
  // 總共有幾頁
  // const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      // left: 0,
      behavior: 'smooth',
    });
    // if (member === null) {
    //   return;
    // }
    // console.log('comment memberID:', member); //for check
    async function getCommentData() {
      try {
        // console.log('member id', member.id); // for check
        const CommentData = await axios.post(
          `${memberCommentURL}?page=${page}`,
          { member }
        );
        // console.log(CommentData.data.dbResults); //for check
        setData(CommentData.data.dbResults);
        // let data = CommentData.data;
        setTotalPage(CommentData.data.pagination.lastPage);
      } catch (e) {
        console.log(e);
      }
    }
    getCommentData();
  }, [page, member]);

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
                    style={{ width: '110px' }}
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
              {/* FIXME:三元運算子，如果沒資料的話，顯示沒資料 */}
              {/* {data == null ? ():} */}
              {data.length > 0 && data !== '[]' ? (
                <tbody>
                  {data.map((items) => (
                    <tr>
                      <td
                        key={items.id}
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
                        style={{ width: '70px' }}
                      >
                        {/* {items.dislike_status === 2 ? (
                        <FcApproval size={20} />
                      ) : items.dislike_status === 3 ? (
                        <FcVlc size={20} />
                      ) : (
                        <BsExclamationTriangleFill
                          className="member-comment-warning-icon"
                          size={20}
                        />
                      )} */}
                        <div className="d-flex flex-wrap justify-content-center">
                          {items.dislike_status === 2 ? (
                            <FcApproval size={24} />
                          ) : items.dislike_status === 3 ? (
                            <FcVlc size={24} />
                          ) : (
                            <BsExclamationTriangleFill
                              className="member-comment-warning-icon"
                              size={24}
                            />
                          )}
                          {items.dislike_status === 2 ? (
                            <span className="member-comment-status">
                              評論
                              <br />
                              已通過
                            </span>
                          ) : items.dislike_status === 3 ? (
                            <span className="member-comment-status">
                              被檢舉審核中
                            </span>
                          ) : (
                            <span className="member-comment-status">
                              評論
                              <br />
                              不通過
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  {/* <tr className="d-flex member-nocomment-box text-center justify-content-center align-items-center">
                    <p className="p-0">目前尚未新增評論</p>
                  </tr> */}
                  <tr>
                    <td colspan="4" className="member-nocomment-box">
                      <p className="nocomment">目前尚未新增評論</p>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
            {/* <!-- 分頁 start  --> */}
            {data.length > 0 && data !== '[]' ? <PagesBtn /> : <div></div>}

            {/* <!-- 分頁 end  --> */}
          </div>
          {/* <!-- manage-right-side end--> */}
        </div>
      </div>
    </>
  );
}

export default withRouter(MemberComment);
