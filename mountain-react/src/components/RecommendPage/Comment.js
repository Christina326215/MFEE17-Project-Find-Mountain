import React from 'react';
import '../../styles/article.css';
import { withRouter } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { articlecommentURL } from '../../utils/config';
import CommmentList from './CommmentList';
import slothBig from '../../img/article-img/sloth_big.svg';
import slothSmall from '../../img/article-img/sloth_small.svg';
// 使用sweetalert2彈跳視窗
import Swal from 'sweetalert2';
import $ from 'jquery';
import { Button, Modal } from 'react-bootstrap';
// import { IMAGE_URL } from '../../utils/config';
import { BsPlusSquare } from 'react-icons/bs';

//====== below catch member info star ======//
import { useAuth } from '../../context/auth';
//====== below catch member info end ======//

function Comment(props) {
  // 登入會員狀態
  const { member } = useAuth();
  // 文章資料
  const { detail } = props;
  const { id } = useParams();
  // console.log('id', id);
  // console.log('detail111', detail);

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
  // 新增評論欄位
  const [userID, setUserID] = useState('');
  const [articleID, setArticleID] = useState(id);
  const [content, setContent] = useState('');
  const [pic, setPic] = useState('');
  const event = new Date(Date.now());
  const [time, setTime] = useState(event);
  const [valid, setValid] = useState('1');
  // modal顯示狀態
  const [show, setShow] = useState(false);
  // input上傳照片檔案顯示檔名
  const [fileSrc, setFileSrc] = useState('請選擇檔案');
  // 控制modal的函示
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const handleShow = () => {
    if (member === null) {
      // 使用sweetalert2彈跳視窗
      Swal.fire({
        icon: 'warning',
        title: '需要先登入才能新增評論',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setShow(true);
      // 重新點擊新增評論 資料清空...
      // setUserID('');
      setContent('');
      setPic('');
      setFileSrc('請選擇檔案');
    }
  };

  // 新增評論資料庫
  const InsertComment = async (e) => {
    // console.log('member.id', member.id);
    setUserID(member.id);
    // 評論資料驗證
    if (content === '') {
      $('.contentVal').show();
      $('textarea').addClass('border-danger');
      if (pic === '') {
        $('.picVal').show();
        $('.custom-file-label').addClass('border-danger');
        return;
      } else {
        $('.picVal').hide();
        $('.custom-file-label').removeClass('border-danger');
        $('.custom-file-label').addClass('border-success');
        return;
      }
    } else {
      $('.contentVal').hide();
      $('textarea').removeClass('border-danger');
      $('textarea').addClass('border-success');
      if (pic === '') {
        $('.picVal').show();
        $('.custom-file-label').addClass('border-danger');
        return;
      } else {
        $('.picVal').hide();
        $('.custom-file-label').addClass('border-success');
      }
    }

    // setShow(false); // 關閉彈跳視窗
    // handleClose();
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append('userID', userID);
      formData.append('articleID', articleID);
      formData.append('content', content);
      formData.append('pic', pic);
      formData.append('time', time);
      formData.append('valid', valid);
      let response = await axios.post(`${articlecommentURL}/insert`, formData);
      console.log('response', response);
      setShow(false); // 關閉彈跳視窗

      // 使用sweetalert2彈跳視窗
      Swal.fire({
        icon: 'success',
        title: '評論新增成功!',
        // text: '管理員會盡快審核此評論',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (e) {
      console.error(e.response);
    }
  };

  // 評論資料連線
  useEffect(() => {
    // FIXME: 沒登入的跳轉頁面
    async function commentData() {
      try {
        const commentData = await axios.get(articlecommentURL);
        const commentTotalData = commentData.data;
        const id = Number(props.match.params.id);
        // 全部資料用find尋找id一樣的資料
        const newcommentDetail = commentTotalData.filter((v) => {
          return v.article_id === id && v.dislike_status !== 1;
        });
        // console.log('newcommentDetail', newcommentDetail);

        if (newcommentDetail) setComment(newcommentDetail);
      } catch (e) {
        console.log(e);
      }
    }
    commentData();
  }, [props.match.params.id, show]);

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
                    {/* ----- react bs modal btn----- */}
                    <Button
                      className="btn btn-warning mb-lg-3 mb-md-2 text-white"
                      variant="primary"
                      onClick={handleShow}
                    >
                      新增評論
                      <BsPlusSquare className="ml-2 mb-1 bi recommend-bi-plus-square"></BsPlusSquare>
                    </Button>

                    {/* Modal */}
                    {/* ----- react bs modal ----- */}
                    <Modal size="lg" show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>新增評論</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {/* <form onSubmit={InsertComment}> */}
                        <form className="needs-validation" novalidate>
                          <div className="form-group">
                            <label
                              htmlFor="articleName"
                              className="col-form-label"
                            >
                              文章名稱：
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="articleName"
                              value={detail.name}
                              disabled
                            />
                          </div>
                          <div
                            className="form-group"
                            style={{ display: 'none' }}
                          >
                            <label
                              htmlFor="articleID"
                              className="col-form-label"
                            >
                              articleID：
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="articleID"
                              value={articleID}
                              onChange={(e) => {
                                setArticleID(e.target.value);
                              }}
                              disabled
                            />
                          </div>
                          <div
                            className="form-group"
                            style={{ display: 'none' }}
                          >
                            <label htmlFor="userID" className="col-form-label">
                              userID：
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="userID"
                              value={userID}
                              readOnly
                            />
                          </div>
                          <div className="form-group contentWrap">
                            <label htmlFor="content" className="col-form-label">
                              評論內容：
                            </label>
                            <textarea
                              type="text"
                              className="form-control"
                              id="content"
                              placeholder="請留下您想輸入的評論內容．．．留言不得超過100字"
                              value={content}
                              onChange={(e) => {
                                setContent(e.target.value);
                              }}
                              maxlength="100"
                              required
                            ></textarea>
                            <div
                              id="validationServer03Feedback"
                              className="invalid-feedback contentVal"
                            >
                              請填寫評論
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="inputGroupFile01"
                              className="col-form-label"
                            >
                              上傳圖片：
                            </label>
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input updatePic"
                                id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01"
                                name="pic"
                                onChange={(e) => {
                                  setPic(e.target.files[0]);
                                  // 上傳檔案顯示檔名
                                  setFileSrc(e.target.files[0].name);
                                }}
                                required
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="inputGroupFile01"
                              >
                                {fileSrc}
                              </label>
                            </div>
                            <div
                              id="validationServer03Feedback"
                              className="invalid-feedback contentVal picVal"
                            >
                              請選擇照片
                            </div>
                          </div>
                          <div
                            className="form-group"
                            style={{ display: 'none' }}
                          >
                            <label htmlFor="time" className="col-form-label">
                              評論時間：
                            </label>
                            <input
                              id="time"
                              className="form-control"
                              value={time}
                              onChange={(e) => {
                                setTime(e.target.value);
                              }}
                              disabled
                            />
                          </div>
                          <div
                            className="form-group"
                            style={{ display: 'none' }}
                          >
                            <label
                              htmlFor="message-text"
                              className="col-form-label"
                            >
                              審查狀態：
                            </label>
                            <input
                              className="form-control"
                              value={valid}
                              onChange={(e) => {
                                setValid(e.target.value);
                              }}
                              disabled
                            />
                          </div>
                        </form>
                        {/* ////react bootstrap */}
                        {/* <CommentForm></CommentForm> */}
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          取消
                        </Button>
                        <Button variant="primary" onClick={InsertComment}>
                          送出評論
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    {/* ----- react bs modal ----- */}
                  </div>
                  <div className="d-flex flex-column">
                    <CommmentList comment={comment}></CommmentList>
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
