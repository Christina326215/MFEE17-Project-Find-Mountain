import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BsPeopleCircle } from 'react-icons/bs';
import { withRouter } from 'react-router';
import { IMAGE_URL } from '../../utils/config';
import { useState } from 'react';
import { articlecommentURL } from '../../utils/config';
import $ from 'jquery';
import bear from '../../img/article-img/bear.png';

//====== below catch member info star ======//
import { useAuth } from '../../context/auth';
//====== below catch member info end ======//

// 使用sweetalert2彈跳視窗
import Swal from 'sweetalert2';
import axios from 'axios';

function CommmentList(props) {
  // 登入會員狀態
  const { member } = useAuth();
  // 評論資料
  const { comment } = props;
  // 檢舉modal
  const [show, setShow] = useState(false);
  // modal彈跳視窗
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // 被檢舉得內容狀態
  const [dislikeContent, setDislikeContent] = useState({});
  // 檢舉的欄位->新增檢舉狀態是3的資料表
  // const dislikeContent[0].id
  const [commentId, setCommentId] = useState('');
  const [dislikeReason, setDislikeReason] = useState('');
  const [dislikeStatus, setDislikeStatus] = useState('');
  const event = new Date(Date.now());
  const [dislikeTime, setDislikeTime] = useState(event);
  const [dislikeValid, setDislikeValid] = useState('');

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // 檢舉彈跳視窗
  const dislike = (e) => {
    if (member === null) {
      // 使用sweetalert2彈跳視窗
      Swal.fire({
        icon: 'warning',
        title: '需要先登入才能檢舉評論',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setShow(true);
      setDislikeReason('');
      const dislikeId = parseInt(e.target.id);
      // console.log('dislikeId', dislikeId);
      const dislike = comment.filter((v, i) => {
        return v.id === dislikeId;
      });
      const content = dislike[0];
      // console.log('content', content);
      setDislikeContent(content);
      // console.log('dislikeContent', dislikeContent);
      setCommentId(content.id);
      setDislikeStatus('3');
      setDislikeValid('1');
    }
  };

  // 檢舉送出資料給後端
  const changeDislike = async (e) => {
    // 檢舉資料驗證
    if (dislikeReason === '') {
      $('.reasonVal').show();
      $('.custom-select').addClass('border-danger');
      return;
    } else {
      $('.reasonVal').hide();
      $('.custom-select').removeClass('border-danger');
      $('.custom-select').addClass('border-success');
    }

    // console.log('e.target', e.target);
    e.preventDefault();
    setShow(false);
    // console.log('e.target', e.target);

    try {
      ///// 改變檢舉狀態
      await axios.post(`${articlecommentURL}/dislike`, {
        commentId,
        dislikeReason,
        dislikeStatus,
        dislikeTime,
        dislikeValid,
      });
      // console.log('dislike', dislike);

      // 使用sweetalert2彈跳視窗
      Swal.fire({
        icon: 'success',
        title: '檢舉提交成功!',
        text: '管理員會盡快審核此評論',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (e) {
      console.error(e.response);
    }
  };

  // userlevel icon判斷
  const userLevel = (level) => {
    let userLevel = [];
    switch (level) {
      case '1':
        userLevel.push(
          <i
            className="bi recommend-bi-person-circle"
            style={{ color: '#4E4E4E' }}
          >
            <BsPeopleCircle></BsPeopleCircle>
          </i>
        );
        break;
      case '2':
        userLevel.push(
          <i
            className="bi recommend-bi-person-circle"
            style={{ color: '#6DA77F' }}
          >
            <BsPeopleCircle></BsPeopleCircle>
          </i>
        );
        break;
      case '3':
        userLevel.push(
          <i
            className="bi recommend-bi-person-circle"
            style={{ color: '#FFB943' }}
          >
            <BsPeopleCircle></BsPeopleCircle>
          </i>
        );
        break;
      default:
        break;
    }
    return userLevel;
  };

  return (
    <div>
      {comment.length < 1 ? (
        <div
          className="d-flex align-items-center p-3"
          style={{ background: '#eeee', borderRadius: '10px' }}
        >
          <div
            className="recommend-bearwrap"
            style={{ width: 100, height: 100 }}
          >
            <img className="recommend-bear" src={bear} alt="" />
          </div>
          <h5 className="ml-5">目前暫無評論...快寫下第一個評論吧！</h5>
        </div>
      ) : (
        ''
      )}
      {comment.map((comment, i) => {
        return (
          <div key={i}>
            <div className="recommend-commentBox">
              <div className="d-flex flex-column justify-content-between col-lg-9 px-0">
                <div className="d-flex">
                  <div className="recommend-memberLevel1">
                    {userLevel(comment.user_level)}
                  </div>
                  <div className="">
                    {comment.user_level === '1' ? (
                      <div
                        className="recommend-memberLevel1 d-flex"
                        style={{ color: '#4E4E4E' }}
                      >
                        <p className="recommend-body-content-bold mt-1 mb-0 ml-1">
                          {comment.users_name}
                        </p>
                        <p className="recommend-body-content-bold mt-1 mb-0 ml-3">
                          肉腳
                        </p>
                      </div>
                    ) : (
                      ''
                    )}
                    {comment.user_level === '2' ? (
                      <div
                        className="recommend-memberLevel1 d-flex"
                        style={{ color: '#6DA77F' }}
                      >
                        <p className="recommend-body-content-bold mt-1 mb-0 ml-1">
                          {comment.users_name}
                        </p>
                        <p className="recommend-body-content-bold mt-1 mb-0 ml-3">
                          山友
                        </p>
                      </div>
                    ) : (
                      ''
                    )}
                    {comment.user_level === '3' ? (
                      <div
                        className="recommend-memberLevel1 d-flex"
                        style={{ color: '#FFB943' }}
                      >
                        <p className="recommend-body-content-bold mt-1 mb-0 ml-1">
                          {comment.users_name}
                        </p>
                        <p className="recommend-body-content-bold mt-1 mb-0 ml-3">
                          山神
                        </p>
                      </div>
                    ) : (
                      ''
                    )}
                    <p className="recommend-body-content-small m-0 ml-1">
                      {comment.time}
                    </p>
                  </div>
                </div>
                <p className="m-0"> {comment.content}</p>
              </div>
              <div className="d-flex justify-content-end ml-auto col-lg-3 px-0">
                <div className="recommend-commentPic">
                  <img
                    className="img-fluid"
                    src={`${IMAGE_URL}/img/comment-img/${comment.pic}`}
                    alt=""
                  />
                </div>
                <div className="mx-2 d-flex align-items-center">
                  <Button
                    variant="outline-secondary"
                    id={comment.id}
                    onClick={dislike}
                  >
                    檢舉
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* 按檢舉後狀態變3審核中 後台才能調整審核狀態 */}
      {/* 檢舉modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>檢舉評論</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <p className="recommend-body recommend-body-content">
              確定要檢舉此則評論嗎？
            </p>
            <input
              name="comments_id"
              className="form-control"
              value={commentId}
              readOnly
              style={{ display: 'none' }}
            ></input>
            <textarea
              style={{ height: 120 }}
              className="form-control"
              value={dislikeContent.content}
              readOnly
            ></textarea>
            <p className="recommend-body recommend-body-content mt-3">
              請選擇檢舉原因：
            </p>
            <div className="input-group mb-3 " name="dislike_reason">
              <select
                className="custom-select"
                id="inputGroupSelect01"
                value={dislikeReason}
                onChange={(e) => {
                  setDislikeReason(e.target.value);
                }}
              >
                <option value="">檢舉原因...</option>
                <option value="1">垃圾內容</option>
                <option value="2">騷擾內容</option>
              </select>
              <div
                id="validationServer03Feedback"
                className="invalid-feedback reasonVal"
              >
                請選擇檢舉原因
              </div>
            </div>
            <input
              name="dislike_status"
              className="form-control"
              value={dislikeStatus}
              style={{ display: 'none' }}
              readOnly
            ></input>
            <input
              id="time"
              className="form-control"
              value={dislikeTime}
              style={{ display: 'none' }}
              readOnly
            />
            <input
              name="dislike_valid"
              className="form-control"
              value={dislikeValid}
              style={{ display: 'none' }}
              readOnly
            ></input>
            <p className="text-danger recommend-body-content-small">
              提醒！多次惡意檢舉，可能會被列入黑名單
            </p>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            取消
          </Button>
          <Button variant="danger" onClick={changeDislike}>
            確定檢舉
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default withRouter(CommmentList);
