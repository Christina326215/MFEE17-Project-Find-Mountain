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
        <BsFillCaretLeftFill className="outfit-prev mb-1" id="slideLeft2" />
        <BsFillCaretRightFill className="outfit-next mb-1" id="slideRight2" />
        <div className="outfit-product-wrapper" id="slider2">
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={bagsPic4Removebg}
                alt="Karrimor sector 25 休閒登山後背包"
                title="Karrimor sector 25 休閒登山後背包"
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="13"
                data-productbrand="Karrimor"
                data-productname="sector 25 休閒登山後背包"
                data-price="3510"
                data-type="2"
              />
            </div>
            <div className="outfit-product-info">
              <p>
                Karrimor
                <br />
                sector 25 休閒登山後背包
              </p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={bagsPic5Removebg}
                alt="MAMMUT長毛象 Lithium Speed 20L"
                title="MAMMUT長毛象 Lithium Speed 20L"
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="14"
                data-productbrand="MAMMUT長毛象"
                data-productname="Lithium Speed 20L"
                data-price="4480"
                data-type="2"
              />
            </div>
            <div className="outfit-product-info">
              <p>
                MAMMUT長毛象
                <br />
                Lithium Speed 20L
              </p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={bagsPic6Removebg}
                alt="Arcteryx 始祖鳥 徒步背包 Brize 32"
                title="Arcteryx 始祖鳥 徒步背包 Brize 32"
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="15"
                data-productbrand="Arcteryx 始祖鳥"
                data-productname="徒步背包 Brize 32"
                data-price="8341"
                data-type="2"
              />
            </div>
            <div className="outfit-product-info">
              <p>
                Arcteryx 始祖鳥
                <br />
                徒步背包 Brize 32
              </p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={shoesPic4Removebg}
                alt="SALOMON EVASION 登山健行鞋"
                title="SALOMON EVASION 登山健行鞋"
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="4"
                data-productbrand="SALOMON"
                data-productname="EVASION 登山健行鞋"
                data-price="4577"
                data-type="1"
              />
            </div>
            <div className="outfit-product-info">
              <p>
                SALOMON
                <br />
                EVASION 登山健行鞋
              </p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={shoesPic5Removebg}
                alt="Caravan C403 登山健行鞋"
                title="Caravan C403 登山健行鞋"
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="5"
                data-productbrand="Caravan"
                data-productname="C403 登山健行鞋"
                data-price="4740"
                data-type="1"
              />
            </div>
            <div className="outfit-product-info">
              <p>
                Caravan
                <br />
                C403 登山健行鞋
              </p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={shoesPic6Removebg}
                alt="SALOMON X Ultra2 低筒登山鞋"
                title="SALOMON X Ultra2 低筒登山鞋"
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="6"
                data-productbrand="SALOMON"
                data-productname="X Ultra2 低筒登山鞋"
                data-price="2790"
                data-type="1"
              />
            </div>
            <div className="outfit-product-info">
              <p>
                SALOMON
                <br />X Ultra2 低筒登山鞋
              </p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={clothesPic4Removebg}
                alt="Arcteryx 始祖鳥 Cerium SV 保暖羽絨連帽外套"
                title="Arcteryx 始祖鳥 Cerium SV 保暖羽絨連帽外套"
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="22"
                data-productbrand="Arcteryx 始祖鳥"
                data-productname="Cerium SV 保暖羽絨連帽外套"
                data-price="23800"
                data-type="3"
              />
            </div>
            <div className="outfit-product-info">
              <p>
                Arcteryx 始祖鳥
                <br />
                Cerium SV 保暖羽絨連帽外套
              </p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={clothesPic5Removebg}
                alt="The North Face 戶外保暖羽絨外套"
                title="The North Face 戶外保暖羽絨外套"
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="23"
                data-productbrand="The North Face"
                data-productname="戶外保暖羽絨外套"
                data-price="8310"
                data-type="3"
              />
            </div>
            <div className="outfit-product-info">
              <p>
                The North Face
                <br />
                戶外保暖羽絨外套
              </p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={clothesPic6Removebg}
                alt="Mont-Bell Light Alpine 連帽羽絨外套"
                title="Mont-Bell Light Alpine 連帽羽絨外套"
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="24"
                data-productbrand="Mont-Bell"
                data-productname="Light Alpine 連帽羽絨外套"
                data-price="5580"
                data-type="3"
              />
            </div>
            <div className="outfit-product-info">
              <p>
                Mont-Bell
                <br />
                Light Alpine 連帽羽絨外套
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* product-warpper end */}
    </>
  );
}

export default OutfitProductSlider;
