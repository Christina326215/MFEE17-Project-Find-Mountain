import React from 'react';

// ===icon start===
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
// ===icon end===

//===import img start===
import clothesPic1Removebg from '../../img/img-outfit/clothes-pic1-removebg-preview.png';
import clothesPic2Removebg from '../../img/img-outfit/clothes-pic2-removebg-preview.png';
import clothesPic3Removebg from '../../img/img-outfit/clothes-pic3-removebg-preview.png';
import bagsPic1Removebg from '../../img/img-outfit/bags-pic1-removebg-preview.png';
import bagsPic2Removebg from '../../img/img-outfit/bags-pic2-removebg-preview.png';
import bagsPic3Removebg from '../../img/img-outfit/bags-pic3-removebg-preview.png';
import shoesPic1Removebg from '../../img/img-outfit/shoes-pic1-removebg-preview.png';
import shoesPic2Removebg from '../../img/img-outfit/shoes-pic2-removebg-preview.png';
import shoesPic3Removebg from '../../img/img-outfit/shoes-pic3-removebg-preview.png';
//===import img end===

function OutfitProductSlider(props) {
  // const handleDragStart = (e) => {
  //   console.log('child', e);
  //   props.dragStart(e);
  // };
  return (
    <>
      {/* product-warpper start */}
      <div className="outfit-product-slider">
        <BsFillCaretLeftFill className="outfit-prev mb-1" id="slideLeft" />
        <BsFillCaretRightFill className="outfit-next mb-1" id="slideRight" />
        <div className="outfit-product-wrapper" id="slider">
          <div className="outfit-product">
            <div
              className="outfit-product-img"
              // draggable="true"
              // onDragStart={(e) => handleDragStart(e)}
            >
              <img
                src={bagsPic1Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                id="10"
                data-productName="The North Face 黑色便捷休閒腰包"
                data-price="1780"
                // draggable="true"
                // onDragStart={(e) => handleDragStart(e)}
              />
            </div>
            <div className="outfit-product-info">
              <p>The North Face 黑色便捷休閒腰包</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={bagsPic2Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="11"
                data-productName="The North Face 黑灰色休閒後背包"
                data-price="2180"
              />
            </div>
            <div className="outfit-product-info">
              <p>The North Face 黑灰色休閒後背包</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={bagsPic3Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="12"
                data-productName="The North Face 黑色舒適休閒後背包"
                data-price="5292"
              />
            </div>
            <div className="outfit-product-info">
              <p>The North Face 黑色舒適休閒後背包</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={shoesPic1Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="1"
                data-productName="MERRELL Tetrex Crest Wrap 女水陸三棲鞋"
                data-price="2680"
              />
            </div>
            <div className="outfit-product-info">
              <p>MERRELL Tetrex Crest Wrap 女水陸三棲鞋</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={shoesPic2Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="2"
                data-productName="TEVA Arrowood 2 Low WP 低筒防潑水休閒鞋"
                data-price="2706"
              />
            </div>
            <div className="outfit-product-info">
              <p>TEVA Arrowood 2 Low WP 低筒防潑水休閒鞋</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={shoesPic3Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="3"
                data-productName="KEEN Terradora Mid 女戶外防水 登山鞋"
                data-price="3915"
              />
            </div>
            <div className="outfit-product-info">
              <p>KEEN Terradora Mid 女戶外防水 登山鞋</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={clothesPic1Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="19"
                data-productName="【2000mm 防水】男透氣休閒健行外套 QUECHUA"
                data-price="499"
              />
            </div>
            <div className="outfit-product-info">
              <p>【2000mm 防水】男透氣休閒健行外套 QUECHUA</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={clothesPic2Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="20"
                data-productName="男士透氣連帽跑步 風衣 KALENJI RUN WIND"
                data-price="499"
              />
            </div>
            <div className="outfit-product-info">
              <p>男士透氣連帽跑步 風衣 KALENJI RUN WIND</p>
            </div>
          </div>
          <div className="outfit-product">
            <div className="outfit-product-img">
              <img
                src={clothesPic3Removebg}
                alt=""
                className="outfit-slider-image outfit-cover-fit"
                draggable
                id="21"
                data-productName="【2000mm 防水】女透氣健行外套 QUECHUA"
                data-price="499"
              />
            </div>
            <div className="outfit-product-info">
              <p>【2000mm 防水】女透氣健行外套 QUECHUA</p>
            </div>
          </div>
        </div>
      </div>
      {/* product-warpper end */}
    </>
  );
}

export default OutfitProductSlider;
