import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import $ from 'jquery';

import { IMAGE_URL } from '../../utils/config';
import { tagURL } from '../../utils/config';

function ProductTag(props) {
  // 過濾後文章tag
  const [filterTag, SetFilterTag] = useState([]);
  // 過濾後tag照片
  const [picTag, SetPicTag] = useState([]);

  const tagBig = (e) => {
    $(e.currentTarget).hide();
    // 下一個元素
    $(e.currentTarget.nextElementSibling).show();
  };

  const tagSmall = (e) => {
    $(e.currentTarget).hide();
    // 上一個元素
    $(e.currentTarget.previousElementSibling).show();
  };

  useEffect(() => {
    async function TagData() {
      try {
        const TagData = await axios.get(tagURL);
        // console.log('TagData.data', TagData.data);
        const totalTag = TagData.data;

        const id = Number(props.match.params.id);

        const articleTag = totalTag.filter((v) => {
          return v.article_id === id;
        });
        // console.log('articleTag', articleTag);

        // 這篇文章不重複的照片陣列
        const tagArray = [];
        const result = articleTag.filter(function (v, index, arr) {
          if (!tagArray.includes(v.img)) {
            tagArray.push(v.img);
          }
        });
        // console.log('tagArray', tagArray);
        SetPicTag(tagArray);
        //////////

        // 這篇文章有的全部tag資料
        const resultTag = articleTag.filter((v, i) => {
          for (let i = 0; i < articleTag.length - 1; i++) {
            for (let j = 0; j <= articleTag.length - 1; j++) {
              if (!articleTag[i].img === articleTag[j].img) {
                return articleTag[i].img;
              }
            }
          }
          return articleTag[i].img;
        });
        // console.log('resultTag', resultTag);

        if (articleTag) SetFilterTag(articleTag);
      } catch (e) {
        console.log(e);
      }
    }
    TagData();
  }, []);
  return (
    <div>
      <h2 className="recommend-body-content-big-bold">此景點產品推薦</h2>
      <div className="row">
        {picTag.map((tagImg, index) => {
          return (
            <>
              <div className="col-lg-6 col-md-12 mb-md-3" key={index}>
                <div
                  className="recommend-productTagBg"
                  style={{
                    backgroundImage: `url("${IMAGE_URL}/img/tag-img/${picTag[index]}")`,
                  }}
                >
                  {filterTag.map((tag, i) => {
                    if (tag.img === picTag[index]) {
                      return (
                        <>
                          <div
                            className="recommend-tag-small"
                            onMouseEnter={tagBig}
                            key={i}
                          >
                            {/* (導連頁還要調整) */}
                            <Link
                              className="recommend-tag"
                              to={'/shop/product-detail/' + tag.id}
                              style={{
                                left: tag.position_x + '%',
                                top: tag.position_y + '%',
                              }}
                            >
                              {tag.name}
                            </Link>
                          </div>
                          <div
                            className="recommend-tag-big"
                            onMouseLeave={tagSmall}
                          >
                            {/* (導連頁還要調整) */}
                            <Link
                              className="recommend-tagHover recommend-Tag"
                              to={'/shop/product-detail/' + tag.id}
                              style={{
                                left: tag.position_x - 20 + '%',
                                top: tag.position_y - 10 + '%',
                              }}
                            >
                              <div className="row m-0">
                                <div className="col recommend-tagText">
                                  <p className="recommend-tagName">
                                    {tag.name}
                                  </p>
                                  <p className="recommend-tagPrice">
                                    $ {tag.price}
                                  </p>
                                </div>
                                <div className="recommend-productTagWrap col p-0">
                                  <img
                                    className="img-fluid recommend-productTagHover"
                                    src={`${IMAGE_URL}/img/product-img/${tag.pic}`}
                                    alt=""
                                  />
                                </div>
                              </div>
                            </Link>
                          </div>
                        </>
                      );
                    }
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default withRouter(ProductTag);
