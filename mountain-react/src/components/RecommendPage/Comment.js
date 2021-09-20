import React from 'react';
import '../../styles/article.css';
import { withRouter } from 'react-router';
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
  // const [comment, setComment] = useState([
  //   {
  //     id: 0,
  //     pic: '',
  //     content: '',
  //     time: '',
  //     user_id: 0,
  //     article_id: 0,
  //     valid: 0,
  //     users_id: 0,
  //     users_name: '',
  //     article_name: '',
  //   },
  // ]);

  // useEffect(() => {
  //   async function commentData() {
  //     try {
  //       const commentData = await axios.get(commentURL);
  //       //   console.log('commentData.data', commentData.data);
  //       const commentTotalData = commentData.data;
  //       const id = Number(props.match.params.id);
  //       //   console.log('id', id);

  //       // 全部資料用find尋找id一樣的資料
  //       const newcommentDetail = commentTotalData.find((v) => {
  //         return v.article_id === id;
  //       });
  //       console.log('newcommentDetail', newcommentDetail);

  //       if (newcommentDetail) setComment(newcommentDetail);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   commentData();
  // }, [props.match.params.id]);

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
                      <div className="modal-dialog">
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
                                  value="會員登入後才帶入資料"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="message-text"
                                  className="col-form-label"
                                >
                                  評論訊息：
                                </label>
                                <textarea
                                  className="form-control"
                                  id="message-text"
                                ></textarea>
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
                    <CommmentList></CommmentList>
                    {/* {comment.map((comment, i) => {
                      return (
                        <div className="recommend-commentBox">
                          <div className="d-flex flex-column justify-content-between">
                            <div className="d-flex">
                              <div className="recommend-memberLevel1">
                                <i className="bi recommend-bi-person-circle">
                                  <BsPeopleCircle></BsPeopleCircle>
                                </i>
                              </div>
                              <div className="">
                                <div className="recommend-memberLevel1">
                                  <p className="recommend-body-content-bold mt-1 mb-0 ml-1">
                                    {comment.users_name}
                                  </p>
                                </div>
                                <p className="recommend-body-content-small m-0 ml-1">
                                  2021-08-18 14:21
                                </p>
                              </div>
                            </div>
                            <p className="m-0">這裡風景好美～</p>
                          </div>
                          <div className="d-flex ml-auto">
                            <div className="recommend-commentPic">
                              <img
                                className="img-fluid"
                                src={xiangshan}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })} */}

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
