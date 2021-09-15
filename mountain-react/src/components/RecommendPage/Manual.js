import React from 'react';
import Card from './Card';
import '../../styles/article.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useEffect } from 'react';
import { useState } from 'react';
import level from '../../img/article-img/level_low.svg';
import axios from 'axios';
import { recommendURL } from '../../utils/config';
import sevenstar from '../../img/article-img/sevenstar.jpeg';
import xiangshan from '../../img/article-img/xiangshan.jpeg';
import { FaShoePrints } from 'react-icons/fa';
import { BsHeartFill } from 'react-icons/bs';
import {
  BsStarFill,
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronBarRight,
} from 'react-icons/bs';

function Manual() {
  const [listData, setListData] = useState([]);

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

    //////////////////////////
    async function recommendData() {
      try {
        const recommendData = await axios.get(recommendURL);
        console.log(recommendData.data); //for check
        setListData(recommendData.data);
      } catch (e) {
        console.log(e);
      }
    }
    recommendData();
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
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="中"
                    className="btn btn-primary recommend-filterBtn recommend-level-btn"
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="高"
                    className="btn btn-primary recommend-filterBtn recommend-level-btn"
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
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="夏季"
                    className="btn btn-primary recommend-filterBtn recommend-season-btn"
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="秋季"
                    className="btn btn-primary recommend-filterBtn recommend-season-btn"
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="冬季"
                    className="btn btn-primary recommend-filterBtn recommend-season-btn"
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
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="2天內"
                    className="btn btn-primary recommend-filterBtn recommend-time-btn"
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="2天以上"
                    className="btn btn-primary recommend-filterBtn recommend-time-btn"
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
                  />
                </td>
                <td className="text-center">
                  <input
                    type="button"
                    value="高山步道"
                    className="btn btn-primary recommend-filterBtn recommend-mountain-type-btn"
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
              <Card></Card>
              <Card></Card>
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
