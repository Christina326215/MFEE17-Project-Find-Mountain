import React from 'react';
import { BsPeopleCircle } from 'react-icons/bs';
import { withRouter } from 'react-router';
import { IMAGE_URL } from '../../utils/config';

function CommmentList(props) {
  // 評論資料
  const { comment } = props;

  return (
    <div>
      {comment.map((comment, i) => {
        return (
          <div key={i} className="recommend-commentBox">
            <div className="d-flex flex-column justify-content-between">
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
            <div className="d-flex ml-auto">
              <div className="recommend-commentPic">
                <img
                  className="img-fluid"
                  src={`${IMAGE_URL}/img/comment-img/${comment.pic}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default withRouter(CommmentList);
