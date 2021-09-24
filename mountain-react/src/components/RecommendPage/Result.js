import React from 'react';
import '../../styles/article.css';
import Card from './Card';
import $ from 'jquery';
import { useEffect } from 'react';
import bear from '../../img/article-img/bear.png';
import {
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronBarRight,
} from 'react-icons/bs';

function Result() {
  useEffect(() => {
    $('i').click(function () {
      $(this).toggleClass('active');
    });
  }, []);
  return (
    <div>
      <div className="container recommend-body">
        <div className="recommend-filter-wrapper mb-5">
          <h2 className="recommend-h2">推薦攻略</h2>
          <div className="recommend-chatbg">
            <div className="recommend-bg-filter">
              <div className="recommend-stepbox mb-5">
                <div className="recommend-qa animate__animated animate__zoomIn">
                  <div className="recommend-bearwrap">
                    <img className="recommend-bear" src={bear} alt="" />
                  </div>
                  <div className="recommend-chatbox">
                    <div className="recommend-chatBoxText">
                      哇～謝謝你的回答，
                      <br />
                      下面這些是推薦給你的專屬路線呦！
                      <br />
                      一起來了解山的美麗吧！
                    </div>
                  </div>
                </div>
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
      <div className="recommend-recommendbg">
        <div className="recommend-filter">
          <div className="container recommend-body">
            <div className="recommend-bg-wrapper">
              <h2 className="recommend-body-content-big-bold recommend-inline">
                推薦路線
              </h2>
              <p className="recommend-inline ml-2">9筆資料</p>
              {/* <Card></Card> */}
              <div
                className="btn-toolbar justify-content-center"
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
          <a
            className="pr-2 pb-2 d-flex justify-content-end text-white-50"
            href="https://www.freepik.com/vectors/background"
          >
            Background vector created by pikisuperstar - www.freepik.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Result;
