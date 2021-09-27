import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BsPeopleCircle } from 'react-icons/bs';
import { withRouter } from 'react-router';
import { IMAGE_URL } from '../../utils/config';
import { useState } from 'react';
// 使用sweetalert2彈跳視窗
import Swal from 'sweetalert2';

function CommmentList(props) {
  // 評論資料
  const { comment } = props;
  // 檢舉modal
  const [show, setShow] = useState(false);
  // modal彈跳視窗
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // 被檢舉得內容狀態
  const [dislikeContent, setDislikeContent] = useState({});
  // 檢舉的欄位->新增檢舉狀態是3的資料表
  const [commentId, setCommentId] = useState('');
  const [dislikeReason, setDislikeReason] = useState('');
  const [dislikeStatus, setDislikeStatus] = useState('');
  const event = new Date(Date.now());
  const [dislikeTime, setDislikeTime] = useState(event);
  const [dislikeValid, setDislikeValid] = useState('1');

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // 檢舉
  const dislike = (e) => {
    setShow(true);
    const dislikeId = parseInt(e.target.id);
    // console.log('dislikeId', dislikeId);
    const dislike = comment.filter((v, i) => {
      return v.id === dislikeId;
    });
    const content = dislike[0];
    console.log('content', content);
    setDislikeContent(content);
    console.log('dislikeContent', dislikeContent);
  };

  return (
    <div>
      {comment.map((comment, i) => {
        return (
          <>
            <div key={i} className="recommend-commentBox">
              <div className="d-flex flex-column justify-content-between col-lg-9 px-0">
                <div className="d-flex">
                  <div className="recommend-memberLevel1">
                    {comment.user_level === '1' ? (
                      <i
                        className="bi recommend-bi-person-circle"
                        style={{ color: '#4E4E4E' }}
                      >
                        <BsPeopleCircle></BsPeopleCircle>
                      </i>
                    ) : (
                      ''
                    )}
                    {comment.user_level === '2' ? (
                      <i
                        className="bi recommend-bi-person-circle"
                        style={{ color: '#6DA77F' }}
                      >
                        <BsPeopleCircle></BsPeopleCircle>
                      </i>
                    ) : (
                      ''
                    )}
                    {comment.user_level === '3' ? (
                      <i
                        className="bi recommend-bi-person-circle"
                        style={{ color: '#FFB943' }}
                      >
                        <BsPeopleCircle></BsPeopleCircle>
                      </i>
                    ) : (
                      ''
                    )}
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
          </>
        );
      })}
      {/* FIXME:沒選檢舉原因驗證 */}
      {/* FIXME:前台不顯示未通過的評論 */}
      {/* 按檢舉後狀態變3審核中 後台才能調整審核狀態 */}
      {/* 檢舉modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>檢舉評論</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="recommend-body recommend-body-content">
            確定要檢舉此則評論嗎？
          </p>
          <input
            name="comments_id"
            className="form-control"
            value={dislikeContent.id}
            // onChange={setCommentId(dislikeContent.id)}
          ></input>
          <textarea
            style={{ height: 120 }}
            className="form-control"
            value={dislikeContent.content}
            disabled
          ></textarea>
          <p className="recommend-body recommend-body-content mt-3">
            請選擇檢舉原因：
          </p>
          <div class="input-group mb-3" name="dislike_reason">
            <select
              class="custom-select"
              id="inputGroupSelect01"
              value={dislikeReason}
              // onChange={(e) => {
              //   setDislikeReason(e.target.value);
              // }}
            >
              <option value="">檢舉原因...</option>
              <option value="1">垃圾內容</option>
              <option value="2">騷擾內容</option>
            </select>
          </div>
          <input
            name="dislike_status"
            className="form-control"
            value="3"
            // onChange={(e) => {
            //   setDislikeStatus(e.target.value);
            // }}
          ></input>
          <input
            id="time"
            className="form-control"
            value={dislikeTime}
            // onChange={(e) => {
            //   setDislikeTime(e.target.value);
            // }}
            disabled
          />
          <p className="text-danger recommend-body-content-small">
            提醒！多次惡意檢舉，可能會被列入黑名單
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            取消
          </Button>
          <Button variant="danger" onClick={handleClose}>
            確定檢舉
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default withRouter(CommmentList);
