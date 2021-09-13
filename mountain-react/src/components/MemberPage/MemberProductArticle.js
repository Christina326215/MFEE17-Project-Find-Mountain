import React from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import '../../styles/MemberPage/MemberProductArticle.scss'; //member product and article style

//====== below icon star ======//
import {
  BsQuestionCircle,
  BsTrash,
  BsStar,
  BsStarFill,
  BsXSquareFill,
} from 'react-icons/bs';
import { Cart } from 'react-bootstrap-icons';
//====== below icon end ======//

//====== below img import start ======//
import Avatar from '../../img/signin.jpg';
import MemberLevel from '../../img/low.svg';
import MemberProductImg from '../../img/shoes-pic2.jpeg';
import Xiangshan from '../../img/xiangshan.jpeg';
//====== above img import end ======//

function MemberProductArticle() {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* <!-- manage-left-side start --> */}
          <div className="col-12 col-md-3 my-3">
            <table
              className="
              table table-hover table-bordered member-table-all-left
              p-md-4 p-lg-5
            "
            >
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    <div className="member-headshot-img-box">
                      <img src={Avatar} alt="" className="member-cover-fit" />
                    </div>
                    <h3 className="m-2 member-member-name">王小明</h3>
                    <img src={MemberLevel} alt="" />
                    <div className="position-relative member-level">
                      <span className="member-grade-icon">肉腳</span>
                      <Link
                        to="javascript:void(0)"
                        id="seeMember"
                        className="see-member see-member-style"
                      >
                        <BsQuestionCircle size={20} />
                      </Link>
                      {/* <!-- =========about-membership-bubble start========= --> */}
                      <div className="member-about-membership-bubble p-3 position-absolute">
                        <span className="member-about-membership-bubble-arrow"></span>
                        <span className="member-membership">
                          可至路線地圖之我的成就區，查看累積會員等級積分，享有商品優惠折扣哦！{' '}
                        </span>
                        <br />
                        <span className="member-membership member-membership-low">
                          肉腳：完成爬山積分3分以上{' '}
                        </span>
                        <br />
                        <span className="member-membership member-membership-medium">
                          山友 ：完成爬山積分20分以上{' '}
                        </span>
                        <br />
                        <span className="member-membership member-membership-high">
                          山神 ：完成爬山積分50分以上
                        </span>
                      </div>
                      {/* <!-- =========about-membership-bubble end========= --> */}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/member-map-route"
                      className="member-left-href-color"
                    >
                      路線地圖
                    </Link>
                  </td>
                </tr>
                <tr className="member-table-active">
                  <td scope="row" className="text-center">
                    <Link
                      to="/member-product-article"
                      className="member-left-href-color"
                    >
                      收藏管理
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/member-comment"
                      className="member-left-href-color"
                    >
                      評論管理
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link to="/member-order" className="member-left-href-color">
                      訂單管理
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/mamber-personal"
                      className="member-left-href-color"
                    >
                      帳號設定
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="member-login.html"
                      className="member-left-href-color"
                    >
                      登出
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- manage-left-side end --> */}
          {/* <!-- manage-right-side start--> */}
          <div className="col-12 col-md-9 mt-5">
            <h2 className="member-product-article-title-main">我的產品收藏</h2>
            <div className="wrapper">
              <div className="tab">
                <div
                  className="btn-group member-product-article-switch-category"
                  role="group"
                  aria-label="Basic example"
                >
                  <a
                    type="button"
                    id="menu"
                    className="btn btn-outline-primary menu active"
                  >
                    產品
                  </a>
                  <a
                    type="button"
                    id="menu"
                    className="btn btn-outline-primary menu"
                  >
                    文章
                  </a>
                </div>
              </div>
              <div className="tab-content">
                <div id="content" className="content1">
                  {/* <!-- product table start--> */}
                  <table className="table member-product-article-table-all text-center p-md-4 p-lg-5">
                    <thead>
                      <tr>
                        <th
                          scope="col-1"
                          className="align-middle member-product-article-product-img"
                        >
                          產品照片
                        </th>
                        <th
                          scope="col-1"
                          className="align-middle member-product-article-product-name"
                        >
                          產品名稱
                        </th>
                        <th
                          scope="col-2"
                          className="align-middle member-product-article-product-size"
                        >
                          尺寸
                        </th>
                        <th
                          scope="col-4"
                          className="align-middle member-product-article-product-price"
                        >
                          單價
                        </th>
                        <th
                          scope="col-1"
                          className="align-middle member-product-article-product-buy"
                        >
                          加入購物車
                        </th>
                        <th
                          scope="col-1"
                          className="align-middle member-product-article-product-delete"
                        >
                          刪除
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          scope="row"
                          className="member-product-article-product-picture-img-wrapper"
                        >
                          <div className="member-product-article-product-picture-img-box">
                            <img
                              src={MemberProductImg}
                              alt=""
                              className="member-product-article-product-picture-img"
                            />
                          </div>
                        </td>
                        <td scope="row" className="align-middle">
                          MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                        </td>
                        <td scope="row" className="align-middle">
                          M
                        </td>
                        <td scope="row" className="align-middle">
                          NT$ 5,000
                        </td>
                        <td scope="row" className="align-middle">
                          <Link to="">
                            <Cart size={20} />
                          </Link>
                        </td>
                        <td scope="row" className="align-middle">
                          <Link to="">
                            <BsTrash size={20} />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-product-article-product-picture-img-wrapper"
                        >
                          <div className="member-product-article-product-picture-img-box">
                            <img
                              src={MemberProductImg}
                              alt=""
                              className="member-product-article-product-picture-img"
                            />
                          </div>
                        </td>
                        <td scope="row" className="align-middle">
                          MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                        </td>
                        <td scope="row" className="align-middle">
                          M
                        </td>
                        <td scope="row" className="align-middle">
                          NT$ 5,000
                        </td>
                        <td scope="row" className="align-middle">
                          <Link to="">
                            <Cart size={20} />
                          </Link>
                        </td>
                        <td scope="row" className="align-middle">
                          <Link to="">
                            <BsTrash size={20} />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-product-article-product-picture-img-wrapper"
                        >
                          <div className="member-product-article-product-picture-img-box">
                            <img
                              src={MemberProductImg}
                              alt=""
                              className="member-product-article-product-picture-img"
                            />
                          </div>
                        </td>
                        <td scope="row" className="align-middle">
                          MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                        </td>
                        <td scope="row" className="align-middle">
                          M
                        </td>
                        <td scope="row" className="align-middle">
                          NT$ 5,000
                        </td>
                        <td scope="row" className="align-middle">
                          <Link to="">
                            <Cart size={20} />
                          </Link>
                        </td>
                        <td scope="row" className="align-middle">
                          <Link to="">
                            <BsTrash size={20} />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-product-article-product-picture-img-wrapper"
                        >
                          <div className="member-product-article-product-picture-img-box">
                            <img
                              src={MemberProductImg}
                              alt=""
                              className="member-product-article-product-picture-img"
                            />
                          </div>
                        </td>
                        <td scope="row" className="align-middle">
                          MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                        </td>
                        <td scope="row" className="align-middle">
                          M
                        </td>
                        <td scope="row" className="align-middle">
                          NT$ 5,000
                        </td>
                        <td scope="row" className="align-middle">
                          <Link to="">
                            <Cart size={20} />
                          </Link>
                        </td>
                        <td scope="row" className="align-middle">
                          <Link to="">
                            <BsTrash size={20} />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-product-article-product-picture-img-wrapper"
                        >
                          <div className="pproduct-icture-img-box">
                            <img
                              src={MemberProductImg}
                              alt=""
                              className="member-product-article-product-picture-img"
                            />
                          </div>
                        </td>
                        <td scope="row" className="align-middle">
                          MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                        </td>
                        <td scope="row" className="align-middle">
                          M
                        </td>
                        <td scope="row" className="align-middle">
                          NT$ 5,000
                        </td>
                        <td scope="row" className="align-middle">
                          <Link to="">
                            <Cart size={20} />
                          </Link>
                        </td>
                        <td scope="row" className="align-middle">
                          <Link to="">
                            <BsTrash size={20} />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <!-- 分頁 start  --> */}
                  {/* <div
                  className="btn-toolbar justify-content-center mb-5"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Third group"
                  >
                    <button type="button" className="btn btn-primary">|<</button>
                  </div>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="First group"
                  >
                    <button type="button" className="btn btn-primary"><</button>
                  </div>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Second group"
                  >
                    <button type="button" className="btn btn-primary">1</button>
                  </div>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Third group"
                  >
                    <button type="button" className="btn btn-primary">></button>
                  </div>
                  <div className="btn-group" role="group" aria-label="Third group">
                    <button type="button" className="btn btn-primary">>|</button>
                  </div>
                </div> */}
                  {/* <!-- 分頁 end  --> */}
                  {/* <!-- product table end--> */}
                </div>
                <div id="content" className="member-product-article-content2">
                  {/* <!-- article table start--> */}
                  <table className="table member-product-article-table-all text-center p-md-4 p-lg-5">
                    <thead>
                      <tr>
                        <th scope="col">文章照片</th>
                        <th scope="col">文章名稱</th>
                        <th scope="col">使用者總體評分</th>
                        <th scope="col">取消收藏</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          scope="row"
                          className="member-product-article-article-picture-img-wrapper"
                        >
                          <div className="member-product-article-article-picture-img-box">
                            <img
                              src={Xiangshan}
                              alt=""
                              className="member-product-article-article-picture-img"
                            />
                          </div>
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          象山步道
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStar
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStar
                            className="member-product-article-star-icon"
                            size={20}
                          />
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          <BsXSquareFill
                            className="member-product-article-cancel-icon"
                            size={20}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-product-article-article-picture-img-wrapper"
                        >
                          <div className="member-product-article-article-picture-img-box">
                            <img
                              src={Xiangshan}
                              alt=""
                              className="member-product-article-article-picture-img"
                            />
                          </div>
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          象山步道
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStar
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStar
                            className="member-product-article-star-icon"
                            size={20}
                          />
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          <BsXSquareFill
                            className="member-product-article-cancel-icon"
                            size={20}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-product-article-article-picture-img-wrapper"
                        >
                          <div className="member-product-article-article-picture-img-box">
                            <img
                              src={Xiangshan}
                              alt=""
                              className="member-product-article-article-picture-img"
                            />
                          </div>
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          象山步道
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStar
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStar
                            className="member-product-article-star-icon"
                            size={20}
                          />
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          <BsXSquareFill
                            className="member-product-article-cancel-icon"
                            size={20}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-product-article-article-picture-img-wrapper"
                        >
                          <div className="member-product-article-article-picture-img-box">
                            <img
                              src={Xiangshan}
                              alt=""
                              className="member-product-article-article-picture-img"
                            />
                          </div>
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          象山步道
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStar
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStar
                            className="member-product-article-star-icon"
                            size={20}
                          />
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          <BsXSquareFill
                            className="member-product-article-cancel-icon"
                            size={20}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-product-article-article-picture-img-wrapper"
                        >
                          <div className="member-product-article-article-picture-img-box">
                            <img
                              src={Xiangshan}
                              alt=""
                              className="member-product-article-article-picture-img"
                            />
                          </div>
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          象山步道
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStarFill
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStar
                            className="member-product-article-star-icon"
                            size={20}
                          />
                          <BsStar
                            className="member-product-article-star-icon"
                            size={20}
                          />
                        </td>
                        <td
                          scope="row"
                          className="member-product-article-text-weight align-middle"
                        >
                          <BsXSquareFill
                            className="member-product-article-cancel-icon"
                            size={20}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <!-- 分頁 start  --> */}
                  {/* <div
                  className="btn-toolbar justify-content-center mb-5"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Third group"
                  >
                    <button type="button" className="btn btn-primary">|<</button>
                  </div>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="First group"
                  >
                    <button type="button" className="btn btn-primary"><</button>
                  </div>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Second group"
                  >
                    <button type="button" className="btn btn-primary">1</button>
                  </div>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Third group"
                  >
                    <button type="button" className="btn btn-primary">></button>
                  </div>
                  <div className="btn-group" role="group" aria-label="Third group">
                    <button type="button" className="btn btn-primary">>|</button>
                  </div>
                </div> */}
                  {/* <!-- 分頁 end  --> */}
                  {/* <!-- article table end--> */}
                </div>
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
