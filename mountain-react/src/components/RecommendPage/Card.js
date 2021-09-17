import React from 'react';
import '../../styles/article.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { recommendURL, IMAGE_URL } from '../../utils/config';
import level from '../../img/article-img/level_low.svg';
import axios from 'axios';
import { FaShoePrints } from 'react-icons/fa';
import { BsHeartFill } from 'react-icons/bs';
import {
  BsStarFill,
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronBarRight,
} from 'react-icons/bs';

function Card(props) {
  const [detail, setDetail] = useState([
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

  useEffect(() => {
    // 連線資料庫
    async function recommendData() {
      try {
        const recommendData = await axios.get(recommendURL);
        // console.log(recommendData.data); //for check
        const totalDetail = recommendData.data;
        console.log('totalDetail', totalDetail);
        setDetail(totalDetail);
      } catch (e) {
        console.log(e);
      }
    }
    recommendData();
  }, []);

  return (
    <div>
      {detail.map((detail, i) => {
        return (
          <div key={i} className="row-cols-1 mt-3 mb-3">
            <div className="recommend-card card">
              <div className="row no-gutters">
                <div className="col-md-4 recommend-pic-box">
                  <div className="recommend-pic-box-wrap">
                    <img
                      className="recommend-cardimg img-fluid"
                      src={`${IMAGE_URL}/img/article-img/${detail.pic}`}
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="recommend-card-body card-body">
                    <div className="row">
                      <div className="recommend-cardFirstLine col-12">
                        <h5 className="recommend-cardTitle mr-3 recommend-h3 h3">
                          {detail.name}
                        </h5>
                        <p className="text-primary recommend-body-content mr-3 ">
                          <img className="mr-1" src={level} alt="..." />
                          難度{detail.level_name}
                        </p>
                        <p className="text-primary recommend-body-content mr-3 ">
                          <i className="fas recommend-fa-shoe-prints mr-2">
                            <FaShoePrints size={20}></FaShoePrints>
                          </i>
                          {detail.distance}公里
                        </p>
                        <i className="bi recommend-bi-heart-fill mr-2 ml-auto">
                          <BsHeartFill></BsHeartFill>
                        </i>
                        <p className="recommend-body-content">加入收藏</p>
                      </div>
                      <div className="recommend-cardSecondLine col-12">
                        <div className="recommend-starGroup mr-3">
                          <i className="bi recommend-bi-star-fill">
                            <BsStarFill></BsStarFill>
                          </i>
                          <i className="bi recommend-bi-star-fill">
                            <BsStarFill></BsStarFill>
                          </i>
                          <i className="bi recommend-bi-star-fill">
                            <BsStarFill></BsStarFill>
                          </i>
                          <i className="bi recommend-bi-star-fill">
                            <BsStarFill></BsStarFill>
                          </i>
                          <i className="bi recommend-bi-star-fill">
                            <BsStarFill></BsStarFill>
                          </i>
                        </div>
                        <p className="recommend-body-content text-muted pt-2 m-0">
                          {detail.city}
                        </p>
                      </div>
                      <div className="recommend-textBox col-12">
                        <p className="recommend-card-text recommend-body-content">
                          {detail.content}
                        </p>
                      </div>
                      <div className="recommend-cardLastLine col-12 mt-3 mb-0">
                        <small className="recommend-body-content-small text-muted align-self-end">
                          2人收藏
                        </small>
                        <Link to={'/recommend/detail/' + detail.id}>
                          <button className="btn btn-primary">查看更多</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
