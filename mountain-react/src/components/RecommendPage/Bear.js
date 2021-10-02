import React from 'react';
import '../../styles/article.css';
import $ from 'jquery';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import bear from '../../img/article-img/bear.png';
import { useState } from 'react';
import axios from 'axios';
import { recommendURL } from '../../utils/config';
import Card from './Card';

function Bear() {
  // 原始資料庫狀態
  const [listData, setListData] = useState([
    {
      id: 0,
      name: '',
      status: 0,
      city: '',
      season: '0',
      time: 0,
      height: 0,
      level: 0,
      distance: 0,
      mountain_type: 0,
      apply: 0,
      gap: 0,
      road_status: '',
      traffic: '',
      pic: '',
      content: '',
      level_name: '',
      mountain_type_name: '',
      apply_name: '',
    },
  ]);
  // 篩選過後資料狀態
  const [result, setResult] = useState([]);
  // 1 等級tag篩選
  const [tags, setTags] = useState([]);
  // 1 季節tag篩選
  const [season, setSeason] = useState([]);
  // 1 時間tag篩選
  const [time, setTime] = useState([]);
  // 1 步道種類tag篩選
  const [mtype, setType] = useState([]);
  // 當頁文章星星評分
  const [star, setStar] = useState(0);

  useEffect(() => {
    //資料庫連線
    async function recommendData() {
      try {
        const recommendData = await axios.get(recommendURL);
        // console.log(recommendData.data); //for check
        setListData(recommendData.data);
      } catch (e) {
        console.log(e);
      }
    }
    recommendData();
  }, []);

  // 2 等級勾選按鈕存成usestate陣列
  const handleChecked = (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.recommend-step2').show();
    // const newtags = [];
    const value = e.target.name;
    // console.log('tags', tags);
    // console.log('value', value);
    if (!tags.includes(value)) {
      return setTags([...tags, value]);
      // return setTags(tags.push(value));
    } else {
      const newTags = tags.filter((v) => v !== value);
      return setTags(newTags);
    }
  };

  // 3 等級tag函式
  const handleTags = (listData, tags) => {
    let newArticle = [...listData];
    // console.log('newArticle', newArticle);
    // 從目前的產品資料的標籤中過濾有包含這個標籤

    if (tags.length > 0) {
      // tags ["高", "中", "低"]
      newArticle = [...newArticle].filter((article) => {
        let isFound = false;
        // 回傳物件中level_name包含的tags
        // console.log('article', article);
        for (let i = 0; i < tags.length; i++) {
          if (article.level_name.includes(tags[i])) {
            // return article;
            return true;
          }
        }
        return isFound;
      });
    }
    return newArticle;
  };

  // 2 季節勾選按鈕存成usestate陣列
  const seasonChecked = (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.recommend-step4').show();
    const value = e.target.value;
    if (!season.includes(value)) {
      return setSeason([...season, value]);
      // return setTags(tags.push(value));
    } else {
      const newTags = season.filter((v) => v !== value);
      return setSeason(newTags);
    }
  };

  // 3 季節tag函式
  const seasonTags = (listData, season) => {
    // console.log('season', season);
    // console.log('listData', listData);
    // 原始資料
    let newArticle = [...listData];
    if (season.length > 0) {
      // tags
      newArticle = [...newArticle].filter((article) => {
        let isFound = false;
        // 回傳物件中level_name包含的tags
        // console.log('111article', article);
        for (let i = 0; i < season.length; i++) {
          if (article.season.includes(season[i])) {
            // return article;
            return true;
          }
        }
        return isFound;
      });
    }
    return newArticle;
  };

  // 4 設定執行狀態
  useEffect(() => {
    let newArticle = [];
    // 處理勾選標記
    newArticle = handleTags(listData, tags);
    newArticle = seasonTags(newArticle, season);
    // console.log('112newArticle', newArticle);

    setResult(newArticle);
  }, [listData, tags, season, setResult]);

  return (
    <div>
      <div className="container recommend-body">
        <div className="recommend-wrapper">
          <h2 className="h2">推薦攻略</h2>
          <h4 className="recommend-body-content-big-bold">篩選路線</h4>
          <div className="recommend-chatbg">
            <div className="recommend-bg-filter">
              <div className="recommend-stepbox recommend-step1">
                <div className="recommend-qa animate__animated animate__fadeInUp">
                  <div className="recommend-bearwrap">
                    <img className="recommend-bear" src={bear} alt="" />
                  </div>
                  <div className="recommend-chatbox">
                    <div className="recommend-chatBoxText">
                      嗨 ～ 我是找靠山的吉祥物「熊熊」。
                      <br />
                      讓我來幫你找最適合你的爬山路線吧！
                    </div>
                  </div>
                </div>
                <div
                  className="recommend-btngroup"
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
                    className="btn btn-primary recommend-go-btn"
                    value="Go"
                    onClick={(e) => {
                      $(e.currentTarget).toggleClass('active');
                      $('.recommend-step3').show();
                    }}
                  />
                </div>
              </div>
              <div className="recommend-stepbox recommend-step3">
                <div className="recommend-qa animate__animated animate__fadeInUp">
                  <div className="recommend-bearwrap">
                    <img className="recommend-bear" src={bear} alt="" />
                  </div>
                  <div className="recommend-chatbox">
                    <div className="recommend-chatBoxText">
                      平時會去爬山的頻率是？
                    </div>
                  </div>
                </div>
                <div
                  className="recommend-btngroup"
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
                    value="半年一次以上"
                    name="低"
                    className="recommend-level-btn btn btn-primary"
                    tags={tags}
                    onClick={handleChecked}
                  />
                  <input
                    type="button"
                    value="2~3個月爬一次"
                    name="中"
                    className="recommend-level-btn btn btn-primary"
                    tags={tags}
                    onClick={handleChecked}
                  />
                  <input
                    type="button"
                    value="每個月都爬"
                    name="高"
                    className="recommend-level-btn btn btn-primary"
                    tags={tags}
                    onClick={handleChecked}
                  />
                </div>
              </div>
              <div className="recommend-stepbox recommend-step2">
                <div className="recommend-qa animate__animated animate__fadeInUp">
                  <div className="recommend-bearwrap">
                    <img className="recommend-bear" src={bear} alt="" />
                  </div>
                  <div className="recommend-chatbox">
                    <div className="recommend-chatBoxText">
                      最喜歡活動的季節是？
                    </div>
                  </div>
                </div>
                <div
                  className="recommend-btngroup"
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
                    value="春季"
                    className="recommend-season-btn btn btn-primary"
                    season={season}
                    onClick={seasonChecked}
                  />
                  <input
                    type="button"
                    value="夏季"
                    className="recommend-season-btn btn btn-primary"
                    season={season}
                    onClick={seasonChecked}
                  />
                  <input
                    type="button"
                    value="秋季"
                    className="recommend-season-btn btn btn-primary"
                    season={season}
                    onClick={seasonChecked}
                  />
                  <input
                    type="button"
                    value="冬季"
                    className="recommend-season-btn btn btn-primary"
                    season={season}
                    onClick={seasonChecked}
                  />
                </div>
              </div>
              <div className="recommend-stepbox recommend-step4">
                <div className="recommend-qa animate__animated animate__fadeInUp">
                  <div className="recommend-bearwrap">
                    <img className="recommend-bear" src={bear} alt="" />
                  </div>
                  <div className="recommend-recommend">
                    <div className="recommend-firstchatbox">
                      <div className="recommend-chatBoxText">
                        太棒了！ 下面這些是推薦給你的路線！
                      </div>
                    </div>
                    <div className="recommend-secondchatbox">
                      <div className="recommend-chatBoxText">快去看看吧！</div>
                    </div>
                  </div>
                </div>
                <div className="recommend-btngroup">
                  <div className="recommend-btngroup">
                    <input
                      type="button"
                      className="btn btn-primary recommend-go-btn"
                      value="查看路線"
                      onClick={(e) => {
                        $(e.currentTarget).toggleClass('active');
                        window.scrollTo({
                          top: 1500,
                          left: 0,
                          behavior: 'smooth',
                        });
                      }}
                    />
                  </div>
                </div>
                <Card result={result} star={star} setStar={setStar}></Card>
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
    </div>
  );
}

export default Bear;
