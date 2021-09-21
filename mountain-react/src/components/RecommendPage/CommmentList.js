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
