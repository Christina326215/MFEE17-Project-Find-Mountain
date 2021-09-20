import React from 'react';
import axios from 'axios';
import { BsPeopleCircle } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { commentURL, IMAGE_URL } from '../../utils/config';

function CommmentList(props) {
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

  useEffect(() => {
    async function commentData() {
      try {
        const commentData = await axios.get(commentURL);
        const commentTotalData = commentData.data;
        const id = Number(props.match.params.id);
        // console.log('commentTotalData', commentTotalData);

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
