import React from 'react';

// ===icon start===
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
// ===icon end===

//===import img start===
import clothesPic4Removebg from '../../img/img-outfit/clothes-pic4-removebg-preview.png';
import clothesPic5Removebg from '../../img/img-outfit/clothes-pic5-removebg-preview.png';
import clothesPic6Removebg from '../../img/img-outfit/clothes-pic6-removebg-preview.png';
import bagsPic4Removebg from '../../img/img-outfit/bags-pic4-removebg-preview.png';
import bagsPic5Removebg from '../../img/img-outfit/bags-pic5-removebg-preview.png';
import bagsPic6Removebg from '../../img/img-outfit/bags-pic6-removebg-preview.png';
import shoesPic4Removebg from '../../img/img-outfit/shoes-pic4-removebg-preview.png';
import shoesPic5Removebg from '../../img/img-outfit/shoes-pic5-removebg-preview.png';
import shoesPic6Removebg from '../../img/img-outfit/shoes-pic6-removebg-preview.png';
//===import img end===

function OutfitProductSlider(props) {
  return (
    <>
      {/* product-warpper start */}
      <div className="outfit-product-slider">
        <BsFillCaretLeftFill className="outfit-prev mb-1" id="slideLeft" />
        <BsFillCaretRightFill className="outfit-next mb-1" id="slideRight" />
        <div className="outfit-product-wrapper" id="slider">
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={bagsPic4Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                id="13"
                data-productName="Karrimor sector 25 休閒登山後背包"
                data-price="3510"
              />
            </div>
            <div className="outfit-product-info">
              <p>Karrimor sector 25 休閒登山後背包</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={bagsPic5Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="14"
                data-productName="MAMMUT長毛象 Lithium Speed 20L"
                data-price="4480"
              />
            </div>
            <div className="outfit-product-info">
              <p>MAMMUT長毛象 Lithium Speed 20L</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={bagsPic6Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="15"
                data-productName="Arcteryx 始祖鳥 徒步背包 Brize 32"
                data-price="8341"
              />
            </div>
            <div className="outfit-product-info">
              <p>Arcteryx 始祖鳥 徒步背包 Brize 32</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={shoesPic4Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="4"
                data-productName="SALOMON EVASION GORE-TEX登山健行鞋"
                data-price="4577"
              />
            </div>
            <div className="outfit-product-info">
              <p>SALOMON EVASION GORE-TEX登山健行鞋</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={shoesPic5Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="5"
                data-productName="Caravan C403 登山健行鞋"
                data-price="4740"
              />
            </div>
            <div className="outfit-product-info">
              <p>Caravan C403 登山健行鞋</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={shoesPic6Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="6"
                data-productName="SALOMON X Ultra2 GORE-TEX低筒登山鞋"
                data-price="2790"
              />
            </div>
            <div className="outfit-product-info">
              <p>SALOMON X Ultra2 GORE-TEX低筒登山鞋</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={clothesPic4Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="22"
                data-productName="Arcteryx 始祖鳥 Cerium SV 保暖羽絨連帽外套"
                data-price="23800"
              />
            </div>
            <div className="outfit-product-info">
              <p>Arcteryx 始祖鳥 Cerium SV 保暖羽絨連帽外套</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={clothesPic5Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="23"
                data-productName="The North Face 戶外保暖羽絨外套"
                data-price="8310"
              />
            </div>
            <div className="outfit-product-info">
              <p>The North Face 戶外保暖羽絨外套</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={clothesPic6Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="24"
                data-productName="Mont-Bell Light Alpine 連帽羽絨外套"
                data-price="5580"
              />
            </div>
            <div className="outfit-product-info">
              <p>Mont-Bell Light Alpine 連帽羽絨外套</p>
            </div>
          </div>
        </div>
      </div>
      {/* product-warpper end */}
    </>
  );
}

export default OutfitProductSlider;
