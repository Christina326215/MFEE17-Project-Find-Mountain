import React from 'react';

// ===icon start===
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
// ===icon end===

//===import img start===
import clothesPic7Removebg from '../../img/img-outfit/clothes-pic7-removebg-preview.png';
import clothesPic8Removebg from '../../img/img-outfit/clothes-pic8-removebg-preview.png';
import clothesPic9Removebg from '../../img/img-outfit/clothes-pic9-removebg-preview.png';
import bagsPic7Removebg from '../../img/img-outfit/bags-pic7-removebg-preview.png';
import bagsPic8Removebg from '../../img/img-outfit/bags-pic8-removebg-preview.png';
import bagsPic9Removebg from '../../img/img-outfit/bags-pic9-removebg-preview.png';
import shoesPic7Removebg from '../../img/img-outfit/shoes-pic7-removebg-preview.png';
import shoesPic8Removebg from '../../img/img-outfit/shoes-pic8-removebg-preview.png';
import shoesPic9Removebg from '../../img/img-outfit/shoes-pic9-removebg-preview.png';
//===import img end===

function OutfitProductSlider(props) {
  return (
    <>
      {/* product-warpper start */}
      <div className="outfit-product-slider">
        <BsFillCaretLeftFill className="outfit-prev mb-1" id="slideLeft3" />
        <BsFillCaretRightFill className="outfit-next mb-1" id="slideRight3" />
        <div className="outfit-product-wrapper" id="slider3">
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={bagsPic7Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                id="16"
                data-productName="GREGORY JADE 38 登山背包"
                data-price="6070"
              />
            </div>
            <div className="outfit-product-info">
              <p>GREGORY JADE 38 登山背包</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={bagsPic8Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="17"
                data-productName="The North Face 藍色專業登山後背包"
                data-price="8380"
              />
            </div>
            <div className="outfit-product-info">
              <p>The North Face 藍色專業登山後背包</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={bagsPic9Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="18"
                data-productName="The North Face 黑色舒適防護專業後背包"
                data-price="4923"
              />
            </div>
            <div className="outfit-product-info">
              <p>The North Face 黑色舒適防護專業後背包</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={shoesPic7Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="7"
                data-productName="CARPA GORE-TEX登山鞋"
                data-price="4779"
              />
            </div>
            <div className="outfit-product-info">
              <p>CARPA GORE-TEX登山鞋</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={shoesPic8Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="8"
                data-productName="ASOLO 阿空加瓜牛皮冰攀靴"
                data-price="8980"
              />
            </div>
            <div className="outfit-product-info">
              <p>ASOLO 阿空加瓜牛皮冰攀靴</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={shoesPic9Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="9"
                data-productName="Zamberlan 皮革登山靴"
                data-price="14580"
              />
            </div>
            <div className="outfit-product-info">
              <p>Zamberlan 皮革登山靴</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={clothesPic7Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="25"
                data-productName="Arcteryx 始祖鳥 單件式GORE-TEX化纖保暖外套"
                data-price="27360"
              />
            </div>
            <div className="outfit-product-info">
              <p>Arcteryx 始祖鳥 單件式GORE-TEX化纖保暖外套</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={clothesPic8Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="26"
                data-productName="The North Face Summit L5 FUTURELIGHT"
                data-price="18200"
              />
            </div>
            <div className="outfit-product-info">
              <p>The North Face Summit L5 FUTURELIGHT</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={clothesPic9Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="27"
                data-productName="女款專業登山GORE-TEX 3L+PRIMALOF科技纖維兩件式防水外套"
                data-price="13650"
              />
            </div>
            <div className="outfit-product-info">
              <p>女款專業登山GORE-TEX 3L+PRIMALOF科技纖維兩件式防水外套</p>
            </div>
          </div>
        </div>
      </div>
      {/* product-warpper end */}
    </>
  );
}

export default OutfitProductSlider;
