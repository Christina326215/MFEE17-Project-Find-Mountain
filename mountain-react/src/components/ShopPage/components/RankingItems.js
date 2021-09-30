import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { shopURL } from '../../../utils/config';
import ProductCard from './ProductCard';
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';
import '../../../styles/product.css';
import $ from 'jquery';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick.min.js';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

function RankingItems(props) {
  const [rankingData, setRankingData] = useState([]);
  useEffect(() => {
    async function getRankingData() {
      try {
        const rankingProducts = await axios.get(`${shopURL}/ranking`);
        const firstFive = rankingProducts.data.slice(0, 8);
        setRankingData(firstFive);
      } catch (e) {
        console.log(e);
      }
    }
    getRankingData();
  }, []);
  useEffect(() => {
    if (rankingData.length > 0 && rankingData !== []) {
      console.log('有了歐');
      $('.shopmain-product-slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3500,
        nextArrow: $('.shopmain-next'),
        prevArrow: $('.shopmain-prev'),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 753,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    } else {
      console.log('還沒歐');
    }
  }, [rankingData]);
  return (
    <>
      {/* <!-- =========熱銷不敗(本月暢銷排行) start========= --> */}
      <div>
        <div className="position-relative shopmain-title-box">
          <h3 className="shopmain-selected-title text-center">
            熱銷不敗(本月暢銷排行)
          </h3>
          <div className="shopmain-title-underline position-absolute"></div>
        </div>
        <div className="shopmain-product-list my-4 position-relative">
          <Link
            to="#/"
            className="position-absolute shopmain-slider-arrows-left text-center shopmain-prev"
          >
            {/* <i className="bi bi-chevron-left"></i> */}
            <CaretLeftFill className="shopmain-slider-arrows-left-height" />
          </Link>
          <Link
            to="#/"
            className="position-absolute shopmain-slider-arrows-right text-center shopmain-next"
          >
            {/* <i className="bi bi-chevron-right"></i> */}
            <CaretRightFill className="shopmain-slider-arrows-right-height" />
          </Link>
          <div className="shopmain-product-slider row">
            {rankingData.map((item, i) => {
              return (
                <ProductCard
                  productId={item.id}
                  brand={item.product_brand}
                  name={item.product_name}
                  price={item.price}
                  type={item.type}
                  picture={item.pic}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* <!-- =========熱銷不敗(本月暢銷排行) end========= --> */}
    </>
  );
}

export default RankingItems;
