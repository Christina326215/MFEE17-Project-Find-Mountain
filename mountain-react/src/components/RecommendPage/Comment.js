import React from 'react';
import '../../styles/article.css';
import { withRouter } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { commentURL } from '../../utils/config';
import CommmentList from './CommmentList';
import slothBig from '../../img/article-img/sloth_big.svg';
import slothSmall from '../../img/article-img/sloth_small.svg';
import {
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronBarRight,
  BsPlusSquare,
} from 'react-icons/bs';

function Comment(props) {
  // 文章資料
  const { detail } = props;
  // 評論資料
  const [comment, setComment] = useState([
    {
      id: 0,
      pic: '',
      content: '',
      time: '',
      user_id: 0,
      article_id: 0,
      valid: 0,
      users_id: 0,
      users_name: '',
      article_name: '',
    },
  ]);
  // 評論資料連線
  useEffect(() => {
    async function commentData() {
      try {
        const commentData = await axios.get(commentURL);
        const commentTotalData = commentData.data;
        const id = Number(props.match.params.id);
        // 全部資料用find尋找id一樣的資料
        const newcommentDetail = commentTotalData.filter((v) => {
          return v.article_id === id;
        });
        console.log('newcommentDetail', newcommentDetail);

        if (newcommentDetail) setComment(newcommentDetail);
      } catch (e) {
        console.log(e);
      }
    }
    commentData();
  }, [props.match.params.id]);

  // 新增資料連線

  return (
    <div>
      <div className="recommend-commentBg">
        <div className="recommend-commentFilter">
          <div className="container recommend-body">
            <div className="recommend-wrapper">
              <h2 className="recommend-body-content-big-bold">景點評論</h2>
              <div className="recommend-commentWhiteBox">
                <div className="recommend-commentContent d-flex flex-column">
                  <div className="d-flex justify-content-end">
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn btn-warning mb-lg-3 mb-md-2 text-white"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      data-whatever="@mdo"
                    >
                      新增評論
                      {/* <i className="bi recommend-bi-plus-square"> */}
                      <BsPlusSquare className="ml-2 mb-1 bi recommend-bi-plus-square"></BsPlusSquare>
                      {/* </i> */}
                    </button>

                    {/* Modal */}
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              新增評論
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="form-group">
                                <label
                                  htmlFor="recipient-name"
                                  className="col-form-label"
                                >
                                  會員名稱：
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="recipient-name"
                                  value="??會員登入後才帶入資料"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="recipient-name"
                                  className="col-form-label"
                                >
                                  文章名稱：
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="recipient-name"
                                  value={detail.name}
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="message-text"
                                  className="col-form-label"
                                >
                                  評論內容：
                                </label>
                                <textarea
                                  className="form-control"
                                  id="message-text"
                                  placeholder="請留下您想輸入的評論內容．．．留言不得超過100字"
                                ></textarea>
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="inputGroupFile01"
                                  className="col-form-label"
                                >
                                  上傳圖片：
                                </label>
                                <div class="custom-file">
                                  <input
                                    type="file"
                                    class="custom-file-input"
                                    id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01"
                                    name="pic"
                                    required
                                  />
                                  <label
                                    class="custom-file-label"
                                    for="inputGroupFile01"
                                  >
                                    選擇檔案
                                  </label>
                                </div>
                                <div class="invalid-feedback">
                                  請選擇照片檔案
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  取消
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-warning text-white"
                                >
                                  送出評論
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal */}
                  </div>
                  <div className="d-flex flex-column">
                    <CommmentList comment={comment}></CommmentList>
                    <div
                      className="btn-toolbar justify-content-center mt-md-2"
                      role="toolbar"
                      aria-label="Toolbar with button groups"
                    >
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="Third group"
                      >
                        <button type="button" className="btn btn-primary">
                          <BsChevronBarLeft></BsChevronBarLeft>
                        </button>
                      </div>
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="First group"
                      >
                        <button type="button" className="btn btn-primary">
                          <BsChevronLeft></BsChevronLeft>
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
                          <BsChevronRight></BsChevronRight>
                        </button>
                      </div>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Third group"
                      >
                        <button type="button" className="btn btn-primary">
                          <BsChevronBarRight></BsChevronBarRight>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="pr-2 pb-2 d-flex justify-content-end text-white-50"
            href="https://www.freepik.com/vectors/background"
          >
            Background vector created by pikisuperstar - www.freepik.com
          </a>
        </div>
        <div className="recommend-sloth_big animate__animated animate__pulse">
          <img src={slothBig} alt="" />
        </div>
        <div className="recommend-sloth_small animate__animated animate__pulse">
          <img src={slothSmall} alt="" />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Comment);
