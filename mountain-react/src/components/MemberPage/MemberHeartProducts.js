import React, { useState, useEffect } from 'react';
import FavoriteProductCard from './components/FavoriteProductCard';
import { memberProductURL } from '../../utils/config';
import { useAuth } from '../../context/auth'; // 取得member
import { pages_btn } from '../MapPage/pages/PagesBtn';
import axios from 'axios';

function MemberHeartProducts(props) {
  const { member } = useAuth(); // 取得購物車數字狀態
  const [favoriteProduct, setFavoriteProduct] = useState([]);
  useEffect(() => {
    async function getFavoriteData() {
      try {
        let favoriteData = await axios.post(memberProductURL, { member });
        // console.log('favoriteData.data', favoriteData.data);
        setFavoriteProduct(favoriteData.data);
      } catch (e) {
        console.log(e);
      }
    }
    getFavoriteData();
  }, []);
  return (
    <>
      <div id="content" className="content1">
        {/* <!-- product table start--> */}
        <table className="table member-product-article-table-all text-center p-md-4 p-lg-5">
          <thead>
            <tr>
              <th
                scope="col-1 col-md-1"
                className="align-middle member-product-article-product-img"
              >
                產品照片
              </th>
              <th
                scope="col-1 col-md-1"
                className="align-middle member-product-article-product-name"
              >
                產品名稱
              </th>
              <th
                scope="col-4 col-md-4"
                className="align-middle member-product-article-product-price"
              >
                單價
              </th>
              <th
                scope="col-1 col-md-1"
                className="align-middle member-product-article-product-buy"
              >
                加入購物車
              </th>
              <th
                scope="col-1"
                className="align-middle member-product-article-product-delete"
              >
                取消收藏
              </th>
            </tr>
          </thead>
          <tbody>
            {favoriteProduct.map((product, index) => {
              return (
                <FavoriteProductCard
                  productPic={product.pic}
                  productBrand={product.product_brand}
                  productName={product.product_name}
                  productPrice={product.price}
                  productId={product.product_id}
                  productType={product.type}
                  key={product.product_id}
                />
              );
            })}
          </tbody>
        </table>
        {/* <!-- 分頁 start  --> */}
        {pages_btn}
        {/* <!-- 分頁 end  --> */}
        {/* <!-- product table end--> */}
      </div>
    </>
  );
}

export default MemberHeartProducts;
