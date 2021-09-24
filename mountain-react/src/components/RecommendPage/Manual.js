import React from 'react';
import Card from './Card';
import '../../styles/article.css';
import $ from 'jquery';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { recommendURL } from '../../utils/config';
import {
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronBarRight,
} from 'react-icons/bs';

// 1 連資料庫
// 2

function Manual() {
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

  //////////////////////////資料庫連線
  useEffect(() => {
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
    // const newtags = [];
    const value = e.target.value;
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

  // 2 時間勾選按鈕存成usestate陣列
  const timeChecked = (e) => {
    const value = e.target.value;
    // console.log('value', value);
    if (!time.includes(value)) {
      return setTime([...time, value]);
      // return setTags(tags.push(value));
    } else {
      const newTags = time.filter((v) => v !== value);
      return setTime(newTags);
    }
  };

  // 3 時間tag函式
  const timeRange = (listData, time) => {
    let newArticle = [...listData];
    // console.log('time', time);
    // 處理時間區間選項
    if (time.length > 0) {
      if (time.includes('5小時內')) {
        if (time.includes('5至48小時')) {
          if (time.includes('48小時以上')) {
            newArticle = [...newArticle].filter((article) => {
              return article; //全部都選 給全部資料
            });
          } else {
            newArticle = [...newArticle].filter((article) => {
              return article.time < 2880;
            });
          }
        } else {
          if (time.includes('48小時以上')) {
            newArticle = [...newArticle].filter((article) => {
              return article.time < 300 && article.time >= 2880;
            });
          } else {
            newArticle = [...newArticle].filter((article) => {
              return article.time < 300;
            });
          }
        }
      } else {
        if (time.includes('5至48小時')) {
          if (time.includes('48小時以上')) {
            newArticle = [...newArticle].filter((article) => {
              return article.time >= 300;
            });
          } else {
            newArticle = [...newArticle].filter((article) => {
              return article.time >= 300 && article.time < 2880;
            });
          }
        } else {
          if (time.includes('48小時以上')) {
            newArticle = [...newArticle].filter((article) => {
              return article.time >= 2880;
            });
          } else {
            newArticle = [...newArticle].filter((article) => {
              return article; //全部都沒選 給全部資料
            });
          }
        }
      }
    }
    // console.log('newArticle', newArticle);
    return newArticle;
  };

  // 2 步道 勾選按鈕存成usestate陣列
  const typeChecked = (e) => {
    // const newtags = [];
    const value = e.target.value;
    // console.log('tags', tags);
    // console.log('value', value);
    if (!mtype.includes(value)) {
      return setType([...mtype, value]);
      // return setTags(tags.push(value));
    } else {
      const newTags = mtype.filter((v) => v !== value);
      return setType(newTags);
    }
  };

  // 3 步道 tag函式
  const typeTags = (listData, mtype) => {
    let newArticle = [...listData];
    // console.log('newArticle', newArticle);
    // 從目前的產品資料的標籤中過濾有包含這個標籤
    if (mtype.length > 0) {
      newArticle = [...newArticle].filter((article) => {
        let isFound = false;
        // 回傳物件中level_name包含的tags
        // console.log('article', article);
        for (let i = 0; i < mtype.length; i++) {
          if (article.mountain_type_name.includes(mtype[i])) {
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
    newArticle = timeRange(newArticle, time);
    newArticle = typeTags(newArticle, mtype);

    setResult(newArticle);
    // console.log('listData', listData);
  }, [listData, tags, season, time, mtype, setResult]);

  useEffect(() => {
    $('.recommend-level-btn').click(function () {
      $(this).toggleClass('active');
    });

    $('.recommend-season-btn').click(function () {
      $(this).toggleClass('active');
    });

    $('.recommend-time-btn').click(function () {
      $(this).toggleClass('active');
    });

    $('.recommend-mountain-type-btn').click(function () {
      $(this).toggleClass('active');
    });

    $('i').click(function () {
      $(this).toggleClass('active');
    });
  }, []);

  return (
    <div>
      <div className="container recommend-body">
        <div className="recommend-filter-wrapper">
          <h2 className="h2 recommend-h2">推薦攻略</h2>
          <table className="table recommend-table table-hover my-2 border-left border-right">
            <tbody>
              <tr>
                <th scope="row ">
                  <div className="d-flex justify-content-center mt-2 ml-1 border-right">
                    難易度
                  </div>
                </th>
                <td className="text-center">
                  <input
                    type="button"
                    value="低"
                    className="btn btn-primary recommend-filterBtn recommend-level-btn"
                    tags={tags}
                    onClick={handleChecked}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="中"
                    className="btn btn-primary recommend-filterBtn recommend-level-btn"
                    tags={tags}
                    onClick={handleChecked}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="高"
                    className="btn btn-primary recommend-filterBtn recommend-level-btn"
                    tags={tags}
                    onClick={handleChecked}
                  />
                </td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="d-flex justify-content-center mt-2 ml-1 border-right">
                    最適季節
                  </div>
                </th>
                <td className="text-center">
                  <input
                    type="button"
                    value="春季"
                    className="btn btn-primary recommend-filterBtn recommend-season-btn"
                    season={season}
                    onClick={seasonChecked}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="夏季"
                    className="btn btn-primary recommend-filterBtn recommend-season-btn"
                    season={season}
                    onClick={seasonChecked}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="秋季"
                    className="btn btn-primary recommend-filterBtn recommend-season-btn"
                    season={season}
                    onClick={seasonChecked}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="冬季"
                    className="btn btn-primary recommend-filterBtn recommend-season-btn"
                    season={season}
                    onClick={seasonChecked}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="d-flex justify-content-center mt-2 ml-1 border-right">
                    所需時間
                  </div>
                </th>
                <td className="text-center">
                  <input
                    type="button"
                    value="5小時內"
                    className="btn btn-primary recommend-filterBtn recommend-time-btn"
                    time={time}
                    onClick={timeChecked}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="5至48小時"
                    className="btn btn-primary recommend-filterBtn recommend-time-btn"
                    time={time}
                    onClick={timeChecked}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="48小時以上"
                    className="btn btn-primary recommend-filterBtn recommend-time-btn"
                    time={time}
                    onClick={timeChecked}
                  />
                </td>
                <td className="text-center"></td>
              </tr>
              <tr className="border-bottom">
                <th scope="row">
                  <div className="d-flex justify-content-center mt-2 ml-1 border-right">
                    步道類型
                  </div>
                </th>
                <td className="text-center">
                  <input
                    type="button"
                    value="郊山步道"
                    className="btn btn-primary recommend-filterBtn recommend-mountain-type-btn"
                    mtype={mtype}
                    onClick={typeChecked}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="高山步道"
                    className="btn btn-primary recommend-filterBtn recommend-mountain-type-btn"
                    mtype={mtype}
                    onClick={typeChecked}
                  />
                </td>
                <td className="text-center"></td>
                <td className="text-center"></td>
              </tr>
            </tbody>
          </table>
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
              <Card result={result}></Card>
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

export default Manual;
