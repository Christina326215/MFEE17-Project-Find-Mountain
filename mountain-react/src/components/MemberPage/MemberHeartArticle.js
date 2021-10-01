import React from 'react';
import { useEffect, useState } from 'react';
import { BsXSquareFill } from 'react-icons/bs';
import levelLow from '../../img/article-img/level_low.svg';
import levelMiddle from '../../img/article-img/level_medium.svg';
import levelHigh from '../../img/article-img/level_high.svg';
import { IMAGE_URL, memberArticleURL } from '../../utils/config';
import { pages_btn } from '../MapPage/pages/PagesBtn'; //分頁按鈕
import axios from 'axios';
// 使用sweetalert2彈跳視窗
import Swal from 'sweetalert2';
//====== below catch member info star ======//
import { useAuth } from '../../context/auth';
//====== below catch member info end ======//

function MemberHeartArticle() {
  const [dataArticle, setArticleData] = useState([]);

  // 登入會員狀態
  const { member } = useAuth(); // 把 member 從 useContext中拿出來
  // 移除收藏id狀態
  const [deleteId, setDeleteId] = useState('');
  // 移除收藏重新render狀態
  //   const [render, setRender] = useState(false);

  // 移除收藏功能
  const deleteHeart = async (e) => {
    // if (!dataArticle) {
    //   return;
    // }
    const delArticleId = e.currentTarget.id;
    // console.log('delArticleId', delArticleId);
    setDeleteId(delArticleId);
    const deleteres = await axios.post(`${memberArticleURL}/deleteheart`, {
      delArticleId,
    });
    // console.log('deleteres.data', deleteres.data);

    // 讓頁面重新抓資料
    // setRender(true);
    // 使用sweetalert2彈跳視窗
    Swal.fire({
      icon: 'error',
      title: '已移除收藏文章',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    if (member === null) {
      return;
    }
    // console.log('重新render');
    // console.log('member', member);
    async function getArticleData() {
      try {
        /// 資料庫檢查user是否有收藏過此文章 heart
        const response = await axios.post(memberArticleURL, { member });
        const likeData = response.data;
        // console.log('likeData', likeData);
        setArticleData(likeData);
      } catch (e) {
        console.log(e);
      }
    }
    getArticleData();
  }, [member, deleteId]);

  return (
    <div>
      <div id="content" className="member-product-article-content2">
        {/* <!-- article table start--> */}
        <table className="table member-product-article-table-all text-center p-md-4 p-lg-5 table-hover">
          <thead>
            <tr>
              <th className="col-2">難度等級</th>
              <th className="col-3">文章照片</th>
              <th className="col-2">文章名稱</th>
              <th className="col-2">所在地</th>
              <th className="col-2">取消收藏</th>
            </tr>
          </thead>
          {dataArticle.map((items, i) => (
            <tbody key={i}>
              <tr>
                <td className="member-product-article-text-weight align-middle">
                  {items.article_level === 1 ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="mr-2">低</div>
                      <img className="mr-1" src={levelLow} alt="..." />
                    </div>
                  ) : (
                    ''
                  )}
                  {items.article_level === 2 ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="mr-2">中</div>
                      <img className="mr-1" src={levelMiddle} alt="..." />
                    </div>
                  ) : (
                    ''
                  )}
                  {items.article_level === 3 ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="mr-2">高</div>
                      <img className="mr-1" src={levelHigh} alt="..." />
                    </div>
                  ) : (
                    ''
                  )}
                </td>
                <td className="member-product-article-article-picture-img-wrapper">
                  <div className="member-product-article-article-picture-img-box">
                    <img
                      src={`${IMAGE_URL}/img/article-img/${items.article_pic}`}
                      alt=""
                      className="member-product-article-article-picture-img"
                    />
                  </div>
                </td>
                <td className="member-product-article-text-weight align-middle">
                  {items.article_name}
                </td>
                <td className="member-product-article-text-weight align-middle">
                  {items.article_city}
                </td>
                <td className="member-product-article-text-weight align-middle">
                  <BsXSquareFill
                    id={items.id}
                    className="member-product-article-cancel-icon"
                    size={28}
                    onClick={deleteHeart}
                    style={{ color: '#cc543a', cursor: 'pointer' }}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        {/* <!-- 分頁 start  --> */}
        {pages_btn}
        {/* <!-- 分頁 end  --> */}
        {/* <!-- article table end--> */}
      </div>
    </div>
  );
}

export default MemberHeartArticle;
