import React from 'react';
import '../../styles/article.css';
import $ from 'jquery';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bear from '../../img/article-img/bear.png';

function Bear() {
  useEffect(() => {
    // 按鈕單選
    $('.recommend-go-btn').click(function () {
      $(this).toggleClass('active');
      $(this).siblings().removeClass('active');
      $('.recommend-step2').show();
    });

    $('.recommend-season-btn').click(function () {
      $(this).toggleClass('active');
      $(this).siblings().removeClass('active');
      $('.recommend-step3').show();
    });

    $('.recommend-level-btn').click(function () {
      $(this).toggleClass('active');
      $(this).siblings().removeClass('active');
      $('.recommend-step4').show();
    });
  }, []);
  return (
    <div>
      <div class="container recommend-body">
        <div class="recommend-wrapper">
          <h2 class="h2">推薦攻略</h2>
          <h4 class="recommend-body-content-big-bold">篩選路線</h4>
          <div class="recommend-chatbg">
            <div class="recommend-bg-filter">
              <div class="recommend-stepbox recommend-step1">
                <div class="recommend-qa animate__animated animate__fadeInUp">
                  <div class="recommend-bearwrap">
                    <img class="recommend-bear" src={bear} alt="" />
                  </div>
                  <div class="recommend-chatbox">
                    <div class="recommend-chatBoxText">
                      嗨 ～ 我是找靠山的吉祥物「熊熊」。
                      <br />
                      讓我來幫你找最適合你的爬山路線吧！
                    </div>
                  </div>
                </div>
                <div
                  class="recommend-btngroup"
                  onClick={() => {
                    window.scrollTo({
                      top: 270,
                      left: 0,
                      behavior: 'smooth',
                    });
                  }}
                >
                  <input
                    type="button"
                    class="btn btn-primary recommend-go-btn"
                    value="Go"
                  />
                </div>
              </div>
              <div class="recommend-stepbox recommend-step2">
                <div class="recommend-qa animate__animated animate__fadeInUp">
                  <div class="recommend-bearwrap">
                    <img class="recommend-bear" src={bear} alt="" />
                  </div>
                  <div class="recommend-chatbox">
                    <div class="recommend-chatBoxText">
                      最喜歡活動的季節是？
                    </div>
                  </div>
                </div>
                <div
                  class="recommend-btngroup"
                  onClick={() => {
                    window.scrollTo({
                      top: 620,
                      left: 0,
                      behavior: 'smooth',
                    });
                  }}
                >
                  <input
                    type="button"
                    value="春季"
                    class="recommend-season-btn btn btn-primary"
                  />
                  <input
                    type="button"
                    value="夏季"
                    class="recommend-season-btn btn btn-primary"
                  />
                  <input
                    type="button"
                    value="秋季"
                    class="recommend-season-btn btn btn-primary"
                  />
                  <input
                    type="button"
                    value="冬季"
                    class="recommend-season-btn btn btn-primary"
                  />
                </div>
              </div>
              <div class="recommend-stepbox recommend-step3">
                <div class="recommend-qa animate__animated animate__fadeInUp">
                  <div class="recommend-bearwrap">
                    <img class="recommend-bear" src={bear} alt="" />
                  </div>
                  <div class="recommend-chatbox">
                    <div class="recommend-chatBoxText">
                      平時會去爬山的頻率是？
                    </div>
                  </div>
                </div>
                <div
                  class="recommend-btngroup"
                  onClick={() => {
                    window.scrollTo({
                      top: 1000,
                      left: 0,
                      behavior: 'smooth',
                    });
                  }}
                >
                  <input
                    type="button"
                    value="半年一次以上"
                    class="recommend-level-btn btn btn-primary"
                  />
                  <input
                    type="button"
                    value="2~3個月爬一次"
                    class="recommend-level-btn btn btn-primary"
                  />
                  <input
                    type="button"
                    value="每個月都爬"
                    class="recommend-level-btn btn btn-primary"
                  />
                </div>
              </div>
              <div class="recommend-stepbox recommend-step4">
                <div class="recommend-qa animate__animated animate__fadeInUp">
                  <div class="recommend-bearwrap">
                    <img class="recommend-bear" src={bear} alt="" />
                  </div>
                  <div class="recommend-recommend">
                    <div class="recommend-firstchatbox">
                      <div class="recommend-chatBoxText">
                        太棒了！ 下面這些是推薦給你的路線！
                      </div>
                    </div>
                    <div class="recommend-secondchatbox">
                      <div class="recommend-chatBoxText">快去看看吧！</div>
                    </div>
                  </div>
                </div>
                <div class="recommend-btngroup">
                  <Link class="btn btn-primary" to="/recommend/bear/result">
                    查看路線
                  </Link>
                </div>
              </div>
              <a
                class="p-2 text-right text-white-50"
                href="https://www.freepik.com/vectors/tree"
              >
                Tree vector created by upklyak - www.freepik.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bear;
