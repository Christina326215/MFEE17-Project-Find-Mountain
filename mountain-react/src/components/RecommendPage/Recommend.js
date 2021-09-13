import React from 'react';
import '../../styles/article.css';
import { Link } from 'react-router-dom';
import bear from '../../img/article-img/bear.png';

function Recommend() {
  return (
    <>
      <div className="container recommend-body">
        <div className="recommend-filter-wrapper">
          <h2 className="recommend-h2">推薦攻略</h2>
          <div className="recommend-chatbg">
            <div className="recommend-bg-filter mb-5">
              <div className="recommend-stepbox mb-5">
                <div className="recommend-qa animate__animated animate__zoomIn">
                  <div className="recommend-bearwrap">
                    <img className="recommend-bear" src={bear} alt="" />
                  </div>
                  <div className="recommend-chatbox">
                    <div className="recommend-chatBoxText">
                      嗨 ～ 我是找靠山的吉祥物「熊熊」，
                      <br />
                      我可以幫助你找到合適的路線！
                      <br />
                      目前已經知道自己適合的路線了嗎？
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end recommend-firstQ">
                <Link to="/recommend/manual" className="btn btn-primary mr-2">
                  是的，我想要自行篩選
                </Link>
                <Link to="/recommend/bear" className="btn btn-primary mr-2">
                  不太清楚，請熊熊幫忙
                </Link>
              </div>
              <a
                className="p-2 text-right text-white-50"
                href="https://www.freepik.com/vectors/tree"
              >
                Tree vector created by upklyak - www.freepik.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recommend;
